$('button').click(function () {

    $.post('/project/ec/api/register.php', {
        user: $('#user').val(),
        pw: $('#pw').val(),
        tel: $('#phone').val(),
        email: $('#email').val(),
        address: $('#address').val()
    }, function (resp) {
        if(resp.ret) {
            //注册成功
            location = '/project/ec/src/html/login.html';
        } else {
            //注册失败
            alert('注册失败');
        }
    })
});




// $('button').click(function () {
//     $.ajax({
//         type: 'post',
//         url: '/project/ec/api/register.php',
//         data: {
//             user: $('#user').val(),
//             pw: $('#pw').val(),
//             tel: $('#phone').val()
//         },
//         success: function (resp) {
//             if (resp.ret) {
//                 //注册成功
//             } else {
//                 //注册失败
//                 alert('注册失败');
//             }
//
//         },
//         error: function (xhr) {
//
//         }
//     })
// });
