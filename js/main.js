//Swiper Slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

//Navigation bar effects on scroll bar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Responsive Navigation menu Toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.addEventListener("click", () => {
  navigation.classList.remove("active");
});

let more = document.querySelectorAll(".more");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}

document.cookie = "SameSite=None";
("Secure");

//pop action
const popup = document.querySelector(".popup");
const close1 = document.querySelector(".close1");
const closelink = document.querySelector(".closelink");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
  }, 2000);
};
close1.addEventListener("click", () => {
  popup.style.display = "none";
});

closelink.addEventListener("click", () => {
  popup.style.display = "none";
});
