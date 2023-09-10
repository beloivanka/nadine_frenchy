// Menu Burger

let menuBtn = document.querySelector(".menuBtn");
let menu = document.querySelector(".menu");
let humburger = document.querySelector(".humburger");
let closeBtn = document.querySelector(".closeBtn");


function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      closeBtn.style.display = "none";
      menuBtn.style.display = "block";
    } else {
      menu.classList.add("active");
      closeBtn.style.display = "block";
      menuBtn.style.display = "none";
    }
  }

humburger.addEventListener("click", toggleMenu);

// Avis Slider






