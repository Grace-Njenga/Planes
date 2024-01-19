// Check if the screen width is greater than a certain value
const isLargeScreen = window.innerWidth > 768; 
const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: isLargeScreen ? "vertical" : "horizontal",
   slidesPerView: 1,
   spaceBetween: 30,
   effect: "slide",
   mousewheel: isLargeScreen,
   loop: false,
   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
