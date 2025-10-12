document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const slideMenu = document.querySelector('.slide-menu');

  if (burger && slideMenu) {
    burger.addEventListener('click', () => {
      // Toggle menu
      slideMenu.classList.toggle('open');

      // Toggle icon between burger and X
      if (slideMenu.classList.contains('open')) {
        burger.innerHTML = '&times;'; // ✖ character
      } else {
        burger.innerHTML = '&#9776;'; // ☰ character
      }
    });
  }
});

