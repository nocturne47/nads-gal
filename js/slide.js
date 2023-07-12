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
