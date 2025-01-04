document.addEventListener("DOMContentLoaded", () => {
  const workBoxes = document.querySelectorAll(".work-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Przestajemy obserwować po animacji
        }
      });
    },
    { threshold: 0.2 }
  );

  workBoxes.forEach((box) => observer.observe(box));
});
