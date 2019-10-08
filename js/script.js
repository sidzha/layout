// Theme switcher
const toggleSwitch = document.querySelector('.theme-switcher__label input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


//Flickity shenanigans

var elem = document.querySelector('.about-works__carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.about-works__carousel', {
  // options
});



//Mooving_ojects
$(function() {
  $('.about-me__symbols').addClass('elements--active');
});



//Sidenav
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySideMenu").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySideMenu").style.width = "0";
}