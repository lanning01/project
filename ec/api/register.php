<?php
	@include './connectdb.php';
	$user = $_POST['user'];
	$password = $_POST['pw'];
	$tel = $_POST['tel'];
	//md5加密算法
	$password = md5($password);
	//检测用户是否存在
	$sql ="SELECT *FROM `users` WHERE `username`='$user'";
	// $ret = mysqli_query($conn,$sql);
	$ret = $conn->query($sql);
	header("content-type:text/json");
	if($ret->num_rows > 0){
		//num_rows 代表查询结果中的条数
		//用户名存在,注册失败
		echo '{"ret":false}';
		return;
	}
	//插入数据
	$sql = "INSERT INTO `users`
			(`id`,`username`,`password`,`tel`)
			VALUES
			(NULL,'$user','$password','$tel')";
	if(mysqli_query($conn,$sql)===true){
		//插入成功
		echo '{"ret":true}';
	}else{
		//插入失败
		echo '{"ret":false}';
	};
	$conn->close();
?>