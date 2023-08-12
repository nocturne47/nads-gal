var i = 0;
var images = [];
var slideTime = 3000;

images[0] = "url('img/bg.png')";
images[1] = "url('img/bg2.jpeg')";
images[2] = "url('img/logo.png')";

function changePicture() {
  document.getElementById("bg").style.backgroundImage = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changePicture()", slideTime);
  // document.getElementById("bg").onclick.clear;
}

window.onload = changePicture;

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

let bg = [];
bg[0] = "url('img/bg.png')";
bg[1] = "url('img/1.jpg')";
bg[2] = "url('img/2.jpg')";
bg[3] = "url('img/3.jpg')";
bg[4] = "url('img/bg3.jpg')";
bg[5] = "url('img/bg2.jpeg')";

let kcls = document.getElementsByClassName("kecil");
for (let j = 0; j < kcls.length; j++) {
  kcls[j].style.backgroundImage = bg[j];
}

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector(".burger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector(".burger");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
