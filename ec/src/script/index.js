


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
        window.open('./src/html/details.html?productId='+id);
    });

    $('.list_all_right').on('click','li',function(){
        var id = $(this).children('#allRight').text();
        window.open('./src/html/details.html?productId='+id);
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
    function bannerLunBo () {
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
    bannerLunBo();

    function teamBuy() {
        let index = 0;
        let list = document.querySelector('.team-buying-three');
        let liWidth = list.children[0].offsetWidth;

        let slider1 = document.querySelector('.team-buying-three .item1:first-of-type');
        let slider2 = document.querySelector('.team-buying-three .item1:nth-of-type(2)');
        let slider3 = document.querySelector('.team-buying-three .item1:nth-of-type(3)');
        let slider7 = document.querySelector('.team-buying-three .item1:nth-of-type(7)');
        let slider8 = document.querySelector('.team-buying-three .item1:nth-of-type(8)');
        let slider9 = document.querySelector('.team-buying-three .item1:nth-of-type(9)');

        let slider1_cloned = slider1.cloneNode(true);
        let slider2_cloned = slider2.cloneNode(true);
        let slider3_cloned = slider3.cloneNode(true);
        let slider7_cloned = slider7.cloneNode(true);
        let slider8_cloned = slider8.cloneNode(true);
        let slider9_cloned = slider9.cloneNode(true);

        list.appendChild(slider1_cloned);
        list.appendChild(slider2_cloned);
        list.appendChild(slider3_cloned);
        list.insertBefore(slider7_cloned, slider1);
        list.insertBefore(slider8_cloned, slider1);
        list.insertBefore(slider9_cloned, slider1);


        list.style.width = liWidth * list.childElementCount + 'px';
        list.style.left = -3 * liWidth * index + 'px';
        let id;


        function slideTo(idx) {
//            console.log(idx);
            if (idx >= list.childElementCount) {
                list.style.left = -liWidth + 'px';
                index = idx = 3;
            }


            if (idx <= -1) {
                list.style.left = (list.childElementCount - 3) * -liWidth + 'px';
                index = idx = list.childElementCount - 9;
            }

            var left = idx * liWidth;
            // console.log("IDX"+idx)

            // var focusIndex = idx - 1;
            // if (list.childElementCount - 1 === idx) {
            //     focusIndex = 0;
            // }
            // if (idx === 0) {
            //     focusIndex = document.querySelectorAll('.bullet').length - 1;
            // }
            // document.querySelector('.focus').className = 'bullet';

            // document.querySelectorAll('.bullet')[focusIndex].className = 'bullet focus';
            animation(list, {
                left: -1 * left
            })
        }

        function slideNext() {
            index+=3;
            slideTo(index);
        }

        function slidePrev() {
            index-=3;
            slideTo(index);
        }

        function init() {
            document.querySelector('.next1').onclick = function () {
                slideNext();
            }

            document.querySelector('.prev1').onclick = function () {
                slidePrev();
            }

            document.querySelector('.team-buying-bottom').onmouseover = function () {
                stop();
            }

            document.querySelector('.team-buying-bottom').onmouseout = function () {
                autoPlay();
            }

            //监听子弹点击事件
            // let bullets = document.querySelectorAll('.bullet');
            // for (let i = 0; i < bullets.length; i++) {
            //     bullets[i].onclick = function () {
            //         index = i;
            //         slideTo(index);
            //     }
            // }

            autoPlay();
        }

        function autoPlay() {
            id = setInterval(slideNext, 2500);
        }

        function stop() {
            clearInterval(id)
        }

        init();

    };
    teamBuy();
    function teamChoose(x,y){
        $(x).hover(function () {
            $(y).show().stop().animate({height:"173px"});
        }, function () {
            $(y).stop().animate({height:"0px"});
        });
    }
    teamChoose(".team-one",".one-black");
    teamChoose(".team-two",".two-black");
    teamChoose(".team-three",".three-black");
    teamChoose(".team-four",".four-black");
    teamChoose(".team-five",".five-black");
    teamChoose(".team-six",".six-black");
    teamChoose(".team-seven",".seven-black");
    teamChoose(".team-eight",".eight-black");
    teamChoose(".team-nine",".nine-black");
    $('.team-buying-bottom').on('mouseover',function(){
        $('.btn1').show();
    }).on('mouseout',function(){
        $('.btn1').hide();
    })
}
