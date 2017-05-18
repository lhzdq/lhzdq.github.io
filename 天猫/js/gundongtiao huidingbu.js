/**
 * Created by lenovo on 2017/4/19.
 */
var xianshidaohan=document.querySelector(".xianshidaohan");
var leftnav=document.querySelector(".left-nav");
var floor111=document.querySelectorAll(".floor111");
var leftnav_11=document.querySelectorAll(".left-nav .left-nav_11 .left-nav_111");
var rightnav111=document.querySelectorAll(".right-nav111");
var rightnavtu_111=document.querySelectorAll(".right-nav-tu_111");
var rightnavtu7=document.querySelector(".right-nav-tu7");
var rightnavtu7er=document.querySelector(".right-nav-tu7er");
var daohangxiala=document.querySelectorAll(".daohang_xiala");
var daohanlixiala=document.querySelectorAll(".daohang_xiala .daohanli_xiala");
var right_nav1111=document.querySelector(".right-nav-tu8");
var huidaodingbu=document.querySelector(".huidaodingbu");
var header_shouji=document.querySelector(".header_shouji");
var headershouji=document.querySelector(".header-shouji");
headershouji.onmouseover=function () {
    header_shouji.style.display="block";
};
headershouji.onmouseout=function () {
    header_shouji.style.display="none";
};
console.log(daohanlixiala);
Array.from(daohangxiala).forEach(function (e,in2) {
    e.onmouseover=function () {
        daohanlixiala[in2].style.display="block";
        daohanlixiala[in2].style.borderTop="0px";
        daohangxiala[in2].style.background="#fff";
        daohangxiala[in2].style.color="#C53F3F";

    };
    e.onmouseout=function () {
        daohanlixiala[in2].style.display="none";
        daohangxiala[in2].style.background="#f2f2f2";
        daohangxiala[in2].style.color="#999";
        daohanlixiala[in2].style.borderTop=".5px solid #ccc";

    }
});
rightnavtu7.onmouseover=function () {
    rightnavtu7er.style.display="block"
};
rightnavtu7.onmouseout=function () {
    rightnavtu7er.style.display="none"
}
Array.from(rightnav111).forEach(function (ele4,index4) {
    var r4;
    ele4.onmouseover = function () {
        clearTimeout(r4);
        r4 = setTimeout(function () {
            rightnavtu_111[index4].classList.add("show1")
        }, 200)
    };
    ele4.onmouseout = function () {
        clearTimeout(r4);
        if (rightnavtu_111[index4].classList.contains("show1")) {
            rightnavtu_111[index4].classList.remove("show1");
            rightnavtu_111[index4].classList.add("chu1");
        }
    };
});
Array.from(rightnavtu_111).forEach(function (ele5) {
    ele5.addEventListener("animationend",function () {
        if(ele5.classList.contains("chu1")){
            ele5.classList.remove("chu1")
        }
    })
});
window.onscroll=function () {
    var obj=document.body;
    var ab=obj.scrollTop;
    var ac=obj.scrollTop;
    if(ab>700){
        xianshidaohan.style.top=0;
        right_nav1111.style.opacity=1;
    }else {
        xianshidaohan.style.top=-50+"px";
        right_nav1111.style.opacity=0;
    }
    if(ac>708){
        leftnav.style.width=36+"px";
        leftnav.style.height=332+"px";
    }else {
        leftnav.style.height=0;
        leftnav.style.width=0;
    }
};
Array.from(leftnav_11).forEach(function (ele3,index3) {
    ele3.onclick=function () {
        var top=floor111[index3].offsetTop;
        animate(document.body,{scrollTop:top})
    }
});
right_nav1111.onclick=function () {
    animate(document.body,{scrollTop:0},200)
};
huidaodingbu.onclick=function () {
    animate(document.body,{scrollTop:0},200)
};