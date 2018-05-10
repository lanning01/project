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
	$productsOrder = array();
		//	2. 从cart表中，取出userId对应的购物车信息
		$sql = "SELECT * FROM `order_one` WHERE `username`=$user";
			    $ret = $conn->query($sql);
			    if($ret->num_rows>0) {
			    	while($oneData = $ret->fetch_assoc()) {
			    		$productsOrder[] = $oneData;
			    	}
			    }

	header("content-type: text/json");
	echo json_encode($productsOrder);

	$conn->close();
?>