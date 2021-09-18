const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".nav");
const span = document.querySelector("span");
const body = document.querySelector("body");
const item = document.querySelector(".nav__list");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  span.classList.toggle("active");
  body.classList.toggle("lock");
});
item.addEventListener("click", function (e) {
  burger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("lock");
});
