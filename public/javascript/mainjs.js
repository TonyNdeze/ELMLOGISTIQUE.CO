
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
    document.addEventListener('DOMContentLoaded', () => {
      // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', shrinkStick);
  function shrinkStick() {
    var topLogo = document.getElementById("TopBarLogo");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      topLogo.style.width = "5em";
    }else{
      topLogo.style.width = "10em";
    }
  }
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {shrinkStick()};



// Navigation Menu Hide and Show
  let menuToggleBTN = document.getElementById("NavigationToggleBTN");
  let navMenu = document.getElementById('LowerBar');

  menuToggleBTN.addEventListener('click', () =>{
    menuToggleBTN.classList.toggle('changeNavMenuToggle');
    navMenu.classList.toggle("changeMenuShow"); 
  }); 
  document.onclick = function(e){
    if(e.target !== menuToggleBTN && e.target !== navMenu && e.target.id !== 'ServicesSubList' && e.target.id !== 'ContactsSubList'){
    menuToggleBTN.classList.remove('changeNavMenuToggle');
    navMenu.classList.remove("changeMenuShow"); 
    }
  }
  });



  function toggleNavSubMenu(x){
    let children = x.children;
    let toggleMenuIcon = children[1];
    let subMenu = children[2];
    subMenu.classList.toggle("changeSubmenuShow");
    
    if(toggleMenuIcon.classList == "ToggleSubMenu fa fas fa-caret-down"){
      toggleMenuIcon.classList.remove("fa-caret-down");
      toggleMenuIcon.classList.add("fa-caret-up");
    }else{
      toggleMenuIcon.classList.remove("fa-caret-up");
      toggleMenuIcon.classList.add("fa-caret-down");
  } 
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