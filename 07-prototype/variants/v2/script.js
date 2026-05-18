// V2 — letter-by-letter heading + fade-in + cursor trace + auto-revealing floating header

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

// Cursor-tracked trace
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
  trace.style.opacity = "0.08";
  trace.style.maskImage = "none";
  trace.style.webkitMaskImage = "none";
}

// Floating header: appears after scrolling past hero (~50% of first viewport).
// Hides on rapid down-scroll, reappears on up-scroll.
const navFloat = document.getElementById("navFloat");
const REVEAL_AT = 0.5;
let lastY = 0;
let revealed = false;

function onScroll() {
  const y = window.scrollY;
  const threshold = innerHeight * REVEAL_AT;

  if (y > threshold) {
    const goingDown = y > lastY + 4;
    const goingUp   = y < lastY - 4;
    if (goingUp || !revealed) {
      navFloat.classList.add("is-visible");
      revealed = true;
    }
    if (goingDown && y > threshold + 100) {
      navFloat.classList.remove("is-visible");
      revealed = false;
    }
  } else {
    navFloat.classList.remove("is-visible");
    revealed = false;
  }
  lastY = y;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
