$(function() {

  // Iniciar controlador ScrollMagic
  var scrollMagicController = new ScrollMagic();

  // Crear animación para 0.5s
  var tween = TweenMax.to('#animation', 0.5, {backgroundColor:'rgb(255,39,46)',scale:5,rotation:360});

  // Crear la escena  cuando es visible
  var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 150 /* compensar el inicio de la animacion 150px de la escena */
  })
  .setTween(tween)
  .addTo(scrollMagicController);

  // Adicionar debug indicaciones fixed en la derecha de la escena
  scene.addIndicators();
});