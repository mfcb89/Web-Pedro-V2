// V1 — letter-by-letter heading + fade-in + cursor-tracked grid trace
const CHAR_DELAY = 30;
const HEAD_INITIAL_DELAY = 200;

function setupAnimatedHeading(el) {
  const text = (el.dataset.text || el.textContent || "").replace(/\\n/g, "\n");
  const lines = text.split("\n");
  el.textContent = "";
  let cumulative = 0;
  const LINE_GAP = 4; // extra char-equivalents between lines
  lines.forEach((line) => {
    const lineEl = document.createElement("span");
    lineEl.className = "ah-line";
    [...line].forEach((ch) => {
      const span = document.createElement("span");
      span.className = "ah-char";
      span.textContent = ch === " " ? " " : ch;
      const delay = HEAD_INITIAL_DELAY + (cumulative * CHAR_DELAY);
      span.style.transitionDelay = delay + "ms";
      lineEl.appendChild(span);
      cumulative++;
    });
    el.appendChild(lineEl);
    cumulative += LINE_GAP;
  });
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-active")));
}

function setupFadeIn(el) {
  const delay    = parseInt(el.dataset.delay    || "0",    10);
  const duration = parseInt(el.dataset.duration || "1000", 10);
  el.style.setProperty("--fi-dur", duration + "ms");
  setTimeout(() => el.classList.add("is-active"), delay);
}

document.querySelectorAll(".animated-heading").forEach(setupAnimatedHeading);
document.querySelectorAll(".fade-in").forEach(setupFadeIn);
document.querySelectorAll("video[autoplay]").forEach(v => v.play().catch(() => {}));

// Pause GPU-bound animations when tab is hidden (perf, battery on mobile)
function applyVisibility() {
  const hidden = document.hidden;
  document.documentElement.classList.toggle("is-tab-hidden", hidden);
  document.querySelectorAll("video[autoplay]").forEach(v => {
    if (hidden) v.pause(); else v.play().catch(() => {});
  });
}
document.addEventListener("visibilitychange", applyVisibility);
applyVisibility();

// Hero phase swap — 4 fases scroll-driven
const heroWrap   = document.querySelector(".hero-wrap");
const heroPhases = Array.from(document.querySelectorAll(".hero__phase"));
const heroVideos = Array.from(document.querySelectorAll(".hero__video"));
const heroDots   = Array.from(document.querySelectorAll(".hero__progress-dot"));
const PHASE_STARTS = [0, 0.25, 0.50, 0.75];

function updateHeroPhase() {
  if (!heroWrap) return;
  const r = heroWrap.getBoundingClientRect();
  const total = heroWrap.offsetHeight - window.innerHeight;
  if (total <= 0) return;
  const p = Math.min(Math.max(-r.top / total, 0), 1);

  let idx = 0;
  for (let i = 0; i < PHASE_STARTS.length; i++) {
    if (p >= PHASE_STARTS[i]) idx = i;
  }

  heroPhases.forEach((el, i) => {
    el.classList.toggle("is-active", i === idx);
    el.setAttribute("aria-hidden", i === idx ? "false" : "true");
  });
  heroVideos.forEach((v, i) => v.classList.toggle("is-active", i === idx));
  heroDots.forEach((d, i) => d.classList.toggle("is-active", i === idx));

  document.body.classList.toggle("hero-ops", idx === 3);
  document.body.classList.toggle("past-hero", p >= 1);
}
let phaseTicking = false;
function onPhaseScroll() {
  if (phaseTicking) return;
  phaseTicking = true;
  requestAnimationFrame(() => { updateHeroPhase(); phaseTicking = false; });
}
window.addEventListener("scroll", onPhaseScroll, { passive: true });
window.addEventListener("resize", onPhaseScroll);
updateHeroPhase();

