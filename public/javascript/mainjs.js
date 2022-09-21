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

// Reveal content block
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


// Counter Section 

 const counts = document.querySelectorAll(".CountNumber");
 const speed = 97;

counts.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if(count < target){
      counter.innerText = count +inc;
      setTimeout(updateCount, 1);
    }else{
      count.innerText = target;
    }
  }
updateCount();


// function upData(){
//   const target = Number(counter.getAttribute('data-target'));
//   const count = Number(counter.innerText);
//   const inc = target /speed;
//   if(count < target){
//     counter.innerText = Math.floor(inc + count);
//      setTimeout(upData, 1);
      
//       }
//       else{
//         counter.innerText = target;
//       }
// }
});



