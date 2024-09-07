function updateImageSource() {
  const img = document.querySelector(".products img");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    img.src = "assets/images/image-waffle-mobile.jpg";
  } else if (screenWidth > 600 && screenWidth <= 1200) {
    img.src = "assets/images/image-waffle-tablet.jpg";
  } else {
    img.src = "assets/images/image-waffle-desktop.jpg";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateImageSource();
  window.addEventListener("resize", updateImageSource);
});
