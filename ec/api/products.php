<?php
	//处理cart页面发送的ajax请求
	

	$user = empty($_COOKIE['username']) ? null: $_COOKIE['username'];
	// $user = empty($_COOKIE['username']);
	if($user == null) {
		header("content-type: text/javascript");
		echo "location.href='http://localhost/project/ec/src/html/login.html'";
		return;
	}
	
	
	//$_POST['xxx']取得post中的参数

	//根据$user,从数据库中查询出对应的购物车信息，然后返回
	//	1. 根据$user,取得userID
	include 'connectdb.php';
	/*$sql = "SELECT `id` FROM `users` WHERE `username`='$user'";
	$ret = $conn->query($sql);
	$products = array();
	if($ret->num_rows > 0) {
		$userId = $ret->fetch_assoc()['id'];
		
*/
	$orders = array();
	
	$a = array();
		
		$sql = "SELECT `orderon` FROM `order_one` WHERE `username`='$user'";
		$ret = $conn->query($sql);
			    if($ret->num_rows>0) {
			    	while($oneData = $ret->fetch_assoc()['orderon']) {
			    		$orders[] = $oneData;
			    	}
			    }
		for($i = 0;$i<count($orders);$i++){
			$sql2 = "select * from `order_two` where `orderon` = '$orders[$i]'";
			$rets = $conn->query($sql2);
			$products = array();
			
			if($rets->num_rows>0){
				while($oneDatas = $rets->fetch_assoc()){
					$products[] = $oneDatas;
				}
			}
			array_push($a,$products);
			
		}
	

	header("content-type: text/json");
	echo json_encode($a);

	$conn->close();
?>