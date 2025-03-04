const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".left-arrow");
const nextButton = document.querySelector(".right-arrow");
const dotsNav = document.querySelector(".carousel-dots");

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function moveToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
}

let autoSlide = setInterval(moveToNextSlide, 3000);

nextButton.addEventListener("click", () => {
  clearInterval(autoSlide);
  moveToNextSlide();
  autoSlide = setInterval(moveToNextSlide, 3000);
});

prevButton.addEventListener("click", () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
  autoSlide = setInterval(moveToNextSlide, 3000);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(autoSlide);
    currentIndex = index;
    updateCarousel(currentIndex);
    autoSlide = setInterval(moveToNextSlide, 3000);
  });
});
