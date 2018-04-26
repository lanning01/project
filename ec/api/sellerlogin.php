<?php

	include "connectdb.php";

	$user = $_POST['user'];
	$pw = $_POST['password'];



	$sql = "SELECT * FROM `sellers`
			WHERE `sellername`='$user' AND `password`='$pw'";

	$result = $conn->query($sql);

	header("content-type: text/json");
	if($result->num_rows > 0) {
		//登录成功
	    header("Set-Cookie:sellername=$user;path=/");
		echo '{"ret": true}';
	} else {
		//登录失败
		echo '{"ret": false}';
	}

	$conn->close();

?>