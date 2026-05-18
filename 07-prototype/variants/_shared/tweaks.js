// Tweaks panel: ajusta tokens de color y fuentes en vivo.
// Persistencia en localStorage por path. Carga Google Fonts on demand.

const STORAGE_KEY = "pgw-tweaks-" + location.pathname;
const PATH = location.pathname;

// ============== Color tokens ==============
const COLOR_GROUPS = [
  { title: "Fondo", items: [
    { var: "--bg",         label: "Fondo principal" },
    { var: "--bg-soft",    label: "Fondo suave (hover)" },
    { var: "--bg-deep",    label: "Fondo profundo" },
  ]},
  { title: "Texto sobre fondo claro", items: [
    { var: "--ink",        label: "Tinta principal" },
    { var: "--ink-soft",   label: "Tinta suave" },
    { var: "--ink-mute",   label: "Tinta muda" },
  ]},
  { title: "Acento", items: [
    { var: "--accent",      label: "Acento (CTA, links)" },
    { var: "--accent-deep", label: "Acento hover" },
    { var: "--accent-soft", label: "Acento claro" },
  ]},
  { title: "Texto sobre fondo oscuro", items: [
    { var: "--on-dark",      label: "Texto sobre oscuro" },
    { var: "--on-dark-soft", label: "Texto suave sobre oscuro" },
  ]},
];

// ============== Font catalog ==============
// Cada entrada: { name, weights: "wght axis range or csv" }
// Las opciones se eligen según la variante actual (path).
const FONT_CATALOG = {
  // serif display options
  Spectral:           { axis: "ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500" },
  Cardo:              { axis: "ital,wght@0,400;0,700;1,400" },
  Vollkorn:           { axis: "ital,wght@0,400..900;1,400..900" },
  "EB Garamond":      { axis: "ital,wght@0,400..800;1,400..800" },
  Alegreya:           { axis: "ital,wght@0,400..900;1,400..900" },
  Faustina:           { axis: "ital,wght@0,300..800;1,300..800" },
  "Source Serif 4":   { axis: "ital,opsz,wght@0,8..60,200..900;1,8..60,200..900" },
  Marcellus:          { axis: "wght@400" },
  "Bodoni Moda":      { axis: "ital,opsz,wght@0,6..96,400..900;1,6..96,400..900" },
  // display variable / sans
  "Bricolage Grotesque": { axis: "opsz,wght@12..96,200..800" },
  "Wix Madefor Display": { axis: "wght@400..800" },
  "Big Shoulders Display": { axis: "wght@100..900" },
  "Anton":            { axis: "wght@400" },
  "Bebas Neue":       { axis: "wght@400" },
  "Bowlby One":       { axis: "wght@400" },
  "Oswald":           { axis: "wght@200..700" },
  "Archivo Black":    { axis: "wght@400" },
  // body sans
  Manrope:            { axis: "wght@200..800" },
  "Public Sans":      { axis: "ital,wght@0,100..900;1,100..900" },
  Sora:               { axis: "wght@100..800" },
  Geist:              { axis: "wght@100..900" },
  Archivo:            { axis: "ital,wght@0,100..900;1,100..900" },
  // mono
  "Roboto Mono":      { axis: "ital,wght@0,100..700;1,100..700" },
  "Geist Mono":       { axis: "wght@100..900" },
  "Fira Code":        { axis: "wght@300..700" },
};

// Lista de opciones por variante.
const FONT_OPTIONS = {
  v1: {
    display: ["Spectral", "Cardo", "Vollkorn", "EB Garamond", "Alegreya", "Faustina", "Source Serif 4", "Marcellus", "Bodoni Moda"],
    body:    ["Manrope", "Public Sans", "Sora", "Geist", "Archivo"],
  },
  v2: {
    display: ["Bricolage Grotesque", "Wix Madefor Display", "Big Shoulders Display", "Sora", "Bebas Neue", "Anton"],
    body:    ["Sora", "Manrope", "Public Sans", "Geist", "Archivo"],
  },
  v3: {
    display: ["Archivo Black", "Anton", "Bebas Neue", "Big Shoulders Display", "Bowlby One", "Oswald"],
    body:    ["Archivo", "Public Sans", "Geist", "Manrope", "Sora"],
    mono:    ["Roboto Mono", "Geist Mono", "Fira Code"],
  },
};

