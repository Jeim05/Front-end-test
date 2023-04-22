const toggleButton = document.getElementById('nav_menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
});

const menuLinks = document.querySelectorAll('.navbar-nav--menu a[href^=\"#\"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    navWrapper.classList.remove('show');
    toggleButton.classList.toggle('close')
  })
})

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0.1) {
    nav.classList.add('black-background');
    nav.classList.remove('transparent');
  } else {
    nav.classList.remove('black-background');
    nav.classList.add('transparent');
  }
});