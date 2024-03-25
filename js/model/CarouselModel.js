export default function createCarouselModel(carouselElement) {
  const carouselInner = carouselElement.querySelector('.carousel-inner');
  const carouselItems = carouselElement.querySelectorAll('.carousel-item');
  const cardWidth = carouselItems[0].offsetWidth;
  let scrollPosition = 0;

  function next() {
    if (scrollPosition < carouselInner.scrollWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }

  function prev() {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }

  return {
    next: next,
    prev: prev
  };
}
