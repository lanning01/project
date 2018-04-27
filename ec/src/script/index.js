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
    function animation(el, properties, callback) {
        clearInterval(el.phgap_id);
        el.phgap_id = setInterval(function () {

            var isAllFinished = true;
            for (var property in properties) {
                var target = properties[property];
                var current;
                if (property === 'opacity') {
                    current = Math.round(100 * parseFloat(getStyle(el, property)));
                } else {
                    current = parseInt(getStyle(el, property));
                }


                if (target !== current) {
                    isAllFinished = false;
                }

                //步进
                var speed = (target - current) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if (property === 'opacity') {
                    el.style[property] = (current + speed) / 100;
                } else {
                    el.style[property] = current + speed + 'px';
                }

            }

            if (isAllFinished) {
                clearInterval(el.phgap_id);
                //TODO:动画结束后，要执行的操作
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }, 20);
    }
    function getStyle(el, property) {
        //该函数返回一个对象，包含了元素的所有css属性，
        // 其key为属性名，value为属性值
        if (window.getComputedStyle) {
            return window.getComputedStyle(el)[property]
        } else {
            return el.currentStyle[property]
        }
    }
    function lunBo () {
        let index = 0;
        let items = document.querySelectorAll('.list .item');
        let id;
        let isStopped = false;

        function slideTo(idx) {
            for (var i = 0; i < items.length; i++) {
//                items[i].style.opacity = 0;
                animation(items[i], {
                    opacity: 0
                })
            }
            if (idx === items.length) {
                index = idx = 0;
            }

            if (idx === -1) {
                index = idx = items.length - 1;
            }
//            items[idx].style.opacity = 1;

            document.querySelector('.focus').className = 'bullet';
            document.querySelectorAll('.bullet')[idx].className = 'bullet focus';

            animation(items[idx], {
                opacity: 100
            }, function () {
                if (isStopped === false) {
                    autoPlay();
                }
            })

        }

        function slideNext() {
            index++;
            slideTo(index);
        }

        function slidePrev() {
            index--;
            slideTo(index)
        }

        function autoPlay() {
            clearInterval(id);
            id = setInterval(slideNext, 2000);
        }

        function stop() {
            clearInterval(id);
        }

        function init() {
            document.querySelector('.next').onclick = function () {
                isStopped = false;
                slideNext();
            }

            document.querySelector('.prev').onclick = function () {
                isStopped = false;
                slidePrev();
            }

            document.querySelector('.slider').onmouseover = function () {
                isStopped = true;
                stop();
            }
            document.querySelector('.slider').onmouseout = function () {
                isStopped = false;
                autoPlay();
            }

            var bullets = document.querySelectorAll('.bullet');
            for (let i = 0; i < bullets.length; i++) {
                bullets[i].onclick = function () {
                    isStopped = false;
                    index = i;
                    slideTo(index);
                }
            }
            autoPlay();
        }

        init();
    };
    lunBo();
}
