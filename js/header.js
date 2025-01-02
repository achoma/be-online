let lastScrollPosition = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrollowanie w dół
    header.classList.add("hidden");
  } else {
    // Scrollowanie w górę
    header.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});
