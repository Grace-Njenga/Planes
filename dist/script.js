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

// TIMER AND COUNTER 1

const counters = document.querySelectorAll(".counter");

const options = {
   threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         countUp(entry.target);
         observer.unobserve(entry.target);
      }
   });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

function countUp(counterElement) {
   const target = +counterElement.getAttribute("data-target");
   let count = 0;

   const updateCounter = () => {
      const increment = target / 100;
      count += increment;

      if (count < target) {
         counterElement.innerHTML = Math.ceil(count) + "+<br />Years of Experience";
         // setTimeout(updateCounter, 10);
         requestAnimationFrame(updateCounter);
      } else {
         counterElement.innerHTML = target + "+<br />Years of Experience";
      }
   };
   
   updateCounter();
}


// icos
const iconContainer = document.getElementById("iconContainer");
const plusIcon = document.getElementById("plusIcon");

iconContainer.addEventListener("click", () => {
   plusIcon.classList.toggle("animation-active");
   setTimeout(() => {
      plusIcon.classList.toggle("x");
   }, 500); // Adjust the delay based on your animation duration
   setTimeout(() => {
      plusIcon.classList.toggle("check");
   }, 1000); // Adjust the delay based on your animation duration
});
