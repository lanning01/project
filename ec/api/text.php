<?php
		$arr = $_GET['arr'];
		
		for($i = 0;$i<count($arr);$i++){
			echo gettype((int)$arr[$i]['age']);
	}
	
	
?>