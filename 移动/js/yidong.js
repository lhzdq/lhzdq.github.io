/**
 * Created by lenovo on 2017/4/26.
 */
var yidong=document.querySelector(".yidong");
var yhcx=document.querySelector(".yhcx");
var yhnext=document.querySelector(".yhnext");
var yhpre=document.querySelector(".yhpre");
var num1=4;
    var t1=setInterval(move1,2000);
    function move1() {
    // if(num1==4||num1==6){  去掉判断是因为手点的时候和自动轮播不一样 到了12张往回点的时候就没有过度
        yidong.style.transition="all 1s";
    // }
    num1++;
    yidong.style.marginLeft=-295*num1+"px";
    // if(marginLeft<-4720+"px"){
    //     yidong.style.marginLeft=0+"px";
    // }
}
    yidong.addEventListener("transitionend",function () {
        if(num1==12){
            yidong.style.transition="none";
            num1=4;
            yidong.style.marginLeft=-295*num1+"px";

        }else if(num1==0){
            yidong.style.transition="none";
            num1=8;
            yidong.style.marginLeft=-295*num1+"px";
        }
        flag=true
    });
    var flag=true;
yhpre.onclick=function () {
    if(flag){
        flag=false;
        move1();
    }
};
yhnext.onclick=function () {
    if(flag){
        flag=false;
        num1-=2;
        move1()
    }
};
yhcx.onmouseover=function () {
    clearInterval(t1);
};
yhcx.onmouseout=function () {
    t1=setInterval(move1,2000)
};