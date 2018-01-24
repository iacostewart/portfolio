/* General jQuery & JS stuff goes here. */

jQuery(document).ready(function ($) {


  console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

  // Initialize wowjs 
  var wow = new WOW();
  console.log(wow)
  new WOW().init();

console.log(wow.init)
  /*-------------------
  MAGNIFICO STARTER - 
  Code from a starter example by the creator. 
  https://codepen.io/dimsemenov/pen/hutrb
  -------------------*/
//   $('.with-caption').magnificPopup({
//       type: 'image',
//       closeBtnInside: false,
//       mainClass: 'mfp-with-zoom mfp-img-mobile',

//       image: {
//           verticalFit: true,
//           titleSrc: function (item) {
//               //More could be done here......
//               //Also doesn't fit so good on iPad.
//               var caption = item.el.attr('title');
//               return caption;
//           }
//       },

//       //This will let us click through images eventually....
//       gallery: {
//           enabled: true
//       },
//   });
});
// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
// bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


/*<script src=“https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js“></script>*/
/*<link rel=“stylesheet” href=“https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css“*/