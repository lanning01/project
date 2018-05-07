<?php
	include 'connectdb.php';
	
	$goodId = $_GET['goodId'];
	$userId = $_GET['userId'];
	$count = $_GET['count'];
	$color = $_GET['color'];
	$memory = $_GET['memory'];

	
	$sql = "SELECT `count` FROM `cart`
				WHERE `userid`='$userId' AND `productid`='$goodId' AND `color`='$color' AND `memory`='$memory'";
	
	
	$ret = $conn->query($sql);
	
	//查询的这条找count
	$oldCount=$ret->fetch_assoc()['count'];
	
	header("content-type: text/json");
	
	if($ret->num_rows>0){
		
		$count=$oldCount+$count;
		
		$sql = "UPDATE `cart` SET `cart`.`count`='$count' 
	    			WHERE `userid`='$userId' AND `productid`='$goodId'";
	    	
			$result = mysqli_query($conn, $sql);
		
			if ($result) {
				echo '{"ret": true}';
			} else {
				echo '{"ret":false}';
			}
	}else{
		$sql = "INSERT INTO `cart` 
				(`id`, `userid`, `productid`, `count`,`color`,`memory`) 
				VALUES 
				(NULL, '$userId', '$goodId', '$count','$color','$memory')";
				
				if (mysqli_query($conn, $sql)) {
				echo '{"ret": true}';
				} else {
				echo '{"ret": false}';
				}
	}
	
	$conn->close();

?>