// var baseLink = "http://192.168.2.189:8083/bjex-front" // 
var baseLink = "http://192.168.2.99:8081/bjex-front" //wanghaowen 
var USER_ID = ''; //ID
var MYCODE = ''; //邀请码
var USER_TEL = ''; //电话 邮箱都是用这一个
var ACCOUNT = ''; //账号
var LNG;

// USER_ID =localStorage.getItem("user_id");
LNG=localStorage.getItem("language");
$(function() {
    // i18next初始化
    i18n.init({

        // resGetPath: 'locales/__lng__/__ns__.json',
        lng: localStorage.getItem("language") | "en"
    }, function(t) {

        $('html').i18n();

    });
    $('#en, #zh').click(function() {
        window.localStorage.setItem("language", $(this).prop('id'));
        i18n.init({
            resGetPath: 'locales/__lng__/__ns__.json',
            lng: $(this).prop('id'),
        }, function(t) {

            $('html').i18n();
            location.reload(false); //切换语言后直接刷新页面
        });
    });

    //顶部信息栏变色
    $(window).scroll(function(event) {
        var winPos = $(window).scrollTop();


        var topBox = $(".navbar-top").height();
        // console.log('顶部信息变色' + topBox + "----" + winPos);

        if (winPos >= topBox) {
            // console.log(topBox);

            $('.navbar-top').addClass('navbar_fadein').removeClass('navbar_fadeout')
        } else {
            $('.navbar-top').addClass('navbar_fadeout').removeClass('navbar_fadein')
        }
    });

    // 国旗显示隐藏
    $('.national-mouse').on('mouseenter', function() {
        $('.up-down').stop().addClass('to_up');
        $('.national').stop().slideDown();

    }).on('mouseleave', function() {
        $('.up-down').stop().removeClass('to_up');
        $('.national').stop().slideUp();
    })

    //显示哪种国旗
    var lg = window.localStorage.getItem('language');
    if (lg == null) {
        $("#showNational").attr("src", "./imgs/china.png");
        $("#zh").hide();
        console.log("#zh");

    } else if (lg == "zh") {
        $("#showNational").attr("src", "./imgs/china.png");
        $("#zh").hide();
    } else if (lg == "en") {
        $("#showNational").attr("src", "./imgs/amrc.png");
        $("#en").hide();
    }

    // 个人中心下拉框显示隐藏
    $('.accont_numb').on('mouseenter', function() {
            // console.log('0000000000000000');

            $('.personal_list').stop().slideDown();


        }).on('mouseleave', function() {
            $('.personal_list').stop().slideUp();

        })
        // 消息中心 列表显示隐藏
    $('#messageCenter').on('mouseenter', function() {
            $('#messageCenterBox').stop().slideDown();
        }).on('mouseleave', function() {

            $('#messageCenterBox').stop().slideUp();
        })
        // console.log(localStorage.getItem("user_id"))
    if (localStorage.getItem("user_id") != undefined) {
        $(".accont_numb .text a").text(localStorage.getItem("account*"))
        $(".toolBar .login").hide()
        $(".personal_center").show()
    }
    $(".personal_list li:last-child a").click(function() {
        console.log(localStorage.length)
        localStorage.clear()
        console.log(localStorage.length)
        logout()
    })
})

function logout() {
    $.ajax({
        type: "POST",
        url: baseLink + "/user/logout.action",
        dataType: 'json',
        data: '',
        success: function(data) {
            console.log(data);
            layer.msg(data.msg)
            setTimeout(function() {
                    window.location.href = "index.html"
                }, 500)
                // if (data.retcode == 10000) {
                //     layer.msg(data.msg)
                //     setTimeout(function() {
                //         window.location.href = "verified.html"
                //     }, 1000)
                // } else {
                //     layer.msg(data.msg)
                // }
        }
    });
}