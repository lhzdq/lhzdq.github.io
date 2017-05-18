var cons = document.querySelectorAll(".banner-xia-top-left1 li");
var btns = document.querySelectorAll(".banner-xia-left-bottom li");
var container = document.querySelector(".banner-xia-top-left");
var container3=document.querySelector(".banner-xia-top-left1");
var divs=document.querySelectorAll(".list1");
var bannerxiazhezhao=document.querySelectorAll(".banner-xia-zhezhao");
var masks=document.querySelectorAll(".list1-zhezhao");
var cons1=document.querySelectorAll(".banner-bottom-main .banner--1 li");
var btns1=document.querySelectorAll(".banner-bottom-main .lunbo li");
var container1 = document.querySelector(".banner-bottom");
var bofangbutton=document.querySelectorAll(".bofang-button");
var bannerxialeftbottomul=document.querySelector(".banner-xia-left-bottom-ul");
var bannerzuojiantou = document.querySelector(".banner-xia-zuojiantou");
var banneryoujiantou=document.querySelector(".banner-xia-youjiantou");
var bannerxialeftbottom1bofang=document.querySelectorAll(".banner-xia-left-bottom1-bofang");
var bannertopright2=document.querySelectorAll(".banner-top-right2");
var bannertoprightmaotou=document.querySelectorAll("#banner-top-right-maotou");
var bannergonggao=document.querySelector(".banner-gonggaoda");
var colorArr=["#E8E8E8","#E8E8E8","#E8E8E8","#D5F4E3"];
// var divs=document.querySelectorAll(".list2");
// var masks=document.querySelectorAll(".list1-zhezhao");
Array.from(bannertopright2).forEach(function(dian,shu){
    dian.onmouseover=function(){
        for(var r3=0;r3<bannertopright2.length;r3++){
            bannertoprightmaotou[r3].style.top=0+"px";
            bannertoprightmaotou[r3].style.opacity=0;
        }
        bannertoprightmaotou[shu].style.top=-13+"px";
        bannertoprightmaotou[shu].style.opacity=1;
    }
    dian.onmouseout=function(){
        bannertoprightmaotou[shu].style.top=0+"px";
        bannertoprightmaotou[shu].style.opacity=0;
    }
});//banner上猫头
Array.from(btns).forEach(function (ele, index) {
    ele.onmouseover = function () {
        num = index;
        for (var r = 0; r < btns.length; r++) {
            btns[r].style.color = "#000";
            cons[r].style.display = "none";
            bannerxiazhezhao[r].style.opacity=0;
            bannerxialeftbottom1bofang[r].style.opacity=0;
            bannerxialeftbottom1bofang[r].style.animation="none";
        }
        btns[index].style.color = "red";//or this.style.color="red";
        cons[index].style.display = "block";
        bannerxialeftbottom1bofang[index].style.opacity=1;
        bannerxiazhezhao[index].style.opacity=0.3;
        bannerxialeftbottom1bofang[index].style.animation="suofang1 .7s linear forwards";console.log(index);
    }
});
var num = 0;
var t1 = setInterval(move, 2000);
function move() {
    num++;
    if (num == btns.length) {
        num = 0;
        bannerxialeftbottomul.style.marginLeft=0+"px";
        //bannerxialeftbottom1bofang[0].style.animation="suofang1 .7s linear forwards";
    }
    if(num==3){
        bannerxialeftbottomul.style.marginLeft=-488+"px";
        //bannerxialeftbottom1bofang[3].style.animation="suofang1 .7s linear forwards";
    }
    for (var r = 0; r < btns.length; r++) {
        btns[r].style.color = "#000";
        cons[r].style.display = "none";
        bannerxiazhezhao[r].style.opacity=0;
        bannerxialeftbottom1bofang[r].style.opacity=0;
        bannerxialeftbottom1bofang[r].style.animation="none"

    }
        btns[num].style.color = "red";  //不能用this
        cons[num].style.display = "block";
        bannerxiazhezhao[num].style.opacity = 0.3;
        bannerxialeftbottom1bofang[num].style.opacity = 1;
        bannerxialeftbottom1bofang[num].style.animation = "suofang1 .7s linear forwards";
        console.log(num)
}
var num3=0;
setInterval(function () {
    if(num3==0){
        bannergonggao.style.transition="all 1s";
    }
        num3++;
        bannergonggao.style.marginTop = -50 * num3 + "px";
    if(num3==3){
        bannergonggao.style.marginTop=0;
        num3=0;
    }

},3000);
/*bannergonggao.addEventListener("transitionend",function () {
    if(num3==4){
        bannergonggao.style.transition="none";
        bannergonggao.style.marginTop=0;
        num3=0;
    }
})*/
container.onmouseover = function () {
    clearInterval(t1);
};
container.onmouseout = function () {
    t1 = setInterval(move, 2000);
}
banneryoujiantou.onclick=function(){
    bannerxialeftbottomul.style.marginLeft=-488+"px"
};
bannerzuojiantou.onclick=function(){
    bannerxialeftbottomul.style.marginLeft=0+"px"
};

Array.from(divs).forEach(function (v,i) {
    v.onmouseover=function () {
        //alert(i);
        masks[i].style.opacity=.8;

    }
    v.onmouseout=function () {
        //alert(i);
        masks[i].style.opacity=0;
    }
})
/* Array.from(bannerxiazhezhao).forEach(function (v1,i1) {
 v1.onmouseover=function () {
 //alert(i);
 btns[i1].style.opacity=.5;
 bannerxialeftbottom1bofang[i1].style.display="block";
 }
 v1.onmouseout=function () {
 //alert(i);
 btns[i1].style.opacity=1;
 bannerxialeftbottom1bofang[i1].style.display="none";

 }
 })*/
Array.from(btns1).forEach(function (ele1, index1) {
    ele1.onmouseover = function () {
        num1 = index1;
        for (var r1 = 0; r1< btns1.length; r1++) {
            btns1[r1].style.background = "#a2a2a2";
            cons1[r1].style.zIndex =1;
            cons1[r1].style.opacity =0;
            cons1[r1].style.display ="none";
            bofangbutton[r1].style.animation="none"

        }
        btns1[index1].style.background = "#b94343";
        cons1[index1].style.zIndex =2;
        cons1[index1].style.opacity =1;
        bofangbutton[index1].style.animation="suofang .7s linear forwards";
        cons1[index1].style.display ="block";
        container1.style.background=colorArr[index1];
    }
});
var num1 = 0;
var t2 = setInterval(move1, 2000);
function move1() {
    num1++;
    if (num1 == btns1.length) {
        num1 = 0;
    }
    for (var r1 = 0; r1 < btns1.length; r1++) {
        btns1[r1].style.background = "#a2a2a2";
        cons1[r1].style.zIndex =1;
        cons1[r1].style.opacity =0;
        cons1[r1].style.display ="none";
    }
    btns1[num1].style.background = "#b94343";
    cons1[num1].style.zIndex =2;
    cons1[num1].style.opacity =1;
    cons1[num1].style.display ="block";
    container1.style.background=colorArr[num1];
}
container1.onmouseover = function () {
    clearInterval(t2);
};
container1.onmouseout = function () {
    t2 = setInterval(move1, 2000);
}