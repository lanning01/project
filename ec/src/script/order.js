 function getQueryString(name) {
        var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
 //将字符串转化为16进制
function stringToHex(str){  
　　　　    var val="";  
　　　　    for(var i = 0; i < str.length; i++){  
　　　　　　  if(val == "")  
　　　　　　　　    val = str.charCodeAt(i).toString(16);  
　　　　　　  else  
　　　　　　　　    val += str.charCodeAt(i).toString(16);  
　　　　    }  
　　　　     return val;  
　　  } 

    //获取url路径所带的参数
    var id = parseInt( getQueryString('productId'));
    var count = parseInt( getQueryString('count'));
    var price = parseInt( getQueryString('price'));
    
    
    var obj = getQueryString("obj");
    //将最后一个参数转化为对象,得先解码
    var kk = decodeURI(obj);
    var zong = price*count;
    //订单编号用日期生成
    var date = new Date();
    //var orderon = stringToHex(date.toLocaleString().replace(/[ ]/g,""));
    var orderon = date.toLocaleString().replace(/[ ]/g,"");
    
    //将字符串转化为json格式
    var oo = JSON.parse(kk);
   
    oo.pri = price;
    oo.num = count;
    oo.zong = zong;
    oo.col = decodeURI(getQueryString("color"));
    oo.xing = getQueryString("xing");
    
    var html = template('order_info', {
                o: oo
            });
      $('.ttr').append(html);
    
    
 	$('button').click(function(){
 		var arr = [{
 				id : id,
	    		count : count,
	    		color : oo.col,
	    		memory : oo.xing,
	    		img1 : oo.img1,
	    		price : price,
	    		title : oo.title
 		}]
	 	$.ajax({
	    	type:"get",
	    	url:'/project/ec/api/order.php?',
	    	dataType:"json",
	    	data:{
	    		arr:arr
	    	},
	    	success:function(resp){
	    		if(resp.ret){
	    			alert("生成订单成功")
	    		}else{
	    			alert("生成订单失败")
	    			
	    		}
	    	},
	    	error:function(){
	    		alert("生成订单错误");
	    	}
	    });

 	})
    