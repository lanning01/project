<?php
    include 'connectdb.php';
	$user =$_GET['username'];
	// echo $user;


	//根据$user,从数据库中查询出对应的购物车信息，然后返回
    //	1. 根据$user,取得userID
    $sql="SELECT `id` FROM `users` WHERE `username`='$user'";
    $ret = $conn->query($sql);
    $products = array();
    if($ret->num_rows>0){
        $userId=$ret->fetch_assoc()['id'];
        //2.从cart表中,取得userId对应的购物车信息
        $sql="SELECT `products`.`description`,`products`.`price_before`,`products`.`img`,`products`.`name`,`products`.`price`,`cart`.`count`
            FROM `products` left join `cart`
            ON `products`.`id`=`cart`.`productid`
            WHERE `cart`.`userid`='$userId'";
        $ret=$conn->query($sql);
        if($ret->num_rows>0){
            while($oneData = $ret->fetch_assoc()){
                $products[]=$oneData;
            }
        }
    }
    header("content-type:text/json");
	echo json_encode($products);
    $conn->close();
?>