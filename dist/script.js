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
const counterSection = document.getElementById("counter-section");
const options = {
   root: null,
   rootMargin: "0px",
   threshold: 0.5,
};

let observer = new IntersectionObserver(handleIntersection, options);

counters.forEach((counter) => {
   observer.observe(counter);
});

function handleIntersection(entries, observer) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         startCounter(entry.target);
      } else {
         resetCounter(entry.target);
      }
   });
}

function startCounter(counter) {
   const target = +counter.getAttribute("data-target");
   let count = 0;

   function updateCounter() {
      if (count < target) {
         count++;
         counter.innerHTML = `${count} + <br />Years of Experience`;
         setTimeout(() => requestAnimationFrame(updateCounter), 50);
      }
   }

   updateCounter();
}

function resetCounter(counter) {
   counter.innerHTML = "0+<br />Years of Experience";
}

