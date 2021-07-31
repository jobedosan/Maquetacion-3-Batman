$(document).ready(function() {
	
	$('body').addClass('js')
	
	var $menu = $('#menu'),
    	$menulink = $('.menu-link'),
    	$links = $('#menu').find('a')
  
	$menulink.click(function() {
  		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
  		return false
	});

	/* Jon acá explica que el botón de menú tiene un comportamiento indeseado, al hacer click sobre uno de los enlaces internos (marcadores), la página si se redirige a donde se quiere pero el menú permanece abierto,
	por lo que escribe el siguiente  código para solucionar este comportamiento, es idéntico al código que trajo el menú en sí, pero le quitó el return:false porque anula dicha acción de ir al enlace al que se quiere 
	ir. Jon Explica que el return false en el código original evita que se vaya al menú del comienzo de la página, en nuestro caso no aplica porque el menú tiene un posicionamiento fijo, pero esa es la explicación
	del return false, el return false evita que se vaya a donde se encuentra ese menú (si se encuentra al comienzo, la página no solo abriría el menú, sino que también nos llevaría al principio de la página) y solo 
	se abre y cierra. */
	$links.click(function() { 
		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
	});

	$('.rslides').responsiveSlides()

});

var mq48 = window.matchMedia('(min-width:48em)')

function mediaQueries(mq48)
{
	//https://www.youtube.com/watch?v=-LqZt5Z-Tcg

	if(mq48.matches)
	{
		//mostrar iframe de video de youtube
		document.getElementById('logos-video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LqZt5Z-Tcg" frameborder="0" allowfullscreen></iframe>'
	}
	else
	{
		//mostrar link a video de youtube
		document.getElementById('logos-video').innerHTML = '<a href="https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank">Ver video</a>'
	}
}

mediaQueries(mq48)
mq48.addListener(mediaQueries)