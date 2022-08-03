var imageArray = [];
imageArray[0] = "images/1.jpg";
imageArray[1] = "images/2.jpg";
imageArray[2] = "images/3.jpg";
imageArray[3] = "images/4.jpg";
imageArray[4] = "images/5.jpg";
imageArray[5] = "images/6.jpg";
counter = 0;
let x;

function flipImg() {
     counter++;
     if (counter > 5) {
          counter = 0
     }
     document.querySelector('#img').src = imageArray[counter];
}

function nextImg() {
     x = setInterval(flipImg, 1000)
}

function stopSlider() {
     clearInterval(x)
}