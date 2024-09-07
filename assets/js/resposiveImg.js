function updateImageSource() {
  const screenWidth = window.innerWidth;

  const img1 = document.querySelector(".product-1 img");
  if (screenWidth <= 600) {
    img1.src = "assets/images/image-waffle-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img1.src = "assets/images/image-waffle-tablet.jpg";
  } else {
    img1.src = "assets/images/image-waffle-desktop.jpg";
  }

  const img2 = document.querySelector(".product-2 img");
  if (screenWidth <= 600) {
    img2.src = "./assets/images/image-creme-brulee-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img2.src = "./assets/images/image-creme-brulee-tablet.jpg";
  } else {
    img2.src = "./assets/images/image-creme-brulee-desktop.jpg";
  }

  const img3 = document.querySelector(".product-3 img");
  if (screenWidth <= 600) {
    img3.src = "./assets/images/image-macaron-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img3.src = "./assets/images/image-macaron-tablet.jpg";
  } else {
    img3.src = "./assets/images/image-macaron-desktop.jpg";
  }

  const img4 = document.querySelector(".product-4 img");
  if (screenWidth <= 600) {
    img4.src = "./assets/images/image-tiramisu-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img4.src = "./assets/images/image-tiramisu-tablet.jpg";
  } else {
    img4.src = "./assets/images/image-tiramisu-desktop.jpg";
  }

  const img5 = document.querySelector(".product-5 img");
  if (screenWidth <= 600) {
    img5.src = "./assets/images/image-baklava-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img5.src = "./assets/images/image-baklava-tablet.jpg";
  } else {
    img5.src = "./assets/images/image-baklava-desktop.jpg";
  }

  const img6 = document.querySelector(".product-6 img");
  if (screenWidth <= 600) {
    img6.src = "./assets/images/image-meringue-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img6.src = "./assets/images/image-meringue-tablet.jpg";
  } else {
    img6.src = "./assets/images/image-meringue-desktop.jpg";
  }

  const img7 = document.querySelector(".product-7 img");
  if (screenWidth <= 600) {
    img7.src = "./assets/images/image-cake-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img7.src = "./assets/images/image-cake-tablet.jpg";
  } else {
    img7.src = "./assets/images/image-cake-desktop.jpg";
  }

  const img8 = document.querySelector(".product-8 img");
  if (screenWidth <= 600) {
    img8.src = "./assets/images/image-brownie-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img8.src = "./assets/images/image-brownie-tablet.jpg";
  } else {
    img8.src = "./assets/images/image-brownie-desktop.jpg";
  }

  const img9 = document.querySelector(".product-9 img");
  if (screenWidth <= 600) {
    img9.src = "./assets/images/image-panna-cotta-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1025) {
    img9.src = "./assets/images/image-panna-cotta-tablet.jpg";
  } else {
    img9.src = "./assets/images/image-panna-cotta-desktop.jpg";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateImageSource();
  window.addEventListener("resize", updateImageSource);
});
