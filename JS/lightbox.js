let slideIndex = 1;

function openLightbox() { 
  document.getElementsByTagName("Header")[0].style.display = 'none';
  document.getElementsByTagName("Footer")[0].style.display = 'none';
  document.getElementById('bodyid').style.color = 'white';
  document.getElementById('Lightbox').style.background = 'white';
  document.getElementById('close-pointer').style.position = 'fixed';
  document.getElementById('close-pointer').style.height = '5rem';
  document.getElementById('close-pointer').style.align = 'center';
  document.getElementsByTagName('body')[0].style.overflow ="hidden";
  document.getElementById('Lightbox').style.display = 'flex';
};
function closeLightbox() {
  
  document.getElementsByTagName("Header")[0].style.display = '';
  document.getElementsByTagName("Footer")[0].style.display = '';
  document.getElementById('bodyid').style.color = '';
  document.getElementById('Lightbox').style.background = '';
  document.getElementsByTagName('body')[0].style.overflow ="";
  document.getElementById('Lightbox').style.display = 'none'; 
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
  };
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  slides[slideIndex - 1].style.display = 'flex';
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
