import createCarouselModel from '../model/CarouselModel.js';

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.getElementById("carouselControls");

  const carouselModel = createCarouselModel(carouselElement);

  const nextButton = document.querySelector("#carouselControls .carousel-control-next");
  const prevButton = document.querySelector("#carouselControls .carousel-control-prev");

  nextButton.addEventListener("click", () => {
    carouselModel.next();
  });

  prevButton.addEventListener("click", () => {
    carouselModel.prev();
  });

});
