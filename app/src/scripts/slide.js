var slideIndex = 1;
var checker = true;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }

  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

window.addEventListener('wheel', (e) => {
  if (checker == true) {
    if (e.deltaY > 0) {
      currentSlide(slideIndex + 1)
    }
    else if (e.deltaY < 0) {
      currentSlide(slideIndex - 1)
    }
    checker = false;
    setTimeout(() => {
      checker = true;
    }, 1000);
  }
  else {
  }

})

let startY = 0;

window.addEventListener('touchstart', (e) => {
  let endY = 0;
  console.log(e.targetTouches[0].pageY);
  startY = e.targetTouches[0].pageY
  window.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].pageY
    if (checker == true) {
      if (startY > endY) {
        currentSlide(slideIndex + 1)
      }
      else if (startY < endY) {
        currentSlide(slideIndex - 1)
      }
      checker = false;
      setTimeout(() => {
        checker = true;
      }, 1000);
    }
  })

})

