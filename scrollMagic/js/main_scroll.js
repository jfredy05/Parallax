$(function(){
	var scrollMagicController = new ScrollMagic();
	//var scrollMagicController = new ScrollMagic({container: '#my-container'});

	// Crear animación por 0.5s
	var tween = TweenMax.to('#animation', 0.5, {backgroundColor: 'rgb(255, 39, 46)', scale: 7, rotation: 360 });

	// yoyo
	var tween2 = TweenMax.fromTo('#animation', 0.5,
	    {
	        backgroundColor: 'rgb(255, 39, 46)',
	        scale: 5,
	        left: -400
	    },
	    {
	        scale: 1,
	        left: 400,
	        rotation: 360,
	        repeat: -1, /* infinita cantidad de repeticiones */
	        yoyo: true /* hacia atras y adelante */
	    }
	);

	//
	var tween3 = TweenMax.staggerFromTo('.animation', 0.5,
	    {
	        scale: 1,
	    },
	    {
	        backgroundColor: 'rgb(255, 39, 46)',
	        scale: 5,
	        rotation: 360
	    },
	    0.4 /* Stagger duration */
	);

	// Crear la escena y ejecutar cuando sea visible con ScrollMagic
	var scene = new ScrollScene({
	    triggerElement: '#scene',
	    offset: 100, /* desplazar la escena 100px  */
	    duration: 300 /* cuantos píxeles para desplazarse  */
	})
	.setTween(tween3)
	.addTo(scrollMagicController);

})
//detectar que es un movil
/*if (!is_touch_device()) {
    // Start ScrollMagic code
}
function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers
      || 'onmsgesturechange' in window; // works on ie10
};*/