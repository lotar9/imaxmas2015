<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="iso-8859-15">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
		<title>Road to Xai-Xai | Imaweb | 2015</title>
		<meta property='og:title' content='Road to Praia Xai-Xai!' />
                <meta property='og:site_name' content='X-Mas Imaweb 2015' />
                <!--<meta property='og:url' content='Introducir url' />-->
                <!--<meta property='og:description' content='Introducir trad descripcion' />-->
                <meta property='og:type' content='game' />
                <!--<meta property='og:image' content='<url>/img/initial.png' />-->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Arimo:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="./css/main.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
		<script type="text/javascript" src="scripts/language.js" ></script>
		<script type="text/javascript" src="scripts/main.js" ></script>
		<script type="text/javascript">
			var punctuation = parseInt("<?= isset( $_POST['punctuation'] ) ? $_POST['punctuation'] : 0; ?>");
			var message_id = parseInt("<?= isset( $_POST['message_id'] ) ? $_POST['message_id'] : 0; ?>");
		</script>
	</head>
	<body data-spy="scroll" data-target=".navbar" offset="0">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.php"><img class="logo_top" src="img/top_header_web.png"></a>
				</div>
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-6">
					<ul class="nav navbar-nav">
						<li class="active"><a href="#section1" id="MenuHome" >Home</a></li>
						<li><a href="#section2"  id="MenuRules" >Rules</a></li>
						<li><a href="#section3"  id="MenuGame" >Game</a></li>
						<li><a href="#section4"  id="MenuThanks" >Thanks</a></li>
						<li class="dropdown">
							<a id="lang-dropdown-nav" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
								<span id="language">Language</span> <span class="caret"></span>
							</a>
							<ul class="dropdown-menu" id="lang-dropdown-menu">
								<li><a id="ES" onclick="changeLan(this.id)"><img class="flag" src="img/flag_es.png"> - ES </a></li>
								<li><a id="EN" onclick="changeLan(this.id)"><img class="flag" src="img/flag_en.png"> - EN </a></li>
								<li><a id="PT" onclick="changeLan(this.id)"><img class="flag" src="img/flag_pt.png"> - PT </a></li>
							</ul>
						</li>
						<li><a href="http://www.imaweb.net" title="IMAWEB" target="_blank" class="iw_top"><img src="img/logo_orbit.png"></a></li>
					</ul>
				</div>
			</div>
		</nav>
		<section class="panel logo" id="section1">
			<div class="inner">
				<h1 class="logo_main"><img class="img-responsive" src="img/logo_main.png"></h1>
				<!-- <h1 id="titleXmas">XMAS IMAWEB 2015</h1> -->
				<div class="welcome" id="welcome">
					welcome
				</div>
				<div class="welcome2">
					<a href="#section2" id="rules">Rules</a> | <a href="#section3" id="start">start</a>
				</div>
				<!-- <div class="about"><a href="http://www.imaweb.net" title="IMAWEB" target="_blank"><img src="img/logo_imaweb-w.png"></a></div> -->
			</div>
		</section>

		<section class="panel explanation" id="section2">
			<div class="inner">
				<h2><span id="rules_carousel">rules</span></h2>
				<div id="carousel-levels" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
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
							<img src="img/initial2.png" alt="Inicial">
							<div id="carousel-0" class="carousel-caption">
								carousel-0
							</div>
						</div>
						<div class="item">
							<img src="img/carrusel_01-01.png" alt="Ciudad">
							<div id="carousel-1" class="carousel-caption">
								carousel-1
							</div>
						</div>
						<div class="item">
							<img src="img/carrusel_02-01.png" alt="Mar">
							<div id="carousel-2" class="carousel-caption">
								carousel-2
							</div>
						</div>
						<div class="item">
							<img src="img/carrusel_03-01.png" alt="Desierto">
							<div id="carousel-3" class="carousel-caption">
								carousel-3
							</div>
						</div>
						<div class="item">
							<img src="img/carrusel_04-01.png" alt="Selva">
							<div id="carousel-4" class="carousel-caption">
								carousel-4
							</div>
						</div>
						<div class="item">
							<a href="game.html" class="play" id="start_carousel">start</a>
							<img src="img/final.png" alt="Final">
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

		<section class="panel game" id="section3">
			<div class="inner">
				<div class="middle">
				<h2><span id="play">play</span></h2>
					<div class="ratio-wrapper">
						<div class="ratio-wrapper-content">
							<a href="game.html" class="play" id="start_game">start</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="panel final" id="section4">
			<div class="inner">
				<div class="middle">
					<div class="row">
						<form class="form-horizontal" id="formulario" method="POST" action="functions.php" onsubmit="return formSubmit();" >
							<input type="hidden" name="id" id="message_id"/>
							<input type="hidden" name="extra_kg" id="extra_kg"/>
							<div class="col-xs-12 col-sm-6">
								<h2><span id="title_section4">Thanks</span></h2>
								<div class="row graphic">
									<div class="col-xs-8">
										<canvas id="myChart" width="200" height="150"></canvas>
									</div>
									<div class="col-xs-4 graphic_txt">
										<span class='punctuation'>0</span> <span id="title_section5">help</span>
									</div>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6">
								<h2><span id="leave_your_messasge">leave_your_messasge</span></h2>
								<p id="info_message" class="align-left dashedBott">Dejenos un mensaje en nuestro muro.<p>
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
							</div>
						</form>
					</div>

					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<div class="video-wrapper">
								<iframe src="https://www.youtube.com/embed/ZkJpzTNeaZQ" frameborder="0" allowfullscreen></iframe>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6">
							<h2><span id="share">share</span></h2>
							<div class="share_butt"><a href='' class='twitter-intent'><img class='sn-logo' src='img/ico_twitter_w.png' /></a></div>
							<div class="share_butt"><a href='' class='facebook-intent'><img class='sn-logo' src='img/ico_facebook_w.png' /></a></div>
							<br/><br/>
							<div class="align-left dashedBott">Designed by</div>
							<div class="iw_logo"><a href="http://www.imaweb.net" title="IMAWEB" target="_blank"><img src="img/logo_imaweb-w.png"></a></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="cookiesms" id="cookie1">
			<span id="cookieText">CookieText</span>
			<div class="cookies2">COOKIES</div>
		</div>
		<script type="text/javascript">
			if (!localStorage.controlcookie>0){ cookie1.setAttribute("style","animation: desaparecer 5s;-webkit-animation: desaparecer 5s;");}
		</script>
	</body>
</html>
