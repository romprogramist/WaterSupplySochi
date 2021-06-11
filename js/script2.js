const dropdownItems = document.querySelector(".dropdownMenuRelative");
const lis = document.getElementsByClassName("ul__li");
const dropdownMenu = document.querySelector(".dropdownMenu");
const currentOpenedMenu = null;
const arrow = document.querySelector(".dropdownMenuRelative__arrow");
const maus = document.querySelectorAll(".dropdownUl__li");
ul = document.querySelector(".ul");

dropdownItems.addEventListener("click", (e) => {
  const menu = document.querySelector(".dropdownMenu");
  menu.classList.toggle("d-none");
  arrow.classList.toggle("dropdownMenuRelative__arrow_active");
});

function fo() {
  this.classList.add("dropdownUl__li_active");
}
maus.forEach((item) => {
  item.addEventListener("click", fo);
});

function myFunction() {
  if (window.innerWidth <= 701) {
    ul.classList.toggle("d-none");
  }
}
myFunction();

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav"),
    hamburger = document.querySelector(".hamburger");
  const body = document.querySelector("body");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    if (hamburger.className === "hamburger hamburger_active") {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    menu.classList.toggle("nav__active");
    ul.classList.toggle("nav__active__ul");

    ul.classList.toggle("d-none");
    hamburger.classList.toggle("bgColorNone");
  });
});

// const dropButtons = document.querySelectorAll(".dropdownWrapper");
// const dropdowns = document.querySelectorAll(".ulDow");
// const vertically = document.querySelectorAll(".vertically");

// dropButtons.forEach((dp) => {
//   dp.addEventListener("click", function (e) {
//     const number = this.dataset.number;
//     dropdowns.forEach((dd) => {
//       if (dd.dataset.number === number) {
//         dd.classList.toggle("d-block");
//       } else {
//         dd.classList.remove("d-block");
//       }
//     });
//     vertically.forEach((dd) => {
//       if (dd.dataset.number === number) {
//         dd.classList.toggle("d-none");
//       } else {
//         dd.classList.remove("d-none");
//       }
//     });
//   });
// });
