"use strict";var slideIndex=1,checker=!0;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n)}function currentSlide(n){showSlides(slideIndex=n)}function showSlides(n){var i,slides=document.getElementsByClassName("mySlides"),dots=document.getElementsByClassName("dot");for(n>slides.length&&(slideIndex=1),1>n&&(slideIndex=slides.length),i=0;i<slides.length;i++)slides[i].style.display="none";for(i=0;i<dots.length;i++)dots[i].classList.remove("active");slides[slideIndex-1].style.display="block",dots[slideIndex-1].classList.add("active")}window.addEventListener("wheel",function(e){!0==checker&&(0<e.deltaY?currentSlide(slideIndex+1):0>e.deltaY&&currentSlide(slideIndex-1),checker=!1,setTimeout(function(){checker=!0},1e3))});var startY=0;window.addEventListener("touchstart",function(e){var endY=0;console.log(e.targetTouches[0].pageY),startY=e.targetTouches[0].pageY,window.addEventListener("touchend",function(e){endY=e.changedTouches[0].pageY,!0==checker&&(startY>endY?currentSlide(slideIndex+1):startY<endY&&currentSlide(slideIndex-1),checker=!1,setTimeout(function(){checker=!0},1e3))})});