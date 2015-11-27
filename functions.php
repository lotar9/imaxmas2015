<?php
/* Tabla
CREATE TABLE puntuaciones (  id_jugador int(5) auto_increment,  nombre varchar(255),  mensaje varchar(255),  puntuacion int (11),  PRIMARY KEY (id_jugador) );
*/
mysql_connect( 'server', 'user', 'pass' );
mysql_select_db( 'db' );


switch ($_GET['action']) {
	case 'addScore':
		addScore( $_GET['nombre'], $_GET['puntuacion'] );
		break;
	case 'addMessage':
		addMessage( $_GET['id'], $_GET['mensage'] );
		break;
}


function listScores () {
	$query = 'SELECT * FROM puntuaciones order by puntuacion desc';
	$result = mysql_query($query);
	return $result;
}

function addScore ( $score, $nombre ) {
	return mysql_query("INSERT INTO puntuaciones values (null, ".$nombre.", '', ".$score.")");
}

function addMessage ( $id, $message ) {
	return mysql_query("UPDATE puntuaciones set mensaje = '".$message."' where id_jugador = ".$id);
}

?>
