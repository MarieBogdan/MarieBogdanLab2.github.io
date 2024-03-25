export default function createCarouselView(controller) {
  const nextButton = document.querySelector("#carouselControls .carousel-control-next");
  const prevButton = document.querySelector("#carouselControls .carousel-control-prev");

  function bindButtons() {
    nextButton.addEventListener("click", () => {
      controller.next();
    });

    prevButton.addEventListener("click", () => {
      controller.prev();
    });
  }

  bindButtons();

  return {
    bindButtons: bindButtons
  };
}
