window.onload = function () {

    function priceSearch(){
        $('.visible').on('mouseover',function(){
            $('.phone_list_ul').css({
               overflow:'visible',

            })
            $('.visible').css({
                background:'white',
                'box-shadow':' 5px 5px 5px #888888'
            })
        }).on('mouseout',function(){
            $('.phone_list_ul').css({
                overflow:'hidden'
            })
            $('.visible').css({
                'background':'none',
                'box-shadow':' none'
            })
        })
    };
    priceSearch();
    $(function () {
        var min_height = 850;
        $(window).scroll(function () {
            var s = $(window).scrollTop();
            if (s > min_height) {
                if (s > min_height) {
                    $('#logo-search-bar').css({
                            display: `block`
                        }
                    )
                }
            } else if (s < min_height) {
                if (s < min_height) {
                    $('#logo-search-bar').css({
                            display: `none`
                        }
                    )
                }
            }
        })
    })
    $('.return_top').click(function(){
        $(window).scrollTop(0);
    });

    $('.list_all_left').on('click','li',function(){
        var id = $(this).children('#allList').text();
        location = './src/html/details.html?productId='+id;
    });

    $('.list_all_right').on('click','li',function(){
        var id = $(this).children('#allRight').text();
        location = './src/html/details.html?productId='+id;
    });
}
