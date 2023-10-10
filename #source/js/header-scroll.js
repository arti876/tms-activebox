// header-scroll----------------------------------------------------------------

let scrollHeader = document.querySelector('header');
let scrollHeaderWrapper = document.querySelector('.header__wrapper');

window.onscroll = function () {
  if (window.scrollY > 1) {
    scrollHeader.classList.add('scrolled');
    scrollHeaderWrapper.classList.add('scrolled-border');
  } else {
    scrollHeader.classList.remove('scrolled');
    scrollHeaderWrapper.classList.remove('scrolled-border');
  }
};