import { inspectInput, packSteps } from "./page-split.js";
import {
  applyEdits,
  assess,
  fileName,
  hasLiquid,
  installSteps,
  maxBlocks,
  renderSrcdoc,
  reviewBrief,
  safeUrl,
  snapshot,
} from "./preview.js";
import { zipStore } from "./zip.js";

const $ = (id) => document.getElementById(id);
const DRAFT_KEY = "sectionstitch-draft-v1";
const TITLES = {
  ready: "Ready to try on a duplicate theme",
  review: "Review this before you install it",
  stop: "Do not install this output",
};
const BLURBS = {
  ready: "The preview below is approximate. Install the file on a duplicate theme, then select images and check the phone layout there.",
  review: "Some classes have no CSS in the file. The preview shows the gap. Add scoped CSS or simplify the markup before the section goes near a live theme.",
  stop: "This input is outside the static converter. Remove custom components, event handlers and third-party widgets, then convert one simple section.",
};

const source = $("source");
const output = $("output");
const sample = $("sample");
const nameInput = $("section-name");
const convert = $("convert");
const studio = $("studio");
const form = $("settings-form");
const frame = $("preview");
const stage = $("preview-stage");
const readiness = $("readiness");
const remember = $("remember");
const fileInput = $("file-input");
const copySteps = $("copy-steps");
const copyBrief = $("copy-brief");

const studioBody = $("studio-body");
const studioEmpty = $("studio-empty");
const pagePlan = $("page-plan");
const urlHelp = $("url-help");

let state = null;
let baseLiquid = null;
let baseSchema = null;
let pageResults = [];
let activeId = null;

function current() {
  return window.lastConversion;
}

function saveDraft() {
  try {
    if (!remember.checked) {
      localStorage.removeItem(DRAFT_KEY);
      return;
    }
    localStorage.setItem(DRAFT_KEY, JSON.stringify({
      source: source.value,
      name: nameInput.value,
    }));
  } catch {
    $("status").textContent = "This browser blocked local draft storage. The conversion still stays on this page.";
  }
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data.source !== "string" || !data.source.trim()) return null;
    return data;
  } catch {
    return null;
  }
}

function humanError(message) {
  const text = String(message || "");
  if (/120,000/.test(text)) return "That part is too long. Remove extra code, or split the page into smaller pieces.";
  if (/Liquid/.test(text)) return "This already contains Shopify code. Paste the original HTML instead.";
  if (/1,500/.test(text)) return "This part has too many elements. Convert a smaller piece of the page.";
  if (/45 editable/.test(text)) return "This part has too many text fields. Convert a smaller piece.";
  if (/No supported/.test(text)) return "Nothing here can become a section. Scripts and custom widgets are skipped.";
  if (/50 inferred/.test(text)) return "Too many repeated items. Split this part into two sections.";
  return text || "This could not be converted.";
}

function hideStudio() {
  state = null;
  baseLiquid = null;
  baseSchema = null;
  if (studioBody) studioBody.hidden = true;
  if (studioEmpty) studioEmpty.hidden = false;
  readiness.replaceChildren();
  form.replaceChildren();
  frame.srcdoc = "";
  copySteps.disabled = true;
  copyBrief.disabled = true;
}

function clearPlan() {
  pageResults = [];
  activeId = null;
  if (!pagePlan) return;
  pagePlan.hidden = true;
  pagePlan.replaceChildren();
}

function fieldNote(field, raw) {
  if (field.type === "url" && raw && !safeUrl(raw)) return "Use an https URL or a store path that starts with /.";
  if (hasLiquid(raw)) return "Remove {% and {{. Shopify reads those as Liquid, even inside schema text.";
  return "";
}

function addField(parent, field, raw, scope, index) {
  if (field.type === "image_picker") {
    const note = document.createElement("p");
    note.className = "field-note";
    note.textContent = `${field.label || "Image"} is chosen in Shopify. This preview keeps the placeholder.`;
    parent.append(note);
    return;
  }
  const label = document.createElement("label");
  label.textContent = field.label || field.id;
  const control = field.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
  if (field.type === "color") control.type = "color";
  else if (field.type !== "textarea") control.type = "text";
  control.value = raw ?? "";
  control.dataset.scope = scope;
  control.dataset.setting = field.id;
  if (index != null) control.dataset.index = String(index);
  if (field.type === "textarea") control.rows = 3;
  label.append(control);
  const note = fieldNote(field, raw);
  if (note) {
    const hint = document.createElement("p");
    hint.className = "field-error";
    hint.textContent = note;
    label.append(hint);
  }
  parent.append(label);
}

