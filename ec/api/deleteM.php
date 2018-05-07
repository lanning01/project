<?php
	include 'connectdb.php';
	$id = $_GET['id'];
	$sql = "delete  from `products` where `id`='$id'";
	$res = mysqli_query($conn,$sql);
	header('content-type:text/json');
	if($res){
		echo '{"ret":true}';
	}else{
		echo '{"ret":flase}';
	}
	$conn->close();
?>