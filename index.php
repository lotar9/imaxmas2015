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
		<script type="text/javascript" src="scripts/language.js" ></script>
		<script type="text/javascript">
			var kg_obtained=<?php echo getKgObtained()?>;
		</script>
	</head>
	<body>
		<section class="panel logo">
			<div class="inner">
				<p class="language"><span id="ES" onclick="changeLan(this.id)">ES</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="EN" onclick="changeLan(this.id)">EN</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="PT" onclick="changeLan(this.id)">PT</span></p>
				<h1 id="titleXmas">XMAS IMAWEB 2015</h1>
				<p id="welcome">welcome</p>
				<canvas id="myChart" width="150" height="150"></canvas>
				<p class="about">Imaweb 2000 S.L</p>
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
							<div id="carousel-0" class="carousel-caption">
								carousel-0
							</div>
						</div>
						<div class="item">
							<img src="img/city.jpg" alt="Ciudad">
							<div id="carousel-1" class="carousel-caption">
								carousel-1
							</div>
						</div>
						<div class="item">
							<img src="img/sea.jpg" alt="Mar">
							<div id="carousel-2" class="carousel-caption">
								carousel-2
							</div>
						</div>
						<div class="item">
							<img src="img/desert.jpg" alt="Desierto">
							<div id="carousel-3" class="carousel-caption">
								carousel-3
							</div>
						</div>
						<div class="item">
							<img src="img/forrest.jpg" alt="Selva">
							<div id="carousel-4" class="carousel-caption">
								carousel-4
							</div>
						</div>
						<div class="item">
							<img src="img/final.jpg" alt="Final">
							<div id="carousel-5" class="carousel-caption">
								carousel-5
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
				<iframe id="game-frame" src=""></iframe>
			</div>
		</section>
		<section class="panel final">
			<div class="inner">
				<div class="middle">
					<h2> <span id="title_section4">Thanks</span> <span class='punctuation'>0</span> <span id="title_section5">help</span></h2>
					<p id="info_message">message<p>
					<form class="form-horizontal" id="formulario" method="POST" action="functions.php" onsubmit="return formSubmit();" >
						<input type = "hidden" name="location" id="message_location"/>
						<input type="hidden" name="id" id="message_id"/>
						<input type="hidden" name="extra_kg" id="extra_kg"/>
						<div class="form-group">
							<label class="col-sm-2 control-label" id="name">name</label>
							<div class="col-sm-10">
								<input class="form-control" id="person_name" maxlength="255" name="nombre" type="text"/>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label" id="message">message</label>
							<div class="col-sm-10">
								<textarea class="form-control" id="message_text" name="mensaje" rows="3" cols="40" ></textarea>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="submit" class="btn btn-default"><span id="submit">send</span></button>
							</div>
						</div>
					</form>
					<iframe class="video-frame" src="https://www.youtube.com/embed/ZkJpzTNeaZQ" frameborder="0" allowfullscreen></iframe>
					<p id="share">share</p>
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
