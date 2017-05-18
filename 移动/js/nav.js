/**
 * Created by lenovo on 2017/4/26.
 */
var menus = document.querySelectorAll(".dropdown-menu");
var nav = document.querySelectorAll(".navbar-collapse .dropdown11");
var erweima = document.querySelector(".dropdown1");
var menus1 = document.querySelector(".dropdown1 .dropdown-menu");
var row=document.querySelectorAll(".row li");
var left11=document.querySelector(".qhbtn .left");
var right11=document.querySelector(".qhbtn .right");
console.log(row);
// var dropdown1
console.log(nav);
console.log(menus);
nav.forEach(function (nav, v) {
    console.log(v);
    nav.onmouseover = function () {
        menus[v + 1].style.display = "block";
    };
    nav.onmouseout = function () {
        menus[v + 1].style.display = "none";
    }
});
erweima.onmouseover = function () {
    menus1.style.display = "block";

};
erweima.onmouseout = function () {
    menus1.style.display = "none";
};
var zxzx = document.querySelectorAll(".zxzx");
zxzx.forEach(function (e) {
    e.onmouseover = function () {
        this.style.left = -80 + "px";

    };
    e.onmouseout = function () {
        this.style.left = "";
    }
});
var num33=0;
row.forEach(function (f,q) {
    right11.onclick=function () {
        row[f].style.marginLeft=479.19+"px";
    }
});