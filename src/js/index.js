import '../scss/index/index.scss';
import '../scss/app/app.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    840: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChangeTransitionEnd: function () {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => slide.classList.add('lowered'));
      const activeSlide = document.querySelector('.swiper-slide-active');
      activeSlide.classList.remove('lowered');
    },
  },
});

// Initial lowering of side slides
window.addEventListener('load', () => {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => slide.classList.add('lowered'));
  const activeSlide = document.querySelector('.swiper-slide-active');
  activeSlide.classList.remove('lowered');
});

const swiperTitle = new Swiper('.title__slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
