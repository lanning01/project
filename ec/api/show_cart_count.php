<?php
    include 'connectdb.php';

    $user = $_POST['user'];

    $sql = "SELECT * FROM `users`
    			WHERE `username`='$user'";

    //header("Set-Cookie:username=$user;path=/");
    
    $ret = $conn->query($sql);

    $userId=$ret->fetch_assoc()['id'];

   // echo $userId;

    $productsNum = 0;
    
    if($ret->num_rows>0){
    	
        //2.从cart表中,取得userId对应的购物车信息
        $sql="SELECT `cart`.`count`
            FROM `cart`
            WHERE `cart`.`userid`='$userId'";

        $ret=$conn->query($sql);
        
        if($ret->num_rows>0){
            while($oneData = $ret->fetch_assoc()['count']){
                $productsNum+=$oneData;
            }
        }
    }
    
    header("content-type:text/json");
	echo json_encode($productsNum);
	
    $conn->close();
?>