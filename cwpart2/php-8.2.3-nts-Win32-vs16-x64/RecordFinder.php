<?php
	header('Access-Control-Allow-Origin: *');
	$nhsNo = $_POST['NhsNo'];
	$notFound = "no records";

	
	$pdo = new \PDO("sqlite: vaccines.db");//Change to GPSurgery.db
	$st = $pdo->query("SELECT * from patients where NHSNumber='".$nhsNo."'");
     
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