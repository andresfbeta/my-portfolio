document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-scroll-carousel]").forEach((track) => {
    const wrapper = track.closest(".scroll-fade");
    if (!wrapper) return;

    const updateFade = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      wrapper.classList.toggle("is-scrolled", scrollLeft > 4);
      wrapper.classList.toggle("is-scrollable", scrollLeft + clientWidth < scrollWidth - 4);
    };

    updateFade();
    track.addEventListener("scroll", updateFade, { passive: true });
    window.addEventListener("resize", updateFade);
  });
});
