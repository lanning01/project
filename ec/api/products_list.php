<?php
	include 'connectdb.php';

	$sql = "SELECT * FROM `products`";
	$ret = $conn->query($sql);
	$allData = array();



	header('content-type: text/json');
	if($ret->num_rows > 0) {
		while($oneData = $ret->fetch_assoc()) {
			$allData[] = $oneData;
		}

		echo json_encode($allData);
	}

	$conn->close();
//products 1,3,4
//user 2,11,12

?>