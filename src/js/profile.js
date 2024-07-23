import '../scss/app/app.scss';
import '../scss/profile/profile.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css';

const swiperTitle = new Swiper('.cards__swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: 2,
  spaceBetween: 70,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
