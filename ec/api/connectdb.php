<?php
	$servername = 'localhost';
	$dbmsUser = 'root';
	$dbmsPassword = '';
	$dbName = 'ec';
	//创建连接
	$conn = new mysqli($servername,$dbmsUser,$dbmsPassword,$dbName);
	//监测链接
	if($conn->connect_error){
		//连接失败
		echo "连接失败,原因:".$conn->connect_error;
		return;
	}
	$conn->query('set names utf8');
?>