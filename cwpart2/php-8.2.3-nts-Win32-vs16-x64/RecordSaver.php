<?php
    header('Access-Control-Allow-Origin: *');
    $nhsNum = $_POST["NhsNo"];
    $fName = $_POST["FORENAME"];
    $surname = $_POST["surname"];
    $DOB = $_POST["DOB"];
    $genderCode = $_POST["genderCode"];
    $postCode = $_POST["postCode"];

    $pdo = new \PDO("sqlite: GPSurgery.db");
    $st = $pdo->query("UPDATE registeredPatientRecords SET Forename='".$fName."', Surname='".$surname."', PersonDOB='".$DOB."', GenderCode='".$genderCode."', Postcode='".$postCode."' WHERE NHSNumber='".$nhsNum."'");

    $st->execute();

    if($st)
    {
        echo json_encode(1);
    } else{
        echo json_encode(0);
    }
?>
