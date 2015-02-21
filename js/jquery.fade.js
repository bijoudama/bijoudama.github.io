var fadein_tween = TweenMax.to('#hero > div', .375,{ opacity: 1 });
var fadeout_tween = TweenMax.to('#hero > div', .375,{ opacity: 0 });

controller = new ScrollMagic();

var fadein_scene = new ScrollScene({
  triggerElement: '#hero',
  reverse: true
})
.setTween(fadein_tween)
.addTo(controller);

var fadeout_scene = new ScrollScene({
  triggerElement: '#hero',
  reverse: true
})
.setTween(fadeout_tween)
.addTo(controller);