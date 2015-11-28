<?php
if ( $_POST['score'] ){
	$conn = getConn();
	if(!$conn->query( sprintf(
			"insert into messages (location,help_amount,creation_date,province) values ('%s',%s,'%s','%s')",
			getLocation(),
			(int)$_POST['score'],
			date("Y-m-d H:i:s"),
			getGeoPosition(getLocation())
		))){
		echo json_encode( array("status"=>"KO","error"=>$conn->error) );
		$conn->close();
		exit();
	}
	else {
		echo json_encode( array("status"=>"OK","id"=>$conn->insert_id) );
		$conn->close();
		exit();
	}
	
}

if ( $_POST['nombre'] && $_POST['mensaje'] ) {
	$conn = getConn();
	if ($_POST['id']){
		if(!$conn->query( sprintf(
			"update messages set message = '%s', person_name = '%s', help_amount = help_amount + %s where id = %s",
			$_POST['mensaje'],$_POST['nombre'],$_POST['extra_kg'],$_POST['id']
		))){
			echo $conn->error;
			$conn->close();
			exit;
		}
	}
	else {
		if(!$conn->query( sprintf(
			"insert into messages (message,person_name,location,creation_date,help_amount,province) values ('%s','%s','%s','%s',%s,'%s')",
			$_POST['mensaje'],$_POST['nombre'],getLocation(),date("Y-m-d H:i:s"),$_POST['extra_kg'],getGeoPosition(getLocation())
		))){
			echo $conn->error;
			$conn->close();
			exit;
		}
	}
	header('Location: messages.php');
}

function getKgObtained(){
	$conn = getConn();
	$res = $conn->query( "select sum(help_amount) as cuenta from messages" );
	if (!$res){
		return 0;
	}
	$row = $res->fetch_object();
	return is_null($row->cuenta)?0:$row->cuenta;
}

function listScores() {
	$conn = getConn();
	$res = $conn->query("select * from messages where message <> '' and not(message is null) order by creation_date desc");
	if (!$res){
		echo $conn->error;
		$conn->close();
		exit;
	}	
	return $res;
}


function getConn(){
	return $mysqli = new mysqli('localhost', 'imaweb', 'pepito','imaxmas2015');
}

function getLocation(){
	if ($_POST['location'] !== ''){
		return $_POST['location'];
	}
}

function getGeoPosition($address){
	$url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=%s&sensor=false";
	$json = file_get_contents(sprintf($url,$address));

	$data = json_decode($json, TRUE);
	if($data['status']=="OK"){
		$ac = $data['results']['0']['address_components'];
		foreach ($ac as $token){
			if (in_array("administrative_area_level_2",$token["types"])){
				return $token['long_name'];
			}
		}
	}
	return '';
}

?>
