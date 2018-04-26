<?php
	include 'connectdb.php';

	$id = $_GET['id'];

	$sql = "SELECT `brandimg` FROM `products` where `id`='$id'";
	$ret = $conn->query($sql);



	header('content-type: text/json');
	if($ret->num_rows > 0) {
		if($oneData = $ret->fetch_assoc()) {
		    //echo $oneData;
		    echo json_encode($oneData);
		}


	}

	$conn->close();
?>