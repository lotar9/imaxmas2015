<?php
include ('functions.php');
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="iso-8859-15">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
		<title>Road to Xai-Xai | Imaweb | 2015</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Arimo:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script src="scripts/jquery.scrollify.min.js"></script>
		<script src="scripts/language.js"></script>
		<script type="text/javascript">
		$(function(){
			setupDefaultLanguage();
		});
		</script>
	</head>
	<body>
		<section class="scores">
			<div class="inner">
				<div class="middle">
					<div class="row top_score">
						<a href="index.php" title="Road to Xai-Xai "><img class="logo_top" src="img/top_header_web.png"></a>
						<a href="http://www.imaweb.net" title="IMAWEB" target="_blank" class="iw_logo float-right"><img src="img/logo_orbit.png"></a>
					</div>
					<h2 id="scores">scores</h2>
					<table class="puntuaciones">
						<tr>
							<th id="name">NOMBRE</th>
							<th id="message">MENSAJE</th>
							<th id="score" class='align-center'>PUNTUACION</th>
							<th id="location" class='align-center'>LOCATION</th>
						</tr>
						<?php
							$results = listScores();
							while($row = $results->fetch_object()){
								echo "<tr class='fila0'>";
							    echo "<td class='align-left'>".$row->person_name."</td>";
							    echo "<td class='align-left'>".$row->message."</td>";
							    echo "<td class='t_pts_prov'>".$row->help_amount."</td>";
							    echo "<td class='t_pts_prov'>".$row->province."</td>";
							    echo "</tr>";
							}
						?>
					</table>
				</div>
			</div>
		</section>
	</body>
</html>
