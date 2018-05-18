<?php
	@include './connectdb.php';
	$name = $_POST['name'];
	$price_before = $_POST['price_before'];
	$price_now = $_POST['price_now'];
	$tittle = $_POST['tittle'];
	$imgnormal = upimg(0);
	$brandimg = upimg(1);
	$img1 = upimg(2);
	$img2 = upimg(3);
	$img3 = upimg(4);
	$img4 = upimg(5);
	$img5 = upimg(6);
	$color1 = $_POST['color1'];
	$color2 = $_POST['color2'];
	$color3 =$_POST['color3'];
	$color4 = $_POST['color4'];
	$mem32 = $_POST['mem32'];
	$mem64 = $_POST['mem64'];
	$mem128 = $_POST['mem128'];
	$mem256 = $_POST['mem256'];
	header("content-type:text/json");
	
		function upimg($i){
		  if ($_FILES["img".$i]["error"] > 0)
		    {
		    	   echo '{"ret":false}';

		    }
		  else
		    {
			   

			    if (file_exists("../../upload/" . $_FILES["img".$i]["name"]))
			      {
			        return "/project/upload/" . $_FILES["img".$i]["name"];
			      }
			    else
			      {
			     	move_uploaded_file($_FILES["img".$i]["tmp_name"],"../../upload/" . $_FILES["img".$i]["name"]);
			     	return "/project/upload/" . $_FILES["img".$i]["name"];
			      }
		    }

		}
	
	//插入数据
	$sql = "UPDATE `products`
			(`name`,`price_before`,`price`,`title`,`imgnormal`,`brandimg`,`img1`,`img2`,`img3`,`img4`,`img5`,`color1`,`color2`,`color3`,`color4`,`mem32`,`mem64`,`mem128`,`mem256`)
			SET
			('$name','$price_before','$price_now','$tittle','$imgnormal','$brandimg','$img1','$img2','$img3','$img4','$img5','$color1','$color2','$color3','$color4','$mem32','$mem64','$mem128','$mem256')";
if ($conn->query($sql) === TRUE) {
   echo '{"ret":true}';
} else {
    echo '{"ret":false}';
}

	$conn->close();
?>