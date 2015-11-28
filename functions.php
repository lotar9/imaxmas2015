<?php
/* Tabla
CREATE TABLE puntuaciones (  id_jugador int(5) auto_increment,  nombre varchar(255),  mensaje varchar(255),  puntuacion int (11),  PRIMARY KEY (id_jugador) );
*/

//mysql_connect( 'server', 'user', 'pass' );
//mysql_select_db( 'db' );

if ( $_POST['nombre'] && $_POST['mensaje'] ) {
	mysql_query("UPDATE puntuaciones set mensaje = '".$_POST['mensaje']."' nombre = '".$_POST['nombre']."' where id_jugador = ".$id);
	header('Location: messages.php');
}

function listScores () {
	$query = 'SELECT * FROM puntuaciones order by puntuacion desc';
	$result = mysql_query($query);
	return $result;
}

?>
