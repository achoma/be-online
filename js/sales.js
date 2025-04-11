// Pokaż sticky CTA po 12 sekundach
setTimeout(() => {
  document.querySelector(".sticky-cta").style.display = "block";
}, 8000); // 12000 milisekund = 12 sekund

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
}, 7000); // 10000 milisekund = 10 sekund

// Funkcja zamykająca popup
function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}
