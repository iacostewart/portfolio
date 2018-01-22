/* General jQuery & JS stuff goes here. */

console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

 // Initialize wowjs 
 new WOW().init();


 