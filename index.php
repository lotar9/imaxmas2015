<?php
require_once("functions.php");
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
		<title>XMas Imaweb 2015</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Arimo:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="./css/main.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>	
		<script src="scripts/jquery.scrollify.min.js"></script>
		<script type="text/javascript" src="scripts/main.js" ></script>
		<script type="text/javascript">
			var kg_obtained=<?php echo getKgObtained()?>;
		</script>
	</head>
	<body>
		<section class="panel logo">
			<div class="inner">
				<p class="language"><span id="es" onclick="changeLan(this.id)">ES</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="en" onclick="changeLan(this.id)">EN</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="pt" onclick="changeLan(this.id)">PT</span></p>
				<h1>XMAS IMAWEB 2015</h1>
				<p>Bienvenidos blablablbablalblabla</p>
				<canvas id="myChart" width="150" height="150"></canvas>		
				<p class="about">From <a href='http://www.imaweb.net/' target='_blank' class='imaweb'>Imaweb</a> with ♥</p>
			</div>
		</section>
		<section class="panel explanation">
			<div class="inner">
				<div id="carousel-levels" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators">
						<li data-target="#carousel-levels" data-slide-to="0" class="active"></li>
						<li data-target="#carousel-levels" data-slide-to="1"></li>
						<li data-target="#carousel-levels" data-slide-to="2"></li>
						<li data-target="#carousel-levels" data-slide-to="3"></li>
						<li data-target="#carousel-levels" data-slide-to="4"></li>
						<li data-target="#carousel-levels" data-slide-to="5"></li>
					</ol>
					<!-- Wrapper for slides -->
					<div class="carousel-inner" role="listbox">
						<div class="item active">
							<img src="img/initial.jpg" alt="Inicial">
							<div class="carousel-caption">
								Juan Pablo puto aquí va una imagen inicial que se te ocurra
							</div>
						</div>
						<div class="item">
							<img src="img/city.jpg" alt="Ciudad">
							<div id="ciudad" class="carousel-caption">
								Recopila toda la ayuda posible que cae del cielo, recuerda que necesitamos comida no perecedera, material médico y libros. ¡Pero cuidado! Algún vecino desalmado nos está tirando
								macetas y esas no nos sirve, en Mozambique ya tienen bastante vegetación.
							</div>
						</div>
						<div class="item">
							<img src="img/sea.jpg" alt="Mar">
							<div id="mar" class="carousel-caption">
								Lleva toda la ayuda recolectada a traves del Estrecho de Gibraltar en nuestra lancha. No te dejes obnuvilar con la belleza de las ballenas y las tortugas y cuidado con cochar con
								los faros o tendrás que empezar de nuevo.
							</div>
						</div>
						<div class="item">
							<img src="img/desert.jpg" alt="Desierto">
							<div id="desierto" class="carousel-caption">
								Subete a nuestro 4x4 y atraviesa el desierto para llegar a Mozambique. Debes recoger bidones de combustible para que el 4x4 no se quede parado y tengas que volver a empezar.
								¡Y no choques con nada!
							</div>
						</div>
						<div class="item">
							<img src="img/forrest.jpg" alt="Selva">
							<div id="selva" class="carousel-caption">
								Reparte la ayuda desde el helicóptero que sobrevuela la selva, lanzandola sobre las aldeas que aparecen. Si fallas, no contará como ayuda entregada.
							</div>
						</div>
						<div class="item">
							<img src="img/final.jpg" alt="Final">
							<div class="carousel-caption">
								Juan Pablo puto aquí va una imagen final
							</div>
						</div>
					</div>
					<!-- Controls -->
					<a class="left carousel-control" href="#carousel-levels" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#carousel-levels" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</section>
		<section class="panel game">
			<div class="game">
				<!-- Contenido del videojuego -->
			</div>
		</section>
		<section class="panel final">
			<div class="inner">
				<div class="middle">
					<h2 id="title_section4">GRACIAS POR PARTICIPAR! HAS RECOLECTADO <span class='punctuation'>0</span> KILOS DE AYUDA!</h2>
					<p id="info_menssage">Si dejas un mensaje se donaran 20 Kgs más<p>
					<form id="formulario" method="POST" action="functions.php" onsubmit="return formSubmit();" >
						<input type = "hidden" name="location" id="message_location"/>
						<input type="hidden" name="id" id="message_id"/>
						<input type="hidden" name="extra_kg" id="extra_kg"/>
						<div class="form-group">
						<label id="name">Nombre</label>
						<input id="person_name" name="nombre" class="form-control" type="text" placeholder="Nombre"/>
						</div>
						<div class="form-group">
						<label id="message">Mensaje</label>
						<textarea id="message_text" name="mensaje" class="form-control" rows="5" cols="40" placeholder="Mensaje"></textarea>
						<button id="submit" type="submit" class="btn btn-default">Enviar</button>
						</div>
					</form>
					<iframe class="video-frame" src="https://www.youtube.com/embed/ZkJpzTNeaZQ" frameborder="0" allowfullscreen></iframe>
					<p id="share">Compartelo con tus conocidos!</p>
					<p>
						<a href='' class='twitter-intent'><img class='sn-logo' src='img/twitter.png' /></a>
						<a href='' class='facebook-intent'><img class='sn-logo' src='img/facebook.png' /></a>
						<a href='messages.php' class='messages-panel'><img class='sn-logo' src='img/mail.png' /></a>
					</p>
				</div>
			</div>
		</section>
	</body>
</html>