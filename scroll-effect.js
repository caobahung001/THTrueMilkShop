// ===============================
// SCROLL REVEAL EFFECT
// ===============================

const revealElements = document.querySelectorAll(
  ".services, .gallery, .story, .nutrition, .products-section, .promotion, .contact",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => {
  el.classList.add("hidden");

  observer.observe(el);
});
