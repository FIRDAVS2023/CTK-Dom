const sliderWrapper = document.querySelector(".slider__wrapper");
const slides = document.querySelectorAll(".slider__slide");
const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");
const indicators = document.querySelectorAll(".slider__indicator");

let currentSlide = 0;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      "slider__indicator--active",
      index === currentSlide
    );
  });
}

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    currentSlide = parseInt(e.target.dataset.slide, 10);
    updateSlider();
  });
});
