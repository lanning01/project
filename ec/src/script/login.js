$('button').click(function () {
    $.post('/project/ec/api/login.php', {
        user: $('#user').val(),
        password: $('#pw').val()
    }, function (resp) {
        if(resp.ret) {
            //登录成功
            location = '/project/ec/index.html';
        } else {
            //登录失败
            alert('登录失败');
        }
    })
})