function blockDef(type) {
  return (baseSchema.blocks || []).find((item) => item.type === type);
}

function renderForm() {
  form.replaceChildren();
  const heading = document.createElement("h3");
  heading.textContent = "What you can edit";
  form.append(heading);
  const intro = document.createElement("p");
  intro.className = "field-note";
  intro.textContent = "Changes here update the preview and the file you download. Shopify shows the same fields after you install it.";
  form.append(intro);

  for (const field of baseSchema.settings || []) {
    addField(form, field, state.settings[field.id] ?? "", "section", null);
  }

  const types = baseSchema.blocks || [];
  if (!types.length) return;

  const blocksHeading = document.createElement("h3");
  blocksHeading.textContent = "Repeated items";
  form.append(blocksHeading);

  state.blocks.forEach((block, index) => {
    const def = blockDef(block.type);
    const card = document.createElement("div");
    card.className = "block-card";
    const head = document.createElement("div");
    head.className = "block-head";
    const title = document.createElement("strong");
    const same = state.blocks.filter((item) => item.type === block.type);
    const ordinal = same.indexOf(block) + 1;
    title.textContent = `${def?.name || block.type} ${ordinal}`;
    head.append(title);
    for (const [label, dir] of [["Up", -1], ["Down", 1]]) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "text-btn";
      button.textContent = label;
      button.dataset.move = String(dir);
      button.dataset.index = String(index);
      const neighbor = neighborIndex(index, dir);
      button.disabled = neighbor < 0;
      head.append(button);
    }
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "text-btn";
    remove.textContent = "Remove";
    remove.dataset.remove = String(index);
    head.append(remove);
    card.append(head);
    for (const field of def?.settings || []) {
      addField(card, field, block.settings[field.id] ?? "", "block", index);
    }
    form.append(card);
  });

  const actions = document.createElement("div");
  actions.className = "block-actions";
  const full = state.blocks.length >= maxBlocks(baseSchema);
  for (const def of types) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button secondary";
    button.textContent = `Add ${def.name || def.type}`;
    button.dataset.add = def.type;
    button.disabled = full;
    actions.append(button);
  }
  form.append(actions);
}

function neighborIndex(index, dir) {
  const type = state.blocks[index].type;
  const step = dir < 0 ? -1 : 1;
  for (let i = index + step; i >= 0 && i < state.blocks.length; i += step) {
    if (state.blocks[i].type === type) return i;
  }
  return -1;
}

function renderReadiness(report) {
  readiness.className = `readiness ${report.level}`;
  readiness.replaceChildren();
  const title = document.createElement("h3");
  title.textContent = TITLES[report.level];
  const blurb = document.createElement("p");
  blurb.textContent = BLURBS[report.level];
  readiness.append(title, blurb);
  const warnings = document.querySelector(".warnings");
  if (warnings) warnings.open = report.level !== "ready";
  const items = [...report.blockers, ...report.notes];
  if (!items.length) return;
  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
  readiness.append(list);
}

function refresh({ rebuild } = {}) {
  const conv = current();
  if (!conv || !state || !baseSchema) return;
  let edited;
  try {
    edited = applyEdits({ ...conv, liquid: baseLiquid, schema: baseSchema }, state, nameInput.value);
  } catch (error) {
    $("status").textContent = `Could not update the file: ${error.message}`;
    return;
  }
  conv.liquid = edited.liquid;
  conv.schema = edited.schema;
  output.value = edited.liquid;
  const report = assess(conv);
  renderReadiness(report);
  const view = renderSrcdoc({ ...conv, schema: baseSchema, liquid: edited.liquid }, state);
  frame.srcdoc = view.srcdoc;
  if (view.leftover) {
    const extra = document.createElement("p");
    extra.textContent = "The preview hid Liquid that this browser cannot run. Read the file before installing.";
    readiness.append(extra);
  }
  const stats = $("stats");
  if (stats && !stats.dataset.base) stats.dataset.base = stats.textContent;
  if (stats?.dataset.base) stats.textContent = `${stats.dataset.base} · sections/${fileName(nameInput.value)}`;
  if (rebuild) renderForm();
  if (studioBody) studioBody.hidden = false;
  if (studioEmpty) studioEmpty.hidden = true;
  copySteps.disabled = false;
  copyBrief.disabled = false;
  saveDraft();
}

