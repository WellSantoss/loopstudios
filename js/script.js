const button = document.querySelector('[data-menu="button"]');
const ul = button.nextElementSibling;
const img = button.querySelector('img');

button.addEventListener('click', () => {
  ul.classList.toggle('active');
  if (ul.classList.contains('active')) {
    img.setAttribute('src', './images/icon-close.svg');
  } else {
    img.setAttribute('src', './images/icon-hamburger.svg');
  }
})