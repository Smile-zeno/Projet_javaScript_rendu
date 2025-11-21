/* Dark mode */
const darkModeBtn = document.querySelector(".darkMode");
let root = document.documentElement;
let toggle = 1;


darkModeBtn.addEventListener('click', function () {
    if (toggle === 1){
        root.style.setProperty('--text-color', "white");
        root.style.setProperty('--background-color', "black");
        root.style.setProperty('--background-line-color', "blue");
        root.style.setProperty('--background-card-color', "darkblue");
        root.style.setProperty('--background-description-color', "blue");
        root.style.setProperty('--background-diviser-color', "blue");
        root.style.setProperty('--background-footer-color', "dimgrey");
    } else {
        root.style.setProperty('--text-color', "black");
        root.style.setProperty('--background-color', "goldenrod");
        root.style.setProperty('--background-line-color', "cornflowerblue");
        root.style.setProperty('--background-card-color', "deepskyblue");
        root.style.setProperty('--background-description-color', "lightblue");
        root.style.setProperty('--background-diviser-color', "black");
        root.style.setProperty('--background-footer-color', "grey");
    }
    toggle = -toggle
})

/* Menu Burger */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach( 
  function(menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  }
)