function showResult() {
  const conv = current();
  if (!conv?.schema || !conv.markup) {
    hideStudio();
    return;
  }
  try {
    baseLiquid = conv.liquid;
    baseSchema = structuredClone(conv.schema);
    state = snapshot(conv.schema);
    const stats = $("stats");
    if (stats) {
      const count = conv.stats?.presetBlocks ? ` · ${conv.stats.presetBlocks} repeated items` : "";
      stats.dataset.base = `${conv.stats?.settings || 0} editable fields${count}`;
      delete stats.dataset.locked;
    }
    refresh({ rebuild: true });
    $("status").textContent = "Check the preview, change the words, then download the section.";
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    studio?.scrollIntoView({ block: "nearest", behavior: motion });
  } catch (error) {
    hideStudio();
    $("status").textContent = `The preview could not be drawn. ${error.message}`;
  }
}

function blankFrom(type) {
  const existing = [...state.blocks].reverse().find((block) => block.type === type);
  if (existing) return { type, settings: { ...existing.settings } };
  const settings = {};
  for (const field of blockDef(type)?.settings || []) {
    if (field.type === "image_picker") continue;
    if (field.default != null) settings[field.id] = String(field.default);
  }
  return { type, settings };
}

form.addEventListener("submit", (event) => event.preventDefault());

form.addEventListener("input", (event) => {
  const el = event.target;
  if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
  const id = el.dataset.setting;
  if (!id || !state) return;
  if (el.dataset.scope === "section") state.settings[id] = el.value;
  if (el.dataset.scope === "block") state.blocks[Number(el.dataset.index)].settings[id] = el.value;
  refresh();
  const field = el.dataset.scope === "section"
    ? (baseSchema.settings || []).find((item) => item.id === id)
    : (blockDef(state.blocks[Number(el.dataset.index)]?.type)?.settings || []).find((item) => item.id === id);
  const note = field ? fieldNote(field, el.value) : "";
  let hint = el.parentElement.querySelector(".field-error");
  if (note) {
    if (!hint) {
      hint = document.createElement("p");
      hint.className = "field-error";
      el.parentElement.append(hint);
    }
    hint.textContent = note;
  } else if (hint) {
    hint.remove();
  }
});

form.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !state) return;
  if (button.dataset.add) {
    if (state.blocks.length >= maxBlocks(baseSchema)) return;
    state.blocks.push(blankFrom(button.dataset.add));
    refresh({ rebuild: true });
    return;
  }
  if (button.dataset.remove != null) {
    state.blocks.splice(Number(button.dataset.remove), 1);
    refresh({ rebuild: true });
    return;
  }
  if (button.dataset.move) {
    const index = Number(button.dataset.index);
    const next = neighborIndex(index, Number(button.dataset.move));
    if (next < 0) return;
    const [item] = state.blocks.splice(index, 1);
    state.blocks.splice(next, 0, item);
    refresh({ rebuild: true });
  }
});

function renderPlan() {
  pagePlan.hidden = false;
  pagePlan.replaceChildren();
  const title = document.createElement("h3");
  const ready = pageResults.filter((item) => item.conv).length;
  title.textContent = ready > 1 ? `${ready} sections from this page` : "Section from this page";
  const copy = document.createElement("p");
  copy.textContent = "A Shopify theme is built from sections. Choose one to preview it. Download all of them when you are ready to install.";
  pagePlan.append(title, copy);
  const row = document.createElement("div");
  row.className = "plan-row";
  for (const item of pageResults) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "plan-card";
    button.dataset.part = item.id;
    button.disabled = !item.conv;
    button.setAttribute("aria-pressed", item.id === activeId ? "true" : "false");
    const strong = document.createElement("strong");
    strong.textContent = item.name || "Section";
    const span = document.createElement("span");
    span.textContent = item.error || item.preview || "Ready to preview";
    button.append(strong, span);
    row.append(button);
  }
  pagePlan.append(row);
  if (ready > 1) {
    const all = document.createElement("button");
    all.type = "button";
    all.className = "button secondary download-all";
    all.textContent = "Download all sections";
    pagePlan.append(all);
  }
}

function publish(conv) {
  window.lastConversion = conv;
  output.value = conv.liquid;
  $("download").disabled = false;
  $("copy").disabled = false;
  const list = $("warnings");
  list.replaceChildren(...(conv.warnings || []).map((warning) => {
    const item = document.createElement("li");
    item.textContent = warning;
    return item;
  }));
  showResult();
}

