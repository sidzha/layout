// Options for Flickity tools
var elem = document.querySelector('.works__carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.works__carousel', {
  // options
});

// symbols animation code
$(function() {
  $('.about__symbols').addClass('elements--active');
});


//Код анимации кнопки меню и самой менюшки

var buttonElement = document.querySelector('.header__button');
var navElement = document.querySelector('.header__nav');

buttonElement.addEventListener('click', function(){
  buttonElement.classList.toggle('open');
  navElement.classList.toggle('header__nav--active');
});