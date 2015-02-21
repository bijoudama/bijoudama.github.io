// User scroll up/down controls animations
// Each object should fade in/fade out
// Preload page content
// When user hovers over thumbnails, move thumbails 10px w/ shadow


// Jumplink Scroll Down
$(function() {

	  $('a[href*=#]:not([href=#])').click(function() {

	  	// console.log('got here');
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	// console.log('got here 2');

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	      	// console.log('got here 3');
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});



// Scale Up
$(document).ready(function($) {
		// build tween
		console.log('First Stop')
		var tween = TweenMax.to("#animate1", 0.5, {backgroundColor: "#0000", scale: 5});

		// build scene
		var scene = new ScrollScene({triggerElement: "#trigger1"})
						.setTween(tween)
						.addTo(controller);
		console.log('Second Stop')
		// show indicators (requires debug extension)
		scene.addIndicators();
	});

// Fade 
// var fadein_tween = TweenMax.to('#fadein-trigger > div', .375,{ opacity: 1 });
// var fadeout_tween = TweenMax.to('#fadein-trigger > div', .375,{ opacity: 0 });

// controller = new ScrollMagic();

// var fadein_scene = new ScrollScene({
//   triggerElement: '#fadein-trigger',
//   reverse: true
// })
// .setTween(fadein_tween)
// .addTo(controller);

// var fadeout_scene = new ScrollScene({
//   triggerElement: '#fadeout-trigger',
//   reverse: true
// })
// .setTween(fadeout_tween)
// .addTo(controller);

// Jump