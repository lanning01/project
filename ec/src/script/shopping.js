//全选
function kk(){
	$('.cart-table input[type=checkbox]').change(function () {
    var selected = $(this).prop('checked');
    //alert(selected);
    $('li input[type=checkbox]').prop('checked', selected);
})

$('.shopbox input[type=checkbox]').on('change',function (){
    var all_count = $('li input[type=checkbox]').length;
    var checked_count = $('li input[type=checkbox]:checked').length;
    $('.cart-table input[type=checkbox]').prop('checked', all_count === checked_count)
})
$('.return_top').click(function(){
    $(window).scrollTop(0);
});

}


function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}


var price;
var price_before;
var name = getQueryString('productId');
var resp2;


var cookie = document.cookie;
cookie.match(/userid=(.*);/);
if(RegExp.$1){
	$.ajax({
    url: '/project/ec/api/cart.php?',
    type: 'get',
    data: {
        userid: RegExp.$1
    },
    success: function (resp) {
    	resp2 = resp;
        var html = template('details_pic', {
            arr: resp
        });
        $('.details_pic').append(html);
        
        kk();
        totle();

    },
    error: function (xhr) {

    }

})
	
}else{
	alert('没有登录,不能查看信息');
}


//计算小计,选中改变金额
function totle(){
    var money=0;
    $('input[type=checkbox].inp').change(function () {
        var selected = $(this).prop('checked');
        if(selected){
            money+=parseFloat($(this).parents('.shopbox').find('div.totle').html());
        }else{
            money-=parseFloat($(this).parents('.shopbox').find('div.totle').html());
        }
        $('.pay-message .price b').html(money)

    })
}
$('#payId').click(function(){
	console.log($('li input[type=checkbox]:checked').length)
	var l = $('li input[type=checkbox]');
	var arrs = [];
	if($('li input[type=checkbox]:checked').length === 0){
			alert("请挑选商品");
			return;
	}else{
		for(var i=0;i<l.length;i++){
			if(l.eq(i).prop('checked')){
				arrs.push(resp2[i])
			}else{}
		}
	}
	
	//console.log(arrs);
	$.get('/project/ec/api/order.php?',{arr : arrs},function(resp){
		if(resp.ret){
			// alert("结算成功");
		}else{
			alert(resp.ret);
		}
		
	})
})
