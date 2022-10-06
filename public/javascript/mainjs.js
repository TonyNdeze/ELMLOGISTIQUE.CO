    // When the event DOMContentLoaded occurs, it is safe to access the DOM
    document.addEventListener('DOMContentLoaded', function() {
      // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', shrinkStick);
  
  // Get the offset position of the navbar
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function shrinkStick() {
    var topBar = document.getElementById("TopBar");
    var topLogo = document.getElementById("TopBarLogo");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      topLogo.style.width = "5em";
      
    }else{
      topLogo.style.width = "8em";
    }
  }
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {shrinkStick()};
  });



function toggleNavMenu(x){
  var LowerBar = document.getElementById("LowerBar");
  x.classList.toggle("changeNavMenuToggle");
  LowerBar.classList.toggle("changeMenuShow")
}

function toggleNavServiceSubMenu(x, ServiceSubMenu, ToggleSubMenu){
  ServiceSubMenu = document.getElementById("ServiceSubMenu");
  ToggleSubMenu = document.getElementById("ServicesToggleMenu");
  ServiceSubMenu.classList.toggle("changeSubmenuShow");

  if(ToggleSubMenu.classList == "ToggleSubMenu fa fas fa-caret-down"){
    ToggleSubMenu.classList.remove("fa-caret-down");
    ToggleSubMenu.classList.add("fa-caret-up");
  }else{
    ToggleSubMenu.classList.remove("fa-caret-up");
    ToggleSubMenu.classList.add("fa-caret-down");
  } endif;
  
}

function toggleNavContactSubMenu(x, ContactSubMenu, ToggleSubMenu){
  ContactSubMenu = document.getElementById("ContactSubMenu");
  ToggleSubMenu = document.getElementById("ContactToggleMenu");
  ContactSubMenu.classList.toggle("changeSubmenuShow");
  if(ToggleSubMenu.classList == "ToggleSubMenu fa fas fa-caret-down"){
    ToggleSubMenu.classList.remove("fa-caret-down");
    ToggleSubMenu.classList.add("fa-caret-up");
  }else{
    ToggleSubMenu.classList.remove("fa-caret-up");
  ToggleSubMenu.classList.add("fa-caret-down");
  } endif;
  
}



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