let i = 0;  // start point
const images = [];
const time = 4000;  // time between slides

// image list
images[0] = '././assets/images/1.jpg';
images[1] = '././assets/images/3.jpg';
images[2] = '././assets/images/5.jpg';
images[3] = '././assets/images/7.jpg';
images[4] = '././assets/images/9.jpg';
images[5] = '././assets/images/11.jpg';
images[6] = '././assets/images/27.jpg';
images[7] = '././assets/images/29.jpg';
images[8] = '././assets/images/33.jpg';
images[9] = '././assets/images/35.jpg';

// change image
function changeImg() {
  document.slide.src = images[i];

  if(i < images.length -1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;