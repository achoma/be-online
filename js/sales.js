const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".card, .section-title").forEach((el) => {
  observer.observe(el);
});

// Pokaż popup po 10 sekundach
setTimeout(() => {
  document.getElementById("contactPopup").style.display = "block";
}, 10000);