// Form: counter de textarea + validación inline + success visible
const form = document.querySelector(".contacto__form");
if (form) {
  const counterEl = form.querySelector(".contacto__counter");
  const ta = form.querySelector('textarea[name="caso"]');
  const updateCounter = () => {
    if (counterEl && ta) counterEl.textContent = `${ta.value.length} / ${ta.maxLength || 800}`;
  };
  ta && ta.addEventListener("input", updateCounter);
  updateCounter();

  const validators = {
    nombre: (v) => v.trim().length >= 2 ? "" : "Indique cómo le llamamos.",
    email:  (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Email no parece válido (formato usted@dominio.com).",
    caso:   (v) => v.trim().length >= 20 ? "" : "Cuéntenos al menos un par de frases (mínimo 20 caracteres).",
  };

  const showError = (name, msg) => {
    const input = form.elements[name];
    if (!input) return;
    const label = input.closest("label");
    const errBox = label && label.querySelector(".contacto__err");
    if (msg) {
      label && label.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      if (errBox) errBox.textContent = msg;
    } else {
      label && label.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      if (errBox) errBox.textContent = "";
    }
  };

  // Validar al perder foco
  Object.keys(validators).forEach(name => {
    const input = form.elements[name];
    if (!input) return;
    input.addEventListener("blur", () => showError(name, validators[name](input.value)));
    input.addEventListener("input", () => {
      // limpiar error en cuanto el usuario corrige
      const label = input.closest("label");
      if (label && label.classList.contains("is-invalid")) {
        showError(name, validators[name](input.value));
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    Object.keys(validators).forEach(name => {
      const input = form.elements[name];
      const msg = validators[name](input.value);
      showError(name, msg);
      if (msg && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    const success = form.querySelector(".contacto__success");
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.querySelectorAll("input, textarea").forEach(el => { el.disabled = true; });
    form.querySelector("button[type=submit]").disabled = true;
  });
}

// Cursor-tracked background trace (smooth via lerp)
const trace = document.querySelector(".trace");
let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
let cx = tx, cy = ty;
window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
function tick() {
  cx += (tx - cx) * 0.18;
  cy += (ty - cy) * 0.18;
  if (trace) {
    trace.style.setProperty("--mx", cx + "px");
    trace.style.setProperty("--my", cy + "px");
  }
  requestAnimationFrame(tick);
}
tick();

// Hide trace on touch / no fine pointer
if (window.matchMedia("(pointer: coarse)").matches && trace) {
  trace.style.opacity = "0.06";
  trace.style.maskImage = "none";
  trace.style.webkitMaskImage = "none";
}

// Antes / después: slider comparativo
(function () {
  const slider = document.querySelector(".ad__slider");
  if (!slider) return;
  const handle = slider.querySelector(".ad__handle");

  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }

  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct = clamp((clientX - rect.left) / rect.width, 0.04, 0.96);
    slider.style.setProperty("--pos", (pct * 100).toFixed(1) + "%");
    handle.setAttribute("aria-valuenow", Math.round(pct * 100));
  }

  // Mouse
  let dragging = false;
  handle.addEventListener("mousedown", (e) => { dragging = true; e.preventDefault(); });
  window.addEventListener("mouseup",   () => { dragging = false; });
  window.addEventListener("mousemove", (e) => { if (dragging) setPos(e.clientX); });

  // Touch
  handle.addEventListener("touchstart", (e) => { dragging = true; e.preventDefault(); }, { passive: false });
  window.addEventListener("touchend",   () => { dragging = false; });
  window.addEventListener("touchmove",  (e) => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });

  // Tap anywhere on slider to jump
  slider.addEventListener("click", (e) => { if (!dragging) setPos(e.clientX); });

  // Keyboard: arrow keys ±5%
  handle.addEventListener("keydown", (e) => {
    const cur = parseFloat(slider.style.getPropertyValue("--pos")) || 50;
    if (e.key === "ArrowLeft")  { setPos(slider.getBoundingClientRect().left + (cur - 5) / 100 * slider.offsetWidth); e.preventDefault(); }
    if (e.key === "ArrowRight") { setPos(slider.getBoundingClientRect().left + (cur + 5) / 100 * slider.offsetWidth); e.preventDefault(); }
  });
})();
