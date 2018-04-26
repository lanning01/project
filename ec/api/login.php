<?php

	include "connectdb.php";

	$user = $_POST['user'];
	$pw = $_POST['password'];

	$pw = md5($pw);

	$sql = "SELECT * FROM `users` 
			WHERE `username`='$user' AND `password`='$pw'";

	// echo $sql;
	$result = $conn->query($sql);

	header("content-type: text/json");
	if($result->num_rows > 0) {
		//登录成功
	    header("Set-Cookie:username=$user;path=/");
		echo '{"ret": true}';
	} else {
		//登录失败
		echo '{"ret": false}';
	}

	$conn->close();

?>