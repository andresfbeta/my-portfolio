(() => {
  const SELECTOR = [
    ".wu-compare-shot img",
    ".wu-split-card img",
    ".wu-result-collage img",
  ].join(", ");

  const LABELS = {
    en: {
      lightbox: "Expanded image",
      close: "Close",
      expandImage: "Expand image",
      expandPrefix: "Expand",
    },
    es: {
      lightbox: "Imagen ampliada",
      close: "Cerrar",
      expandImage: "Ampliar imagen",
      expandPrefix: "Ampliar",
    },
  };

  const currentLabels = () => {
    const lang = document.documentElement.getAttribute("data-lang") || "en";
    return LABELS[lang] || LABELS.en;
  };

  const overlay = document.createElement("div");
  overlay.className = "wu-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.hidden = true;

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "wu-lightbox__close";
  closeBtn.innerHTML = "&times;";
  overlay.appendChild(closeBtn);

  const img = document.createElement("img");
  img.className = "wu-lightbox__img";
  img.alt = "";
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  let lastFocus = null;
  let inertRoots = [];

  const syncLabels = () => {
    const L = currentLabels();
    overlay.setAttribute("aria-label", L.lightbox);
    closeBtn.setAttribute("aria-label", L.close);
  };

  const setBackgroundInert = (inert) => {
    if (inert) {
      inertRoots = [
        document.querySelector("header"),
        document.getElementById("main"),
        document.querySelector("footer"),
      ].filter(Boolean);
      inertRoots.forEach((el) => {
        el.setAttribute("aria-hidden", "true");
        el.inert = true;
      });
    } else {
      inertRoots.forEach((el) => {
        el.removeAttribute("aria-hidden");
        el.inert = false;
      });
      inertRoots = [];
    }
  };

  const open = (source) => {
    syncLabels();
    lastFocus = document.activeElement;
    img.src = source.currentSrc || source.src;
    img.alt = source.alt || "";
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add("is-open");
    document.body.classList.add("wu-lightbox-open");
    setBackgroundInert(true);
    closeBtn.focus({ preventScroll: true });
  };

  const close = () => {
    if (!overlay.classList.contains("is-open")) return;
    overlay.classList.remove("is-open");
    document.body.classList.remove("wu-lightbox-open");
    setBackgroundInert(false);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      overlay.hidden = true;
      img.removeAttribute("src");
      img.alt = "";
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus({ preventScroll: true });
      }
      lastFocus = null;
    };

    overlay.addEventListener("transitionend", finish, { once: true });
    window.setTimeout(finish, 250);
  };

  overlay.tabIndex = -1;

  const labelExpand = (el) => {
    const L = currentLabels();
    return el.alt ? `${L.expandPrefix}: ${el.alt}` : L.expandImage;
  };

  const targets = document.querySelectorAll(SELECTOR);
  targets.forEach((el) => {
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", labelExpand(el));

    el.addEventListener("click", (event) => {
      event.preventDefault();
      open(el);
    });

    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(el);
      }
    });
  });

  const refreshTargetLabels = () => {
    syncLabels();
    targets.forEach((el) => el.setAttribute("aria-label", labelExpand(el)));
  };

  document.addEventListener("i18n:change", refreshTargetLabels);

  // i18n applies on DOMContentLoaded; sync once after that so ES labels land.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.setTimeout(refreshTargetLabels, 0);
    });
  } else {
    window.setTimeout(refreshTargetLabels, 0);
  }

  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    close();
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      closeBtn.focus({ preventScroll: true });
    }
  });

  syncLabels();

  const reveals = document.querySelectorAll("[data-wu-reveal]");
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("is-inview"));
  } else if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.18 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-inview"));
  }
})();
