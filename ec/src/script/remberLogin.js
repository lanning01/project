var cookie = document.cookie;
// console.log(cookie);
var arr = cookie.match(/username=([^;]*);?/);
var user = arr[1];
// console.log(arr);
document.querySelector('.welcome').innerHTML ="您好,&nbsp;&nbsp;&nbsp;"+user+"欢迎光临~";
document.querySelector('.exit a').innerHTML="退出";
$('.exit a').click(function(){
    alert('退出成功');
    window.location.href="/project/ec/src/html/login.html";
})
$.post('/project/ec/api/show_cart_count.php', {

    user: user

}, function (resp) {

    $('.quick-menu a span').html(resp);
    $('.mycart-count').html(resp);
    $('.quick-entry .icon3').html(resp);

})