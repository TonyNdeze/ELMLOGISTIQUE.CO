 
 //Counter section
// let CountNumbers = document.querySelectorAll(".CountNumber");
// let interval = 3000;

// CountNumbers.forEach((CountNumbers) =>{
//   let startValue = 0;
//   let endValue = parseInt(CountNumbers.getAttribute
//     ("data-val"));
  
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function(){
//     startValue += 1;
//     CountNumbers.textContent= startValue;
//     if(startValue == endValue){
//       clearInterval(counter);
//     }
//   }, duration);
// });

 
 
 
 
 // When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
    // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myStickyNav);
// Get the navbar
var Navbar = document.getElementById("Navbar");

// Get the offset position of the navbar
var sticky = Navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyNav() {
  if (window.pageYOffset >= sticky) {
    Navbar.classList.add("sticky")
  } else {
    Navbar.classList.remove("sticky");
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myStickyNav()};
});




var counter = setInterval(updatedCount, 100);
var upto=0;
 
function updatedCount() {
  let count = document.querySelectorAll(".CountNumber");
  count.forEach((count) => {
    count.innerHTML= ++upto;
  if(upto === 50) {
    clearInterval(counter);
  }
  });
  
}

