let slideIndex = 1;

function openLightbox() { 
  document.getElementById('bodyid').style.color = 'white';
  document.getElementById('close-pointer').style.position = 'fixed';
  document.getElementById('close-pointer').style.height = '5rem';
  document.getElementById('close-pointer').style.align = 'center';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox').style.display = 'flex';
  document.getElementsByTagName("Footer")[0].style.display = "none";
var dots = window.matchMedia( "(min-width: 350px)" );
if (dots.matches) {
  document.getElementById('dots').style.display = 'grid';
}
else {
  document.getElementById('dots').style.display = 'none';
}
};
function closeLightbox() {
  
  document.getElementById('bodyid').style.color = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox').style.display = 'none'; 
  document.getElementsByTagName("Footer")[0].style.display = "flex";
};
function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');
  const dot = document.getElementsByClassName('dots');
  let dots = document.getElementsByClassName('dot');


  
  
  if (n > 1) {
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n > slides.length-1) {
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
 
  if (n > slides.length) {
    slideIndex = 1;	
  document.getElementById('again').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  document.getElementById('again').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
  };
  

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.background = "white";
    dots[i].style.opacity = "1";
    dots[i].style.display = 'grid';
  };
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    dot[i].className = dot[i].className.replace(' active', '');
  };
  const dotzz = document.getElementsByClassName('dots');
  let y = dotzz.length;
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].style.background = "green";
  dots[slideIndex - 1].style.opacity = ".7";
  };
  overlayShown = false,
  overlayScrollListener = null,
  overlaySavedScrollTop = 0,
  overlaySavedScrollLeft = 0;

function showOverlay() {
  overlayShown = true;

  // Show overlay
  overlay.addClass("overlay-shown");

  // Save scroll position
  overlaySavedScrollTop = body.scrollTop();
  overlaySavedScrollLeft = body.scrollLeft();

  // Listen for scroll event
  overlayScrollListener = body.scroll(function() {
    // Scroll back to saved position
    body.scrollTop(overlaySavedScrollTop);
    body.scrollLeft(overlaySavedScrollLeft);
  })
};
var boxid = "Lightbox";
window.onkeydown = function (event){ 
if (event.keyCode == 37) {
    changeSlide(-1);}  
if (event.keyCode == 39) {
    changeSlide(1);}
};
