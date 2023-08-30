//Setting the current year
const year = document.querySelector(".legal__year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// toggle the menu

// const user = document.querySelector(".user-nav__user");
// const menu = document.querySelector(".user-nav__menu");
// user.addEventListener("click", function () {
//   menu.classList.toggle("hidden");
// });

// //toggle messages

// const messages = document.querySelector(".user-nav");
// const parentElement = messages.parentElement;
// console.log(parentElement[1]);
// const inbox = document.querySelector(".user-nav__user-inbox");

// messages.addEventListener("click", function () {
//   inbox.classList.toggle("hidden");
// });
