// Hero animations:
//   1. AnimatedHeading — split title by \n into lines, then by character into spans.
//      Stagger entrance: each char (lineIndex * lineLength * charDelay) + (charIndex * charDelay).
//      Initial 200ms delay. Each char 500ms transition.
//   2. FadeIn — elements with .fade-in get opacity 0 → 1 after `data-delay` ms over `data-duration` ms.

const CHAR_DELAY  = 30;      // ms per character
const HEAD_INITIAL_DELAY = 200; // ms before heading starts

/* ---------- AnimatedHeading ---------- */
function setupAnimatedHeading(el) {
  const raw = el.dataset.text || el.textContent || "";
  // Allow real \n in attribute or literal "\n" string from HTML
  const text = raw.replace(/\\n/g, "\n");
  const lines = text.split("\n");

  el.textContent = ""; // clear
  let totalCharCount = 0;
  lines.forEach((line, lineIndex) => {
    const lineEl = document.createElement("span");
    lineEl.className = "ah-line";
    const lineLen = line.length;

    [...line].forEach((ch, charIndex) => {
      const span = document.createElement("span");
      span.className = "ah-char";
      span.textContent = ch === " " ? " " : ch;
      const delay = HEAD_INITIAL_DELAY + (lineIndex * lineLen * CHAR_DELAY) + (charIndex * CHAR_DELAY);
      span.style.transitionDelay = delay + "ms";
      lineEl.appendChild(span);
      totalCharCount++;
    });
    el.appendChild(lineEl);
  });

  // Trigger after one frame so the browser registers the initial styles first
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-active")));
}

/* ---------- FadeIn ---------- */
function setupFadeIn(el) {
  const delay    = parseInt(el.dataset.delay    || "0",    10);
  const duration = parseInt(el.dataset.duration || "1000", 10);
  el.style.setProperty("--fi-dur", duration + "ms");
  setTimeout(() => el.classList.add("is-active"), delay);
}

/* ---------- Boot ---------- */
document.querySelectorAll(".animated-heading").forEach(setupAnimatedHeading);
document.querySelectorAll(".fade-in").forEach(setupFadeIn);

/* ---------- Try to play any video that has autoplay (Safari sometimes gates this) ---------- */
document.querySelectorAll("video[autoplay]").forEach(v => v.play().catch(() => {}));
