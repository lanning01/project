//查询有多少订单
/*$.get('/project/ec/api/myOrder.php',function(resp){
	console.log(resp)
	var html = template('myOrdertd',{
		orders : resp
	})
	$('body').append(html);
	
})
*/
//查出每个订单里的所有商品
$.get('/project/ec/api/products.php',function(resp){
		console.log(resp);	
	
	var html = template('myOrdertd',{
		pro : resp
	})
	$('main').append(html);	
})
