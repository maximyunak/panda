import '../scss/index/index.scss';
import '../scss/app/app.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const profile = document.getElementById('profile');
const referals = document.getElementById('referals');
const main = document.getElementById('main');

const profilePage = document.querySelector('.profile');
const referalsPage = document.querySelector('.referals');
const mainPage = document.querySelector('.main');

profile.addEventListener('click', () => {
  profilePage.classList.remove('none');
  mainPage.classList.add('none');
  referalsPage.classList.add('none');

  profile.classList.add('active');
  main.classList.remove('active');
  referals.classList.remove('active');
});
referals.addEventListener('click', () => {
  referalsPage.classList.remove('none');
  mainPage.classList.add('none');
  profilePage.classList.add('none');

  referals.classList.add('active');
  main.classList.remove('active');
  profile.classList.remove('active');
});
main.addEventListener('click', () => {
  mainPage.classList.remove('none');
  profilePage.classList.add('none');
  referalsPage.classList.add('none');

  main.classList.add('active');
  profile.classList.remove('active');
  referals.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    450: {
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