function detectVariant() {
  if (PATH.includes("/v1/")) return "v1";
  if (PATH.includes("/v2/")) return "v2";
  if (PATH.includes("/v3/")) return "v3";
  return null;
}

// ============== Font loader ==============
const loadedFonts = new Set();
function loadGoogleFont(name) {
  if (loadedFonts.has(name)) return;
  const meta = FONT_CATALOG[name];
  if (!meta) return;
  loadedFonts.add(name);
  const id = "tw-font-" + name.replace(/\s+/g, "-").toLowerCase();
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name).replace(/%20/g, "+")}:${meta.axis}&display=swap`;
  document.head.appendChild(link);
}

// ============== Color helpers ==============
function rgbToHex(rgb) {
  const m = rgb.match(/\d+/g);
  if (!m) return "#000000";
  return "#" + m.slice(0, 3).map(n => Number(n).toString(16).padStart(2, "0")).join("");
}
function getTokenColor(name) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!v) return "#000000";
  if (v.startsWith("#")) {
    if (v.length === 4) return "#" + v[1]+v[1] + v[2]+v[2] + v[3]+v[3];
    return v.substring(0, 7);
  }
  const t = document.createElement("span");
  t.style.color = v;
  document.body.appendChild(t);
  const computed = getComputedStyle(t).color;
  document.body.removeChild(t);
  return rgbToHex(computed);
}
function setToken(name, hex) {
  document.documentElement.style.setProperty(name, hex);
}

// ============== Storage ==============
function readSaved() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function writeSaved(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

// ============== Init ==============
function init() {
  const variant = detectVariant();
  const fonts = variant ? FONT_OPTIONS[variant] : null;

  // Apply saved state first
  const saved = readSaved();
  Object.entries(saved).forEach(([k, v]) => {
    if (k.startsWith("--")) {
      setToken(k, v);
      // If it's a font token, also load the family
      if (k === "--display" || k === "--body" || k === "--mono") {
        const fontName = (v.match(/^"([^"]+)"/) || [])[1];
        if (fontName) loadGoogleFont(fontName);
      }
    }
  });

  // Toggle button
  const btn = document.createElement("button");
  btn.className = "tweaks-toggle";
  btn.title = "Ajustar diseño";
  btn.setAttribute("aria-label", "Ajustar diseño");
  btn.textContent = "⚙";
  document.body.appendChild(btn);

  // Panel
  const panel = document.createElement("aside");
  panel.className = "tweaks";
  panel.setAttribute("aria-label", "Panel de ajustes");

  let html = "<h2>Ajustes</h2>";

  // ===== Font section =====
  if (fonts) {
    html += `<div class="tweaks__group"><h3>Tipografía</h3>`;

    const displayCurrent = saved["--display"]
      ? (saved["--display"].match(/^"([^"]+)"/) || [])[1]
      : fonts.display[0];
    html += `<div class="tweaks__select"><label>Display</label><select data-font="display">`;
    fonts.display.forEach(f => {
      html += `<option value="${f}"${f === displayCurrent ? " selected" : ""}>${f}</option>`;
    });
    html += `</select></div>`;

    const bodyCurrent = saved["--body"]
      ? (saved["--body"].match(/^"([^"]+)"/) || [])[1]
      : fonts.body[0];
    html += `<div class="tweaks__select"><label>Cuerpo</label><select data-font="body">`;
    fonts.body.forEach(f => {
      html += `<option value="${f}"${f === bodyCurrent ? " selected" : ""}>${f}</option>`;
    });
    html += `</select></div>`;

    if (fonts.mono) {
      const monoCurrent = saved["--mono"]
        ? (saved["--mono"].match(/^"([^"]+)"/) || [])[1]
        : fonts.mono[0];
      html += `<div class="tweaks__select"><label>Mono</label><select data-font="mono">`;
      fonts.mono.forEach(f => {
        html += `<option value="${f}"${f === monoCurrent ? " selected" : ""}>${f}</option>`;
      });
      html += `</select></div>`;
    }

    html += `</div>`;
  }

  // ===== Color sections =====
  COLOR_GROUPS.forEach(group => {
    html += `<div class="tweaks__group"><h3>${group.title}</h3>`;
    group.items.forEach(item => {
      const cur = saved[item.var] || getTokenColor(item.var);
      const safeId = item.var.replace(/[^a-z0-9]/gi, "");
      html += `
        <div class="tweaks__row">
          <label for="t_${safeId}">${item.label}</label>
          <input id="t_${safeId}" data-token="${item.var}" type="color" value="${cur}" />
          <input class="hex" data-hex-for="${item.var}" value="${cur}" maxlength="7" spellcheck="false" />
        </div>`;
    });
    html += `</div>`;
  });

  html += `
    <div class="tweaks__actions">
      <button data-action="reset">Reset</button>
      <button data-action="copy">Copiar CSS</button>
    </div>
    <p class="tweaks__hint">Cambios guardados en este navegador. Reset borra los tweaks; Copiar CSS exporta los tokens al portapapeles.</p>
  `;

  panel.innerHTML = html;
  document.body.appendChild(panel);

  btn.addEventListener("click", () => panel.classList.toggle("is-open"));

  // Color inputs
  panel.addEventListener("input", (e) => {
    const t = e.target;
    if (t.matches('input[type="color"][data-token]')) {
      const tok = t.dataset.token;
      setToken(tok, t.value);
      const hex = panel.querySelector(`.hex[data-hex-for="${tok}"]`);
      if (hex) hex.value = t.value;
      const state = readSaved(); state[tok] = t.value; writeSaved(state);
    } else if (t.matches('input.hex[data-hex-for]')) {
      const tok = t.dataset.hexFor;
      let v = t.value.trim();
      if (!v.startsWith("#")) v = "#" + v;
      if (/^#[0-9a-f]{6}$/i.test(v)) {
        setToken(tok, v);
        const color = panel.querySelector(`input[type="color"][data-token="${tok}"]`);
        if (color) color.value = v;
        const state = readSaved(); state[tok] = v; writeSaved(state);
      }
    }
  });

  // Font selectors
  panel.addEventListener("change", (e) => {
    const t = e.target;
    if (t.matches('select[data-font]')) {
      const slot = t.dataset.font;
      const family = t.value;
      loadGoogleFont(family);
      // Build font-family stack
      const stacks = {
        display: `"${family}", "Source Serif 4", Georgia, serif`,
        body:    `"${family}", system-ui, -apple-system, sans-serif`,
        mono:    `"${family}", ui-monospace, SFMono-Regular, monospace`,
      };
      // Heuristic: if family is sans-y, use sans stack regardless
      const sansFamilies = new Set(["Manrope", "Public Sans", "Sora", "Geist", "Archivo", "Anton", "Bebas Neue", "Bowlby One", "Oswald", "Bricolage Grotesque", "Wix Madefor Display", "Big Shoulders Display", "Archivo Black"]);
      const monoFamilies = new Set(["Roboto Mono", "Geist Mono", "Fira Code"]);
      let stack;
      if (slot === "mono" || monoFamilies.has(family)) {
        stack = stacks.mono;
      } else if (slot === "display") {
        stack = sansFamilies.has(family) ? stacks.body : stacks.display;
      } else {
        stack = stacks.body;
      }
      const tokenName = "--" + slot;
      setToken(tokenName, stack);
      const state = readSaved(); state[tokenName] = stack; writeSaved(state);
    }
  });

  // Actions
  panel.addEventListener("click", (e) => {
    const action = e.target.dataset?.action;
    if (action === "reset") {
      const saved = readSaved();
      Object.keys(saved).forEach(k => document.documentElement.style.removeProperty(k));
      localStorage.removeItem(STORAGE_KEY);
      panel.querySelectorAll("input[data-token]").forEach(inp => {
        const tok = inp.dataset.token;
        const def = getTokenColor(tok);
        inp.value = def;
        const hex = panel.querySelector(`.hex[data-hex-for="${tok}"]`);
        if (hex) hex.value = def;
      });
      // Reset selects to first option
      if (fonts) {
        panel.querySelectorAll("select[data-font]").forEach(sel => {
          const slot = sel.dataset.font;
          if (fonts[slot]) sel.value = fonts[slot][0];
        });
      }
    } else if (action === "copy") {
      const state = readSaved();
      const css = Object.entries(state).map(([k, v]) => `  ${k}: ${v};`).join("\n");
      const out = `:root {\n${css || "  /* sin cambios */"}\n}`;
      navigator.clipboard?.writeText(out).then(() => {
        e.target.textContent = "✓ Copiado";
        setTimeout(() => (e.target.textContent = "Copiar CSS"), 1500);
      });
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
