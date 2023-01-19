function initCarousel() {
  let carouselInner = document.querySelector(".carousel__inner");
  let slideWidth = document.querySelector(".carousel__inner").offsetWidth;
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let counter = 0;

  carouselArrowDisplay = () => {
    if (counter > 2) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }

    if (counter > 0) {
      arrowLeft.style.display = '';
    } else {
      arrowLeft.style.display = 'none';
    }
  };

  carouselArrowDisplay();

  arrowRight.addEventListener("click", () => {
    counter++;
    carouselInner.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    carouselArrowDisplay();
  });

  arrowLeft.addEventListener("click", () => {
    counter--;
    carouselInner.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    carouselArrowDisplay();
  });
}

