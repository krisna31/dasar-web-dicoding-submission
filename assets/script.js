

window.addEventListener('scroll', function(event) {
  // elementInViewport(document.getElementById('about')) ? document.getElementById('menuabout').classList.add('active') : document.sgetElementById('menuabout').classList.remove('active');
  let scroll = event.currentTarget.scrollY;
  let width = window.innerWidth;

  if (width < 576) {
    toggleBasedOnScroll(400, 537, scroll);
  } else if (width < 768) {
    toggleBasedOnScroll(420, 840, scroll);
  } else if (width < 992) {
    console.log(scroll);
    toggleBasedOnScroll(450, 940, scroll);
  } else {
    toggleBasedOnScroll(900, 1400, scroll);
  }
});

function toggleBasedOnScroll(quotesStart, quotesEnd, scroll) {
  if (scroll >= quotesStart && scroll < quotesEnd) {
    toggleActiveLink(3);
  } else if (scroll >= quotesEnd) {
    toggleActiveLink(5);
  } else {
    toggleActiveLink(1);
  }
}

function toggleActiveLink(index) {
  document.getElementById('menu').childNodes[1].classList.remove('active');
  document.getElementById('menu').childNodes[3].classList.remove('active');
  document.getElementById('menu').childNodes[5].classList.remove('active');
  document.getElementById('menu').childNodes[index].classList.add('active');
}