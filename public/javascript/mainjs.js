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



// Reveal content block
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

//Reval & Hide Sections
  


});
  

  

  



  function revealHideRTService(){
    let RTRvlHideSectionLabel = document.getElementById("RTServiceLabel");
    let RTServiceSectionContent = document.getElementById("RodTransServiveContent");
    let RTServiceHSCmdIcon = document.getElementById("RTServiceHSCmdIcon");
  if(RTRvlHideSectionLabel.textContent == "Afficher les details" ){
    RTRvlHideSectionLabel.textContent = "Masquer les details";
    RTServiceHSCmdIcon.classList.remove('fa-chevron-up');
    RTServiceHSCmdIcon.classList.add('fa-chevron-down');
    RTServiceSectionContent.classList.remove('Hidden');

  }
  else{
    RTRvlHideSectionLabel.textContent = "Afficher les details";
    RTServiceHSCmdIcon.classList.remove('fa-chevron-down');
    RTServiceHSCmdIcon.classList.add('fa-chevron-up');
    RTServiceSectionContent.classList.add('Hidden');
  }
  }
  function revealHideHndService(){
    let HndRvlHideSectionLabel = document.getElementById("HndServiceLabel");
    let HndServiceSectionContent = document.getElementById("HandlingServiceContent");
    let HndServiceHSCmdIcon = document.getElementById("HndServiceHSCmdIcon");

    if(HndRvlHideSectionLabel.textContent == "Afficher les details" ){
      HndRvlHideSectionLabel.textContent = "Masquer les details";
      HndServiceHSCmdIcon.classList.remove('fa-chevron-up');
      HndServiceHSCmdIcon.classList.add('fa-chevron-down');
      HndServiceSectionContent.classList.remove('Hidden');
  
    }
    else{
      HndRvlHideSectionLabel.textContent = "Afficher les details";
      HndServiceHSCmdIcon.classList.remove('fa-chevron-down');
      HndServiceHSCmdIcon.classList.add('fa-chevron-up');
      HndServiceSectionContent.classList.add('Hidden');
    }
  }
  function revealHideWHService(){
    let WHRvlHideSectionLabel = document.getElementById("WHServiceLabel");
    let WHServiceSectionContent = document.getElementById("WarehousingServiveContent");
    let WHServiceHSCmdIcon = document.getElementById("WHServiceHSCmdIcon");
  
    if(WHRvlHideSectionLabel.textContent == "Afficher les details" ){
      WHRvlHideSectionLabel.textContent = "Masquer les details";
      WHServiceHSCmdIcon.classList.remove('fa-chevron-up');
      WHServiceHSCmdIcon.classList.add('fa-chevron-down');
      WHServiceSectionContent.classList.remove('Hidden');
  
    }
    else{
      WHRvlHideSectionLabel.textContent = "Afficher les details";
      WHServiceHSCmdIcon.classList.remove('fa-chevron-down');
      WHServiceHSCmdIcon.classList.add('fa-chevron-up');
      WHServiceSectionContent.classList.add('Hidden');
    }
  }