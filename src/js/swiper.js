new Swiper('.swiper', {
  // кількість слайдів на сторінці
  slidesPerView: 1,
  // відступ між слайдами
  spaceBetween: 18,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Брейк-поінти
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
