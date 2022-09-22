let isShow = false;

let btnMenu = document.querySelector(".icon-menu");
let shadowContainer = document.querySelector(".shadow-container");
let sideBar = document.querySelector(".side-bar");

btnMenu.onclick = () => {
  sideBar.style.display = "block";
  shadowContainer.style.display = "block";
};

shadowContainer.onclick = () => {
  sideBar.style.display = "none";
  shadowContainer.style.display = "none";
};
