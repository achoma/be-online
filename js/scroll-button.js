const scrollToTopButton = document.getElementById("scrollToTop");

// Pokazuje przycisk po przewinięciu 100px
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Przewija stronę na samą górę po kliknięciu
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
