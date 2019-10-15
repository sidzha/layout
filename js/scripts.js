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


//mobile menu animation
$(document).ready(function(){
	$('.header__button--hamburger').click(function(){
		$(this).toggleClass('open');
	});
});


function myFunction() {
  let x = document.getElementById("header__nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// var buttonElement = document.querySelector('.header__button');
// buttonElement.addEventListener('click', buttonClick);

// var navElement = document.querySelector('header__nav');
// function buttonClick() {
//   navElement.classList.toogle('header__nav--active');
// }