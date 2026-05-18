// V3 — letter-by-letter heading + fade-in + cursor trace + mini menu reveal post-hero
const CHAR_DELAY = 30;
const HEAD_INITIAL_DELAY = 200;

function setupAnimatedHeading(el) {
  const text = (el.dataset.text || el.textContent || "").replace(/\\n/g, "\n");
  const lines = text.split("\n");
  el.textContent = "";
  let cumulative = 0;
  const LINE_GAP = 4;
  lines.forEach((line) => {
    const lineEl = document.createElement("span");
    lineEl.className = "ah-line";
    [...line].forEach((ch) => {
      const span = document.createElement("span");
      span.className = "ah-char";
      span.textContent = ch === " " ? " " : ch;
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

// Cursor trace
const trace = document.querySelector(".trace");
let tx = innerWidth / 2, ty = innerHeight / 2;
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

if (window.matchMedia("(pointer: coarse)").matches && trace) {
  trace.style.opacity = "0.10";
  trace.style.maskImage = "none";
  trace.style.webkitMaskImage = "none";
}

// Mini menu reveal: appears once user scrolls past 80% of hero
const mini = document.getElementById("bnavMini");
mini.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
function onScroll() {
  if (!mini) return;
  if (window.scrollY > innerHeight * 0.8) mini.classList.add("is-visible");
  else mini.classList.remove("is-visible");
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
