//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'slide',
  mousewheel: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
  },

});