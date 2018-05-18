<?php
	include 'connectdb.php';
	$id=$_GET["id"];
	$sql = "select * from `products` where id='$id'";
	$ret=$conn->query($sql);
	$arr = array();
	if($ret->num_rows>0){
		 while($oneData = $ret->fetch_assoc()){
                $arr[]=$oneData;
            }
	}
	header("content-type:text/json");
	echo json_encode($arr);
	
    $conn->close();
?>