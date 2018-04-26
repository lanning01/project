//全选
$('.cart-table input[type=checkbox]').change(function () {
    var selected = $(this).prop('checked');
    $('.liSelect input[type=checkbox]').prop('checked', selected);
})

$('.cart-table').change('.liSelect input[type=checkbox]', function () {
    var all_count = $('.liSelect input[type=checkbox]').length;
    var checked_count = $('.liSelect input[type=checkbox]:checked').length;
    $('.cart-table input[type=checkbox]').prop('checked', all_count === checked_count)
})
$('.return_top').click(function(){
    $(window).scrollTop(0);
});

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
$.ajax({
    url: '/project/ec/api/cart.php?',
    type: 'get',
    data: {
        id: name
    },
    success: function (resp) {
        price = resp.price;
        price_before = resp.price_before;
        // console.log(resp);
        // console.log(resp.title);
        var html = template('img_tpl', {
            arr: resp
        });
        $('.details_pic').append(html);


        var htmls = template('info_tpl', {
            arr: resp
        });
        $('.details_info').append(htmls);
    },
    error: function (xhr) {

    }

})