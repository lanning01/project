window.onload = function () {
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
        url: '/project/ec/api/products_details.php?',
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

            allButtonNone();
            picChange();
            bigPic();
            buttonChange('.details_info .color span');
            buttonChange('.details_info .memory span');
            memMoney();
            countSum();
            provinceChange();
            cartBuy();
        },
        error: function (xhr) {

        }

    })

    function cartBuy() {
        $('.button3').on('click', 'div', function () {
            alert(qwe);
            var id = $(this).children('#cart_buy').text();
            location = './src/html/shopping.html?productId=' + id;
        });


    }

    function bigPic() {
        $('.details_pic .small')
            .mouseover(function () {
                //alert('dffsfsdfdfdfdfsfsdfds');
                $('.mask, .big').show();
            })
            .mouseout(function () {
                $('.mask, .big').hide();
            })
            .mousemove(function (evt) {
                var left = evt.pageX - $('.mask').width() / 2,
                    top = evt.pageY - $('.mask').height() / 2;

                left = left - $('.small').offset().left;
                top = top - $('.small').offset().top;
                if (left < 0) {
                    left = 0;
                }
                if (left > $('.small').width() - $('.mask').width()) {
                    left = $('.small').width() - $('.mask').width();
                }
                if (top < 0) {
                    top = 0;
                }

                if (top > $('.small').height() - $('.mask').height()) {
                    top = $('.small').height() - $('.mask').height();
                }

                $('.mask').css({
                    left: left,
                    top: top
                })

                var bigLeft = -left * 3, bigTop = -top * 3;
                $('.big img').css({
                    left: `${bigLeft}px`,
                    top: `${bigTop}px`
                })
            })
    }

    function picChange() {
        var imgs = document.querySelectorAll('.imgFive img');
        var imgarr = [];
        for (let i = 0; i < imgs.length; i++) {
            imgarr.push(imgs[i].src)

            imgs[i].onclick = function () {
                //alert('dfdfdf');
                var imgSmall = document.querySelector('.small img');
                var imgBig = document.querySelector('.big img');

                //alert(imgarr[i]);
                imgSmall.src = imgarr[i];
                imgBig.src = imgarr[i];
            }
        }
    }

    function provinceChange() {
        $('.province button').click(function () {
            $('.provinceChoose').show();
            $('.provinceChoose li').click(function () {
                $('.province button').html($(this).text() + '&nbsp;&nbsp;<i>▼</i>');
                // alert($(this).text());
                $('.provinceChoose').hide();
            })
        });
    }

    function allButtonNone() {
        /*
                alert($(".allButton span").length)
        */
        // $(".allButton span").eq(4).parent().remove()
        // console.log($(".allButton span").eq(4).html() === '<i></i>')
        // console.log($(".allButton span").eq(4).html())
        for (var i = 0; i < $(".allButton span").length; i++) {


            if ($(".allButton span").eq(i).html() === '<i></i>') {


                $(".allButton span").eq(i).parent().remove();
                i--;

            }
        }
        /*
        */
        // console.log($('.allButton span').html());
        /* $(".allButton span:empty").css({
             display:'none'
         });*/


    }

    // function buttonChange() {
    //     $('.details_info .color span').click(function () {
    //         $('.details_info .color span').removeClass('red');
    //         $(this).addClass('red');
    //     })
    // }
    // buttonChange();
    function buttonChange(x) {
        $(x).click(function () {
            $(x).removeClass('red');
            $(this).addClass('red');
        })
    }


    function liChange() {
        var $allProduct = $('.allProducts');
        $allProduct.hide();
        $allProduct.eq(0).show();
        var $idx;
        $('.details_details li').click(function () {
            //alert('dfghjk');
            $('.details_details li').removeClass('selected');
            $(this).addClass('selected');
            $idx = $(this).index();
            $allProduct.hide();
            $allProduct.eq($idx).show();
        })
    }

    liChange();

    function memMoney() {
        var $idx;

        $('.memory div').click(function () {
            $idx = $(this).index();
            $('.price_before').html(parseInt(price) + 1600 * $idx);
            var nepr = parseInt(price) + 1500 * $idx;
            $('.pricenow').text(nepr);

        })
    }

    function countSum() {
        $('.count').each(function () {
            var _this = $(this);
            var add = $(_this).find(".add");//添加数量
            var reduce = $(_this).find(".reduce");//减少数量
            var num = 1;//数量初始值
            var num_txt = $(_this).find(".countNum");//接受数量的文本框
            $(add).click(function () {
                num = $(num_txt).val();
                num++;
                num_txt.val(num);
                //ajax代码可以放这里传递到数据库实时改变总价
            });
            /*减少数量的方法*/
            $(reduce).click(function () {
                //如果文本框的值大于0才执行减去方法
                num = $(num_txt).val();
                if (num > 0) {
                    //并且当文本框的值为1的时候，减去后文本框直接清空值，不显示0
                    if (num == 1) {
                        num--;
                        num_txt.val("1");
                    }
                    //否则就执行减减方法
                    else {
                        num--;
                        num_txt.val(num);
                    }

                }
            });
        })
    }


    $(function () {
        var min_height = 931;
        $(window).scroll(function () {
            var s = $(window).scrollTop();
            if (s > min_height) {
                if (s > min_height) {
                    $('.details_top_bar').css({
                            display: 'block'
                        }
                    )
                }
            } else if (s < min_height) {
                if (s < min_height) {
                    $('.details_top_bar').css({
                            display: 'none'
                        }
                    )
                }
            }
        })
    })
    $('.return_top').click(function () {
        $(window).scrollTop(0);
    });

}