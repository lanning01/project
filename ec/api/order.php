<?php

	include "connectdb.php";
	$arr = $_GET['arr'];
	//echo json_encode($arr);
	$t = 0;
	$f = 0;
		$userid = empty($_COOKIE['username']) ? null: $_COOKIE['username'];
		$comments = '东西不错';
		$totalprice = 0.0;

		//订单编号
		date_default_timezone_set("PRC");
		$tt =  date ( "Y-m-d H:i:s" );
		$orderon = $tt;	

	for($i = 0;$i<count($arr);$i++){
		$goodid = $arr[$i]['id'];
		$count = (int)$arr[$i]['count'];
		$price = (int)$arr[$i]['price'];
		$totalprice += $count*$price;
		$color = $arr[$i]['color'];
		$xing = $arr[$i]['memory'];
		$img = $arr[$i]['img1'];
		$title = $arr[$i]['title'];
		$sql2 = 	"INSERT INTO `order_two`
			(`goodid`,`orderon`,`count`,`color`,`xing`,`img`,`title`,`price`)
			VALUES
			('$goodid','$orderon','$count','$color','$xing','$img','$title','$price')";
		$b =  mysqli_query($conn,$sql2);
		if($b ===true){
			$t++;
			$sql3 = "delete  from `cart` where `productid`='$goodid'";
			$delete =  mysqli_query($conn,$sql3);
		}else{
			$f++;
		}
	}
	
	$sql = "INSERT INTO `order_one`
			(`username`,`orderon`,`comments`,`totalprice`)
			VALUES
			('$userid','$orderon','$comments','$totalprice')";
			
	
    header("content-type:text/json");
	$a = mysqli_query($conn,$sql);
	
	if($t === count($arr) && $a === true){
			echo '{"ret":true}';
		}else{
			//插入失败
			echo '{"ret":false}';
		};
	/*$goodid = $_POST['id'];
	$count  = $_POST['count'];
	$totalprice = $_POST['totalprice'];
	$orderon = $_POST['orderid'];
	$color = $_POST['color'];
	$xing = $_POST['xing'];
	$img = $_POST['img'];
	$userid = 'xiaoli';
	$comments = "东西不错";*/
	
	
	/*if(mysqli_query($conn,$sql)===true && mysqli_query($conn,$sql2) === true){
		//插入成功
		echo '{"ret":true}';
	}else{
		//插入失败
		echo '{"ret":false}';
	};*/
	$conn->close();
?>