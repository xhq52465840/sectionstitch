const LIQUID_TOKEN = /\{[{%]|[%}]\}/;

export function schemaName(value) {
  return String(value || "").replace(/[^\w -]/g, "").trim().slice(0, 25) || "Converted section";
}

export function fileName(sectionName) {
  const slug = String(sectionName || "").toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 30) || "section";
  return `${slug}.liquid`;
}

export function safeUrl(value) {
  const v = String(value || "").trim();
  if (/^(https?:\/\/|\/[^/]|\/$)/i.test(v)) return v;
  return "";
}

export function plainText(value) {
  return String(value ?? "").replace(/\{[{%]|[%}]\}/g, "").slice(0, 4000);
}

export function hasLiquid(value) {
  return LIQUID_TOKEN.test(String(value ?? ""));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hexChannels(hex) {
  let h = String(hex || "").replace("#", "");
  if (!/^[0-9a-fA-F]{3,8}$/.test(h)) return null;
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = Number.parseInt(h.slice(0, 6), 16);
  if (Number.isNaN(n)) return null;
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export function assess(conv) {
  const notes = [];
  const blockers = [];
  for (const warning of conv.warnings || []) {
    if (/best-effort export/i.test(warning)) continue;
    if (/image_picker cannot keep/i.test(warning)) {
      notes.push("Images stay empty until you select them in the Shopify theme editor.");
      continue;
    }
    if (/Repeated blocks use the first/i.test(warning)) {
      notes.push("Repeated items copy the first item’s layout. Check icons and spacing in the theme.");
      continue;
    }
    if (/Literal array \.map\(\)/i.test(warning)) {
      notes.push("A literal list became repeatable blocks.");
      continue;
    }
    if (/accordion helper/i.test(warning)) {
      notes.push("The accordion is native details/summary. Open and close each item with the keyboard.");
      continue;
    }
    if (/Dark-mode Tailwind variants/i.test(warning)) {
      notes.push(warning);
      continue;
    }
    if (/CSS not available/i.test(warning) || /omitted|unsafe|unsupported tag|removed unsupported|no local implementation|unwrapped/i.test(warning)) {
      blockers.push(warning);
      continue;
    }
    notes.push(warning);
  }
  const missing = conv.stats?.unsupportedClasses || 0;
  let level = "ready";
  if (blockers.some((w) => /omitted|unsafe|unsupported tag|no local implementation|removed unsupported/i.test(w)) || missing > 12) {
    level = "stop";
  } else if (blockers.length || missing > 0) {
    level = "review";
  }
  return { level, notes, blockers };
}

export function snapshot(schema) {
  const settings = {};
  for (const field of schema.settings || []) {
    settings[field.id] = field.default != null ? String(field.default) : "";
  }
  const blocks = (schema.presets?.[0]?.blocks || []).map((block) => ({
    type: block.type,
    settings: Object.fromEntries(Object.entries(block.settings || {}).map(([key, value]) => [key, String(value)])),
  }));
  return { settings, blocks };
}

function fieldValue(field, raw) {
  if (!field || field.type === "image_picker") return "";
  let value = plainText(raw ?? "");
  if (field.type === "url") value = safeUrl(value);
  if (field.type === "color" && !/^#[0-9a-fA-F]{3,8}$/.test(value)) return null;
  return value;
}

export function applyEdits(conv, state, sectionName) {
  const schema = structuredClone(conv.schema);
  schema.name = schemaName(sectionName);
  for (const field of schema.settings || []) {
    if (field.type === "image_picker") {
      delete field.default;
      continue;
    }
    const value = fieldValue(field, state.settings[field.id]);
    if (value == null) continue;
    if (value === "") delete field.default;
    else field.default = value;
  }
  if (schema.presets?.[0]) {
    schema.presets[0].name = schema.name;
    schema.presets[0].blocks = state.blocks.map((block) => {
      const def = (schema.blocks || []).find((item) => item.type === block.type);
      const settings = {};
      for (const field of def?.settings || []) {
        const value = fieldValue(field, block.settings[field.id]);
        if (value) settings[field.id] = value;
      }
      return { type: block.type, settings };
    });
  }
  if (!/\{% schema %\}[\s\S]*\{% endschema %\}/.test(conv.liquid)) {
    throw new Error("Generated file has no schema block to update.");
  }
  const liquid = conv.liquid.replace(
    /\{% schema %\}[\s\S]*\{% endschema %\}/,
    `{% schema %}\n${JSON.stringify(schema, null, 2)}\n{% endschema %}`,
  );
  return { liquid, schema };
}

function placeholder(className) {
  const cls = escapeHtml(className || "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" role="img" aria-label="Image selected in Shopify" class="${cls}"><rect width="800" height="480" fill="#e7eee4"></rect><text x="400" y="248" text-anchor="middle" fill="#5c6b5e" font-size="28" font-family="sans-serif">Image selected in Shopify</text></svg>`;
}

function previewValues(fields, values) {
  const out = { ...values };
  for (const field of fields || []) {
    const value = fieldValue(field, values[field.id]);
    out[field.id] = value == null ? String(field.default || "") : value;
  }
  return out;
}

function fillScope(template, scope, values) {
  return template.replace(new RegExp(`\\{\\{\\s*${scope}\\.settings\\.(\\w+)\\s*\\|\\s*escape\\s*\\}\\}`, "g"), (_, id) => escapeHtml(values[id] ?? ""));
}

function replaceImages(template) {
  return template.replace(
    /\{%\s*if\s+(?:section|block)\.settings\.\w+\s*!=\s*blank\s*%\}[\s\S]*?\{%\s*else\s*%\}\{\{\s*'image'\s*\|\s*placeholder_svg_tag:\s*'([^']*)'\s*\}\}\{%\s*endif\s*%\}/g,
    (_, className) => placeholder(className),
  );
}

function applyColors(css, settings) {
  return css.replace(
    /\{\{\s*section\.settings\.(\w+)\s*\|\s*color_extract:\s*'(red|green|blue)'\s*\}\}/g,
    (_, id, channel) => {
      const channels = (hexChannels(settings[id]) || "0 0 0").split(" ");
      const index = channel === "red" ? 0 : channel === "green" ? 1 : 2;
      return channels[index];
    },
  );
}

export function renderSrcdoc(conv, state) {
  const sectionValues = previewValues(conv.schema.settings, state.settings);
  let markup = conv.markup.replace(/\{\{\s*section\.id\s*\}\}/g, "preview");
  markup = markup.replace(/\{\{\s*block\.shopify_attributes\s*\}\}/g, "");
  markup = markup.replace(
    /\{%\s*for block in section\.blocks\s*%\}\{%\s*if block\.type == '([^']+)'\s*%\}([\s\S]*?)\{%\s*endif\s*%\}\{%\s*endfor\s*%\}/g,
    (_, type, inner) => state.blocks
      .filter((block) => block.type === type)
      .map((block) => {
        const def = (conv.schema.blocks || []).find((item) => item.type === type);
        const values = previewValues(def?.settings, block.settings);
        return replaceImages(fillScope(inner, "block", values));
      })
      .join(""),
  );
  markup = replaceImages(fillScope(markup, "section", sectionValues));
  const leftover = /\{\{|\{%/.test(markup);
  markup = markup.replace(/\{%[\s\S]*?%\}/g, "").replace(/\{\{[\s\S]*?\}\}/g, "");

  const styleMatch = conv.liquid.match(/<style>([\s\S]*?)<\/style>/);
  let css = styleMatch ? styleMatch[1] : "";
  css = css.replace(/\{\{\s*section\.id\s*\}\}/g, "preview");
  css = applyColors(css, sectionValues);

  const srcdoc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;background:#fff}${css}</style></head><body><div id="shopify-section-preview">${markup}</div></body></html>`;
  return { srcdoc, leftover };
}

export function installSteps(sectionName) {
  const file = fileName(sectionName);
  const visible = schemaName(sectionName);
  return [
    `Download the file and keep it as sections/${file}.`,
    "In Shopify admin, open Online Store, then Themes. Duplicate the theme and edit the duplicate.",
    "On the duplicate, open Edit code, then Sections, then Add a new section. Paste the whole file.",
    `Open Customize on that theme, choose Add section, and select “${visible}”.`,
    "Select every image again. Edit the text, try adding and removing a repeated item, and check a phone-width preview.",
    "Tab through every link and disclosure. Publish the duplicate only after that check.",
  ];
}

export function reviewBrief(conv, report, sectionName) {
  const lines = [
    "SectionStitch review brief",
    `Section: ${schemaName(sectionName)}`,
    `File: sections/${fileName(sectionName)}`,
    `Verdict: ${report.level}`,
    `Settings: ${conv.stats?.settings ?? 0}`,
    `Block types: ${conv.stats?.blockTypes ?? 0}`,
    `Preset blocks: ${conv.stats?.presetBlocks ?? 0}`,
    `Unsupported classes: ${conv.stats?.unsupportedClasses ?? 0}`,
    "Blockers:",
    ...(report.blockers.length ? report.blockers.map((item) => `- ${item}`) : ["- none"]),
    "Notes:",
    ...(report.notes.length ? report.notes.map((item) => `- ${item}`) : ["- none"]),
    "Source code is not included.",
  ];
  return lines.join("\n");
}

export function maxBlocks(schema) {
  const value = Number(schema.max_blocks);
  return Number.isFinite(value) && value > 0 ? value : 50;
}
