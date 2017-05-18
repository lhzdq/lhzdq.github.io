/**
 * Created by lenovo on 2017/4/21.
 */
var banner_daohang=document.querySelectorAll(".banner_daohang");
var bannerdianjichu=document.querySelectorAll(".bannerdianjichu");
bannerdianjichu.forEach(function (ele6,ind) {
    ele6.onmouseover=function () {
        banner_daohang[ind].style.display="block"
    };
    ele6.onmouseout=function () {
        banner_daohang[ind].style.display="none";
    };
})

