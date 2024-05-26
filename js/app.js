const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.of');

burger.addEventListener('click', function (e) {
   burgerMenu.classList.toggle('of');
   burgerMenu.classList.toggle('burger-navigation-on');
   burger.classList.toggle('on');
})