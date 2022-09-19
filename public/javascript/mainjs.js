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