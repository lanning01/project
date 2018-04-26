var cookie = document.cookie;
console.log(cookie);
var arr = cookie.match(/username=([^;]*);?/);
var user = arr[1];
document.querySelector('.welcome').innerHTML ="您好,&nbsp;&nbsp;&nbsp;"+user+"欢迎光临~";
// document.querySelector('.welcome a').innerHTML =user;
document.querySelector('.exit a').innerHTML="退出";
$('.exit a').click(function(){
    window.location.href="/project/ec/src/html/login.html";
})