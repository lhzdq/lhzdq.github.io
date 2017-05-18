window.onload=function () {
   var lis = document.querySelectorAll(".list1>li");
   var seclists = document.querySelectorAll(".seclists");
   var weix=document.querySelector(".weix");
   var weixintutu=document.querySelector(".weixintutu");
   var buy=document.querySelector(".buy");
   var arr = [];
   buy.onmouseover=function () {
     buy 
   };
   Array.from(seclists).forEach(function (ab) {//ab 是每个lis容器
      var lis1 = ab.querySelectorAll("li");
      var heigth = lis1.length * 30 - 20 + "px";
      arr.push(heigth);
   });
   /*Array.from(seclists).map(function (r) {
    var le=r.querySelectorAll("li");
    return le.length*30-20;
    console.log(le);
    });*/
   Array.from(lis).forEach(function (li, index1) {
      li.onmouseover = function () {
         seclists[index1].style.height = arr[index1];
      };
      li.onmouseout = function () {
         seclists[index1].style.height =0;
      }
   });
   weix.onmouseover=function () {
      weixintutu.style.display="block";
   };
   weix.onmouseout=function () {
      weixintutu.style.display="none";
   }
}//