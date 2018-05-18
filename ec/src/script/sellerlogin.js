$('button').click(function () {
    $.post('/project/ec/api/sellerlogin.php', {
        user: $('#sellername').val(),
        password: $('#sellerpw').val()
    }, function (resp) {
        if(resp.ret) {
            //登录成功
            location = 'http://localhost/project/ec/src/html/indexM.html';
        } else {
            //登录失败
            alert('登录失败');
        }
    })
})