function failConvert(error) {
  window.lastConversion = null;
  output.value = "";
  $("download").disabled = true;
  $("copy").disabled = true;
  hideStudio();
  $("warnings").replaceChildren();
  $("status").textContent = humanError(error?.message || error);
}

function activate(item) {
  activeId = item.id;
  if (item.name) nameInput.value = item.name.slice(0, 25);
  publish(item.conv);
  renderPlan();
}

async function runPlan(plan) {
  clearPlan();
  urlHelp.hidden = true;
  $("status").textContent = "Splitting the page into sections…";
  await new Promise((resolve) => setTimeout(resolve, 0));
  if (typeof window.sectionConvert !== "function") {
    $("status").textContent = "The converter is still loading. Wait a second and try again.";
    return;
  }
  pageResults = plan.sections.map((section) => {
    try {
      if (section.html.length > 120000) throw new Error("120,000");
      const conv = window.sectionConvert(section.html, section.name);
      return { ...section, conv, error: "" };
    } catch (error) {
      return { ...section, conv: null, error: humanError(error.message) };
    }
  });
  const first = pageResults.find((item) => item.conv);
  renderPlan();
  if (!first) {
    hideStudio();
    $("status").textContent = "None of the parts could be converted. Scripts and custom widgets are skipped.";
    return;
  }
  activate(first);
  const failed = pageResults.length - pageResults.filter((item) => item.conv).length;
  const extra = plan.truncated ? " Only the first 8 parts are shown." : "";
  $("status").textContent = failed
    ? `${pageResults.filter((item) => item.conv).length} sections are ready. ${failed} were skipped.${extra}`
    : `${pageResults.filter((item) => item.conv).length} sections are ready. Check one, then download the files.${extra}`;
}

function convertExtracted(section) {
  urlHelp.hidden = true;
  if (typeof window.sectionConvert !== "function") {
    $("status").textContent = "The converter is still loading. Wait a second and try again.";
    return;
  }
  try {
    const conv = window.sectionConvert(section.html, nameInput.value || section.name);
    if (section.name) nameInput.value = section.name.slice(0, 25);
    publish(conv);
    $("status").textContent = "The page wrapper was left out. Check this section, then download it.";
  } catch (error) {
    failConvert(error);
  }
}

function saveBlob(bytes, filename, type) {
  const blob = bytes instanceof Blob ? bytes : new Blob([bytes], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadAll() {
  const used = new Set();
  const files = [];
  const labels = [];
  for (const item of pageResults) {
    if (!item.conv) continue;
    const stem = fileName(item.name).replace(/\.liquid$/, "");
    let name = `${stem}.liquid`;
    let number = 2;
    while (used.has(name)) {
      name = `${stem.slice(0, 20)}-${number}.liquid`;
      number += 1;
    }
    used.add(name);
    labels.push(name);
    files.push({ name: `sections/${name}`, text: item.conv.liquid });
  }
  if (!files.length) return;
  files.push({ name: "INSTALL.txt", text: packSteps(labels).join("\n") });
  saveBlob(zipStore(files), "shopify-sections.zip", "application/zip");
  $("status").textContent = `Downloaded ${labels.length} section files and the install notes.`;
}

convert.addEventListener("click", (event) => {
  const plan = inspectInput(source.value);
  urlHelp.hidden = plan.kind !== "url";
  if (plan.kind === "empty") {
    event.stopImmediatePropagation();
    clearPlan();
    hideStudio();
    output.value = "";
    $("download").disabled = true;
    $("copy").disabled = true;
    $("status").textContent = "Paste a page, or open an HTML file you saved.";
    return;
  }
  if (plan.kind === "url") {
    event.stopImmediatePropagation();
    clearPlan();
    hideStudio();
    output.value = "";
    $("download").disabled = true;
    $("copy").disabled = true;
    $("status").textContent = "Save that site as HTML, then open the file. A link cannot be converted.";
    return;
  }
  if (plan.kind === "page") {
    event.stopImmediatePropagation();
    runPlan(plan);
    return;
  }
  if (plan.kind === "extracted") {
    event.stopImmediatePropagation();
    clearPlan();
    convertExtracted(plan.sections[0]);
    return;
  }
  clearPlan();
}, true);

convert.addEventListener("click", () => {
  setTimeout(() => {
    if (pageResults.length) return;
    if (!window.lastConversion) {
      const message = ($("status").textContent || "").replace(/^Cannot convert:\s*/, "");
      $("status").textContent = humanError(message);
      hideStudio();
      return;
    }
    showResult();
  }, 0);
});

source.addEventListener("input", () => {
  hideStudio();
  clearPlan();
  urlHelp.hidden = true;
  saveDraft();
});

nameInput.addEventListener("input", () => {
  const active = pageResults.find((item) => item.id === activeId);
  if (active) active.name = nameInput.value;
  if (current()) refresh();
  else saveDraft();
});

sample.addEventListener("change", () => {
  if (!sample.value) return;
  setTimeout(() => convert.click(), 0);
});

source.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    convert.click();
  }
});

