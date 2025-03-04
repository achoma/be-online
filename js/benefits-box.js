document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".benefits-box0, .benefits-box1, .benefits-box2, .benefits-box3");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  boxes.forEach((box) => observer.observe(box));
});
