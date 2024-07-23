import '../scss/app/app.scss';
import '../scss/profile/profile.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiperTitlesd = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 1,
  breakpoints: {
    820: {
      slidesPerView: 2,
    },
  },
  // slidesPerView: 1,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
