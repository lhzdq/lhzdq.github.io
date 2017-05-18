//banner
(function () {
    var btns = document.querySelectorAll(".banner-main .lunbodian li");
    var cons = document.querySelectorAll(".banner-kuang li");
    var container = document.querySelector(".banner-main");
    var bannext = document.querySelector(".banner-next");
    var banprev = document.querySelector(".banner-prev");
    var obj = btns[0];
    var newcons = cons[0];
    var to;
    Array.from(btns).forEach(function (ele, index) {
        ele.onmouseover = function () {
            to = setTimeout(function () {
                num = index;
                obj.style.background = "#fff";
                newcons.style.opacity = 0;
                newcons.style.zIndex = 1;
                btns[index].style.background = "#db192a";
                cons[index].style.zIndex = "2";
                cons[index].style.opacity = 1;
                obj = btns[index];
                newcons = cons[index];
            }, 200)
        }
    })
    var num = 0;
    var t = setInterval(move, 2000);

    function move() {
        num++;
        if (num == btns.length) {
            num = 0;
        }
        if (num == -1) {
            num = btns.length - 1;
        }
        obj.style.background = "#fff";
        newcons.style.opacity = 0;
        newcons.style.zIndex = 1;
        btns[num].style.background = "#db192a";
        cons[num].style.zIndex = "2";
        cons[num].style.opacity = 1;
        obj = btns[num];
        newcons = cons[num];
    }

    container.onmouseover = function () {
        clearInterval(t);
    }
    container.onmouseout = function () {
        t = setInterval(move, 2000);
    }
    bannext.onclick = function () {
        move();
    }
    banprev.onclick = function () {
        num -= 2;
        move();
    }
})()

//秒杀
/*

    var move=document.querySelectorAll(".miaosha-pic a img");
    var yiru=document.querySelectorAll(".miaosha-pic a");
    console.log(move,yiru)
    yiru.onmouseover=function () {
        move.style.transform="translateY(-5px)";
    }
*/


//右导航
var cto;
$(".tab,.foot-tab").each(function (index,ele) {
    $(this).hover(function () {
        clearTimeout(cto);
        cto=setTimeout(function () {
            $(".tab-text").eq(index).css({left:-60,background:"#c81623"});
            $(".tab-icon").eq(index).css({backgroundColor:"#c81623"});
        },200)

    },function () {
        clearTimeout(cto);
        $(".tab-text").eq(index).css({left:35,background:""});
        $(".tab-icon").eq(index).css({backgroundColor:""});
    })
})
$(".foot-tab.top").click(function () {
    $("body,html").animate({scrollTop:0},500,"linear");
})

//顶部导航
$(window).scroll(function () {
    var st=$(window).scrollTop();
    if(st>$(".miaosha").offset().top){
        $(".topbar").css("top",0);
    }else{
        $(".topbar").css("top",-50);
    }
})

//左边导航
var to;
$(window).scroll(function () {
    var st=$(window).scrollTop();
    if(st>$(".pinzhi").offset().top){
        $(".leftbar").css("opacity",1);
    }else{
        $(".leftbar").css("opacity",0);
    }
    clearTimeout(to);
    console.log(1);
    to=setTimeout(function () {
        $(".floor").each(function (index,ele) {
            if(st>=$(ele).offset().top){
                console.log($(ele).offset().top)
                $(".left-item").eq(index).addClass("left-item-on").siblings().removeClass("left-item-on");
            }
        })
    },200)
})

$(".left-item").each(function (index,ele) {
    $(this).click(function () {
        var toptop=$(".floor").eq(index).offset().top;
        $("body,html").animate({scrollTop:toptop},500)
    }).hover(function () {
        $(this).css("background","#d70b1c")
    },function () {
        $(this).css("background","");
    })
})
$(".left-item1 .totop").click(function () {
    $("body,html").animate({scrollTop:0},500,"linear");
})