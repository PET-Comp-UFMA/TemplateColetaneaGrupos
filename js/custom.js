// button burguer
$(document).ready(function(){
	$(".button-collapse").sideNav();
});

// Container
$(document).ready(function(){
  $('.collapsible').collapsible();
})

// SLIDER
$(document).ready(function(){
	$('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});

$('.carousel').carousel({
    padding: 200    
});
setTimeout(autoplay, 7000);
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 7000);
}

//parallax
$(document).ready(function(){
	$('.parallax').parallax();
});

//TABS
$(document).ready(function(){
	$('.tabs').tabs();
});