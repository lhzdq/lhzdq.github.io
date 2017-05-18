// $(".bn-imgs li").each(function (i,v) {
//
// });
var tt=$(".bn-imgs li");
//console.log(tt);
var t=setInterval(move,3000);
var num=0;
function move() {
    num++;
    if(num==2){
        num=0;
    }
    for(var i=0;i<$(".bn-imgs li").length;i++){
        tt[i].style.opacity="0";
        tt[i].style.zIndex=2;
        tt[i].style.transition="all 1s";
    }
    tt[num].style.opacity="1";
    tt[num].style.zIndex=1;
    tt[num].style.transition="all 1s";
}
$(".app-block-over").each(function (i,v) {
    console.log(i,v);
    $(".app-block-over").mousemove(function () {
        $(this).css("opacity",1)

    })
    $(".app-block-over").mouseout(function () {
        $(this).css("opacity",0)

    })

});