import { schemaName } from "./preview.js";

const SKIP = new Set(["script", "style", "link", "meta", "noscript", "template", "head"]);
const BLOCKS = new Set(["div", "section", "header", "article", "main", "footer", "nav"]);
const LANDMARKS = new Set(["section", "header", "footer", "article", "main", "nav"]);

function isUrl(value) {
  if (/^https?:\/\/\S+$/i.test(value)) return true;
  return /^www\.\S+$/i.test(value) && !value.includes(" ");
}

function isDocument(value) {
  return /<!doctype\s+html|<html[\s>]|<body[\s>]/i.test(value);
}

function isComponent(value) {
  if (isDocument(value)) return false;
  return /\bclassName\s*=/.test(value) || /(?:^|\n)\s*(?:import|export)\s/.test(value);
}

function elements(node) {
  return [...(node?.children || [])].filter((element) => !SKIP.has(element.tagName.toLowerCase()));
}

function plain(element) {
  return (element.textContent || "").replace(/\s+/g, " ").trim();
}

function isLandmark(element) {
  return LANDMARKS.has(element.tagName.toLowerCase());
}

function meaningful(element) {
  if (element.querySelector("img, svg")) return true;
  return plain(element).length >= 24;
}

function ownHeading(element) {
  const tag = element.tagName.toLowerCase();
  if (!BLOCKS.has(tag)) return "";
  const heading = element.querySelector("h1, h2");
  if (!heading) return "";
  let parent = heading.parentElement;
  while (parent && parent !== element) {
    if (isLandmark(parent)) return "";
    parent = parent.parentElement;
  }
  return plain(heading);
}

function expand(list) {
  const out = [];
  for (const element of list) {
    const tag = element.tagName;
    const inner = elements(element).filter((child) => isLandmark(child));
    if ((tag === "MAIN" || tag === "DIV") && inner.length >= 2) out.push(...inner);
    else out.push(element);
  }
  return out.filter(meaningful);
}

function splitRoot(root, depth, allowBlocks) {
  const kids = elements(root);
  const landmarks = kids.filter(isLandmark);
  if (landmarks.length >= 2) return expand(landmarks);
  if (kids.length === 1 && depth < 6) {
    const only = kids[0];
    const tag = only.tagName;
    const nested = splitRoot(only, depth + 1, tag === "DIV" || tag === "MAIN");
    if (nested.length >= 2) return nested;
  }
  if (allowBlocks) {
    const headed = kids.filter((element) => ownHeading(element) && meaningful(element));
    if (headed.length >= 2) return headed;
  }
  return [];
}

function nameFor(element, index) {
  const tag = element.tagName.toLowerCase();
  if (tag === "nav") return "Menu";
  if (tag === "footer" && !ownHeading(element)) return "Footer";
  const heading = ownHeading(element);
  return (heading || plain(element).slice(0, 42) || `Section ${index + 1}`).slice(0, 42);
}

function toSection(element, index, used) {
  let name = schemaName(nameFor(element, index));
  if (used.has(name)) name = schemaName(`${name.slice(0, 20)} ${index + 1}`);
  used.add(name);
  return {
    id: `part-${index + 1}`,
    name,
    html: element.outerHTML,
    preview: plain(element).slice(0, 90),
  };
}

function bodyWithoutScripts(doc) {
  const clone = doc.body.cloneNode(true);
  clone.querySelectorAll("script, style, link, noscript, template").forEach((node) => node.remove());
  return clone.innerHTML.trim();
}

export function inspectInput(text) {
  const raw = String(text ?? "");
  const trimmed = raw.trim();
  if (!trimmed) return { kind: "empty", sections: [], truncated: false };
  if (isUrl(trimmed)) return { kind: "url", url: trimmed, sections: [], truncated: false };
  if (isComponent(trimmed)) return { kind: "code", sections: [], truncated: false };

  const doc = new DOMParser().parseFromString(trimmed, "text/html");
  const found = splitRoot(doc.body, 0, true);
  const truncated = found.length > 8;
  const used = new Set();
  const sections = found.slice(0, 8).map((element, index) => toSection(element, index, used));
  if (sections.length >= 2) return { kind: "page", sections, truncated };
  if (isDocument(trimmed)) {
    const html = sections[0]?.html || bodyWithoutScripts(doc);
    if (html) {
      return {
        kind: "extracted",
        sections: [{ id: "part-1", name: sections[0]?.name || "", html, preview: sections[0]?.preview || "" }],
        truncated: false,
      };
    }
  }
  return { kind: "code", sections: [], truncated: false };
}

export function packSteps(fileNames) {
  const lines = [
    "Duplicate the theme in Shopify admin before you add anything. Leave the live theme alone until the duplicate looks right.",
    "On the duplicate, open Edit code, then Sections.",
  ];
  for (const name of fileNames) lines.push(`Add a new section and paste sections/${name}.`);
  lines.push("Open Customize on that duplicate and add each section to a page.");
  lines.push("Choose every image again. Check a phone-width view and tab through the links.");
  lines.push("Publish the duplicate only after that check. Products, cart, and checkout are not in these files.");
  return lines;
}
