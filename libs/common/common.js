var baseLink = "http://192.168.2.98:8080/bjex-front"
var user_id = ''; //ID
var mycode = ''; //邀请码
var user_tel = ''; //电话 邮箱都是用这一个
var account = ''; //账号

$(function () {
    //监听屏幕滚动的高度 执行动画
    $(window).scroll(function (event) {
        var winPos = $(window).scrollTop();

        //顶部信息栏变色
        var topBox = $(".navbar-top").height();
        console.log('顶部信息变色'+topBox+"----"+winPos);
        
        if (winPos >= topBox) {
            console.log(topBox);

            $('.navbar-top').addClass('navbar_fadein').removeClass('navbar_fadeout')
        } else {
            $('.navbar-top').addClass('navbar_fadeout').removeClass('navbar_fadein')
        }
    });

    // 国旗显示隐藏
    $('.national-mouse').on('mouseenter', function () {
        $('.up-down').stop().addClass('to_up');
        $('.national').stop().slideDown();

    }).on('mouseleave', function () {
        $('.up-down').stop().removeClass('to_up');
        $('.national').stop().slideUp();
    });


    // 个人中心下拉框显示隐藏
    $('.accont_numb').on('mouseenter', function () {
        console.log('0000000000000000');

        $('.personal_list').stop().slideDown();


    }).on('mouseleave', function () {
        $('.personal_list').stop().slideUp();

    })
})