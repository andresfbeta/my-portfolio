document.addEventListener("DOMContentLoaded", () => {
  setupScrollProgress();
  setupReveals();
  document.querySelectorAll("[data-case-tabs]").forEach(setupTabs);
});

// Feeds the left ruler's --case-progress (0–1). Reads are batched into a
// rAF so a scroll burst only measures layout once per frame.
function setupScrollProgress() {
  const ruler = document.querySelector(".case-ruler");
  if (!ruler) return;

  let queued = false;
  const update = () => {
    queued = false;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    ruler.style.setProperty("--case-progress", progress.toFixed(4));
  };

  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
}

function setupReveals() {
  const sections = document.querySelectorAll(".case-reveal");
  if (!sections.length) return;

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// APG tabs pattern: one tab in the tab order at a time, arrows move
// between them, Home/End jump to the ends.
function setupTabs(root) {
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  const select = (index, { focus = false } = {}) => {
    tabs.forEach((tab, i) => {
      const isSelected = i === index;
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      if (panel) panel.hidden = !isSelected;
    });
    if (focus) tabs[index].focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index));
    tab.addEventListener("keydown", (event) => {
      const moves = {
        ArrowRight: index + 1,
        ArrowLeft: index - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      const next = moves[event.key];
      if (next === undefined) return;
      event.preventDefault();
      select((next + tabs.length) % tabs.length, { focus: true });
    });
  });

  const initial = tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true");
  select(initial === -1 ? 0 : initial);
}
