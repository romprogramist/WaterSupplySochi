let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
  showSlides((slideIndex += 1));
}
function previousSlide() {
  showSlides((slideIndex -= 1));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


setTimeout(leafThrough, 0);

function leafThrough() {
  setTimeout(leafThrough, 7000);
  setTimeout(nextSlide, 7000);
}