window.onload=function () {
    var mxtoprightleft=document.querySelector(".mx-topright-left");
    var mxtoprightright=document.querySelector(".mx-topright-right");
    var mxbottom11=document.querySelector(".mxbottom11");
    var num1=0;
    var s=setInterval(move1,3000);
    function move1() {
        if(num1==0){
            mxbottom11.style.transition="all 1s"
        }
        num1++;
        mxbottom11.style.marginLeft =-1226*num1+"px";
        mxtoprightleft.style.color="#000";
        mxtoprightright.style.color="#e0e0e0";
        if(num1==2){
            mxbottom11.style.marginLeft=0+"px";
            mxtoprightright.style.color="#000";
            mxtoprightleft.style.color="#e0e0e0";
            num1=0;
        }
    }
    var flag2=true;
    mxtoprightright.onclick=function () {
        if(flag2) {
            // mxbottom11.style.marginLeft=0;
            flag2=false;
            num1 = 0;
            move1();
            mxtoprightleft.style.color = "#000";
            mxtoprightright.style.color = "#e0e0e0";
        }
        flag2=true
    };
    mxtoprightleft.onclick=function () {
       // mxbottom11.style.marginLeft=-1226+"px";
        if(flag2) {
            flag2=false;
            num1 = 1;
            move1();
            mxtoprightright.style.color = "#000";
            mxtoprightleft.style.color = "#e0e0e0";
        }
        flag2=true
    };
    mxtoprightleft.onmouseover=function () {
            mxtoprightleft.style.color = "red";
            
    };
    mxtoprightright.onmouseout=function () {

        if (num1 == 0) {
            mxtoprightright.style.color = "#000";
        }
        if (num1 == 2) {
            mxtoprightright.style.color = "#e0e0e0";
        }
    };
    mxtoprightright.onmouseover=function () {
        mxtoprightright.style.color = "red";

    }
    mxtoprightleft.onmouseout=function () {

        if (num1 == 2) {
            mxtoprightleft.style.color = "#000";
        }
        if (num1 == 0) {
            mxtoprightleft.style.color = "#e0e0e0";
        }
    };
    $(".mx-topright").mouseover(function () {
        clearInterval(s)
    })
    $(".mx-topright").mouseout(function () {
        s=setInterval(move1,3000);
    })

}
