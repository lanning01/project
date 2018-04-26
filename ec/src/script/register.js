$('button').click(function () {
    $.ajax({
        type: 'post',
        url: '/project/ec/api/register.php',
        data: {
            user: $('#user').val(),
            pw: $('#pw').val(),
            tel: $('#phone').val(),
        },
        success: function (resp) {
            if (resp.ret) {
                //注册成功
            } else {
                //注册失败
                alert('注册失败');
            }

        },
        error: function (xhr) {

        }
    })
});
