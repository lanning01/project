$('button').click(function () {
    var user = $('#user').val();
    var password = $('#pw').val();
    var tel = $('#phone').val();
    var email = $('#email').val();
    var addr =$('#address').val();

        if(user.length === 0){
        $('#main .form .label .hint1').html('用户名不能为空')
        }
        for(var i = 0; i<user.length; i++){
            var use = user.charCodeAt(i);
            if(!((use>=48 && use<=57) || (use>=65 && use<=90) || (use>=97 && use<=122) || (use===95))){
                $('#main .form .label .hint1').html('用户名输入错误');
                return ;
            }else if(!(user.length>=3 && user.length<=10)){
                $('#main .form .label .hint1').html('用户名长度不低于3位，不高于10位');
                 return ;
            }else{

            }
        }
    var index = password.charCodeAt(0);
        if(index>=48 && index<=57){
            $('#main .form .label .hint2').html('密码不能以数字开头');
            return ;
        }else if(!(password.length>=6 && password.length<=20)){
            $('#main .form .label .hint2').html('密码长度不低于6，不高于20');
            return ;
        }else{

        }
    var passW = $('#pass').val();
        if(password !== passW){
            $('#main .form .label .hint3').html('密码不一致');
            return ;
        }
        if(tel.length !== 11){
            $('#main .form .label .hint4').html('手机号码长度不为11位');
            return ;
        }
        for(var j = 0; j< tel.length;j++){
            var iphone = tel.charCodeAt(j);

            if(!(iphone>=48 && iphone<=57)){
                $('#main .form .label .hint4').html('手机号码不是数字');
                return ;
            }
        }
        if(email.indexOf('@') === -1){
            $('#main .form .label .hint5').html('邮箱格式不正确');
        return ;
        }

         if(addr.length === 0){
        $('#main .form .label .hint6').html('地址不能为空');
        return ;
        }
    $.post('/project/ec/api/register.php', {
        user: $('#user').val(),
        pw: $('#pw').val(),
        tel: $('#phone').val(),
        email: $('#email').val(),
        address: $('#address').val()
    }, function (resp) {
        console.log(resp.ret);
        if(resp.ret) {
            //注册成功
            alert('注册成功,请去登录');
            location = '/project/ec/src/html/login.html';
        } else {
            //注册失败
            alert('注册失败,请查看所填信息');
        }
    })
});
