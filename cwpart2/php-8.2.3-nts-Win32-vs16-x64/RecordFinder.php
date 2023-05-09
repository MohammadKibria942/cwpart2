<?php
	header('Access-Control-Allow-Origin: *');
	$nhsNo = $_POST['NhsNo'];

	
	$pdo = new \PDO("sqlite: GPSurgery.db");//Change to GPSurgery.db
	$st = $pdo->query("SELECT * from registeredPatientRecords where NHSNumber='".$nhsNo."'");
     
    $st->execute();
	$records = [];
	
	while ($record = $st->fetchObject()) {
		$records[]=$record;
		
    }
	if(empty($records)){
		echo json_encode(0);
	}
	else
	{
		echo json_encode($records);
	}
?>