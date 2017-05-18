/**
 * Created by lenovo on 2017/4/26.
 */
var tu=document.querySelectorAll(".lunbo_banner1 li");
var box=document.querySelector(".bs-example");
var pre=document.querySelector(".banner_hua_left");
var next=document.querySelector(".banner_hua_right");
var btns=document.querySelectorAll(".carousel-indicators li");
console.log(btns);
var num=0;
var t=setInterval(move,3000);
var flag=true;
var z=10;
function move() {
    tu[num].classList.add("leftOut");
    btns[num].classList.remove("active");
    num++;
    if(num==tu.length){
        num=0;
    }
    btns[num].classList.add("active");
    tu[num].classList.add("leftIn");
    tu[num].style.zIndex=z++;
    flag=true;
}

//    btn.forEach(function (e) {
//
//    });
box.onmouseover=function () {
    clearInterval(t);
};
box.onmouseout=function () {
    t=setInterval(move,3000);
};
btns.forEach(function (e,i11) {
    e.onclick=function () {

        if(num==i11){
            return;
        }
        if(num<i11){
            tu[num].classList.add("leftOut");
            tu[i11].classList.add("leftIn");
            flag=false;
        }else{
            tu[num].classList.add("rightOut");
            tu[i11].classList.add("rightIn");
            flag=false;
        }
        console.log(tu[i11]);
        btns[num].classList.remove("active");
        e.classList.add("active");
        tu[i11].style.zIndex=z++;
        num=i11;

    }
});
tu.forEach(function (tu) {
    tu.addEventListener("animationend", function () {
        tu.className="";
        flag=true;
    })
});
next.onclick=function () {
    if(flag){
        move();
        flag=false;
    }
};
pre.onclick=function () {
    if(flag){
        tu[num].classList.add("rightOut");
        btns[num].classList.remove("active");
        num--;
        if(num==-1){
            num=tu.length-1;
        }
        tu[num].classList.add("rightIn");
        btns[num].classList.add("active");
        tu[num].style.zIndex=z++;
        flag=false;
    }
};
