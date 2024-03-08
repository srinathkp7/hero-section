// Selecting Elements
const navMenu = document.querySelector(".menu");
const navClose = document.querySelector(".close");
const mobileNav = document.querySelector(".nav-sm");

// Nav
navMenu.addEventListener("click", function (e) {
  e.preventDefault();

  navClose.classList.toggle("u-display-none");
  navMenu.classList.toggle("u-display-none");
  mobileNav.classList.toggle("nav-box");
});
navClose.addEventListener("click", function (e) {
  e.preventDefault();
  navClose.classList.toggle("u-display-none");
  navMenu.classList.toggle("u-display-none");
  mobileNav.classList.toggle("nav-box");
});
