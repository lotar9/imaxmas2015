<?php
include ('functions.php');  
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
		<link rel="stylesheet" href="css/main.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
		<script src="scripts/jquery.scrollify.min.js"></script>
		<script type="text/javascript">
			$(function(){
				$.scrollify({
					section: '.panel',
					offset: 0
				});
			});
		</script>
	</head>
	<body>
		<section class="scores">
			<div class="inner">
				<div class="middle">
					<h2>PUNTUACIONES</h2>
					<table class="puntuaciones">
						<tr><th>NOMBRE</th><th>MENSAJE</th><th>PUNTUACIÓN</th></tr>
						<?php
							$result = listScores ();	
							while ($fila = mysql_fetch_assoc($result)) {
								echo "<tr>";
							    echo "<td>".$fila['nombre']."</td>";
							    echo "<td>".$fila['mensaje']."</td>";
							    echo "<td>".$fila['puntuacion']."</td>";
							    echo "</tr>";
							}
						?>
					</table>
				</div>
			</div>
		</section>
	</body>
</html>
