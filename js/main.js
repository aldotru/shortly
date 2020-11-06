const hamburguerMenu = document.querySelector('.nav__hamburguer');
const hamburguerNav = document.querySelector('.hamburguer__menu');

hamburguerMenu.addEventListener('click', function() {

    hamburguerNav.classList.toggle('show');

});