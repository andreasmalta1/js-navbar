const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', changeClass)

function changeClass(){
  links.classList.toggle('show-links')
}