$("open-file").addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", async () => {
  const file = fileInput.files?.[0];
  fileInput.value = "";
  if (!file) return;
  if (file.size > 500000) {
    $("status").textContent = "That file is over 500 KB. Save a single page, not the whole site export.";
    return;
  }
  source.value = await file.text();
  const stem = file.name.replace(/\.[^.]+$/, "").replace(/[^\w -]/g, "").trim().slice(0, 25);
  if (stem) nameInput.value = stem;
  sample.value = "";
  convert.click();
});

const tool = $("tool");
tool.addEventListener("dragover", (event) => {
  event.preventDefault();
  tool.classList.add("drag");
});
tool.addEventListener("dragleave", () => tool.classList.remove("drag"));
tool.addEventListener("drop", async (event) => {
  event.preventDefault();
  tool.classList.remove("drag");
  const file = event.dataTransfer?.files?.[0];
  if (!file) return;
  if (file.size > 500000) {
    $("status").textContent = "That file is over 500 KB. Save a single page, not the whole site export.";
    return;
  }
  source.value = await file.text();
  const stem = file.name.replace(/\.[^.]+$/, "").replace(/[^\w -]/g, "").trim().slice(0, 25);
  if (stem) nameInput.value = stem;
  sample.value = "";
  convert.click();
});

function setViewport(mobile) {
  stage.classList.toggle("mobile", mobile);
  $("view-desktop").setAttribute("aria-pressed", mobile ? "false" : "true");
  $("view-mobile").setAttribute("aria-pressed", mobile ? "true" : "false");
}
$("view-desktop").addEventListener("click", () => setViewport(false));
$("view-mobile").addEventListener("click", () => setViewport(true));

pagePlan.addEventListener("click", (event) => {
  if (event.target.closest(".download-all")) {
    downloadAll();
    return;
  }
  const card = event.target.closest("[data-part]");
  if (!card) return;
  const item = pageResults.find((entry) => entry.id === card.dataset.part);
  if (item?.conv) activate(item);
});

$("download").addEventListener("click", (event) => {
  const conv = current();
  if (!conv?.liquid) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  saveBlob(new Blob([conv.liquid], { type: "text/plain" }), fileName(nameInput.value), "text/plain");
  $("status").textContent = `Downloaded sections/${fileName(nameInput.value)}. Add it to a duplicate theme.`;
}, true);

remember.addEventListener("change", saveDraft);

async function copyText(button, text) {
  try {
    await navigator.clipboard.writeText(text);
    const previous = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = previous;
    }, 1200);
  } catch {
    $("status").textContent = "Clipboard is blocked. Select the output and copy it manually.";
  }
}

copySteps.addEventListener("click", () => {
  const conv = current();
  if (!conv) return;
  copyText(copySteps, installSteps(nameInput.value).map((step, index) => `${index + 1}. ${step}`).join("\n"));
});

copyBrief.addEventListener("click", () => {
  const conv = current();
  if (!conv) return;
  copyText(copyBrief, reviewBrief(conv, assess(conv), nameInput.value));
});

convert.title = "Convert (Ctrl+Enter)";

function boot() {
  const draft = loadDraft();
  if (draft) {
    source.value = draft.source;
    if (draft.name) nameInput.value = draft.name;
    remember.checked = true;
    sample.value = "";
    convert.click();
    return;
  }
  if ([...sample.options].some((option) => option.value === "image-text")) {
    sample.value = "image-text";
    sample.dispatchEvent(new Event("change"));
  }
}

function whenReady(attempt = 0) {
  if (window.sectionSamples || attempt > 40) boot();
  else setTimeout(() => whenReady(attempt + 1), 50);
}

whenReady();
