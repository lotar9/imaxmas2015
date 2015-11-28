$(function(){
	$.scrollify({
		section: '.panel',
		offset: 0
	});
	getLocation();
});

var latitude 	= null;
var longitude	 = null;
function getLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position){
				Latitude = position.coords.latitude;
				Longitude = position.coords.longitude;
			}
		);
	}
}

function showAndPlay() {
	$('div.video-popup').css('display', 'block');
	$('div.video-popup').append('<iframe class="video-popup" src="https://www.youtube.com/embed/ZkJpzTNeaZQ?autoplay=1" frameborder="0" allowfullscreen></iframe>');
}

function closeAndStop() {
	$('div.video-popup').css('display', 'none');
	$('iframe.video-popup').remove();
}

function endGame(punctuation,language) {
	$('span.punctuation').text(punctuation);
	/* Mostrar popups */
}

function formSubmit(){
	var formulario = document.getElementById("formulario");	
	var nombre = formulario[0].value;
	var mensaje = formulario[1].value;
	 
	if ( nombre.length > 0 && mesaje.length > 0 ){
		formulario.submit();
		return true;
	} else {
		alert("Por favor rellena los dos campos");
		return false;
	}
}

function changeLan (lan) {
	console.log(lan);				
}

