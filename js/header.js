let lastScrollPosition = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});
