/**
 * Created by lenovo on 2017/5/6.
 */
class Draw {
    constructor(cobj, option) {
        this.cobj = cobj;
        this.color = option.color;
        this.width = option.width;
        this.style = option.style;
    }
    init() {//初始化
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox, oy, mx-ox, my-oy);
        this.cobj[this.style]();

    }
    line(ox, oy, mx, my) {
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox, oy);
        this.cobj.lineTo(mx, my);
        this.cobj.stroke();
    }
    circle(ox, oy, mx, my){ //内切圆
        this.init();
        this.cobj.beginPath();
/*        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);*/
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        this.cobj.arc(ox+(ox<mx?r:-r),oy+(oy<my?r:-r),r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    circle1(ox, oy, mx, my){//外接圆
        this.init();
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2)) / 2;
        this.cobj.arc(ox + (mx - ox) / 2, oy + (my - oy) / 2, r, 0, 2 * Math.PI);
        this.cobj[this.style]();
    }
    circle2(ox, oy, mx, my){//中心圆
        this.init();
        this.cobj.beginPath();
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2));
        this.cobj.arc(ox,oy, r, 0, 2 * Math.PI);
        this.cobj[this.style]();
    }
    poly(ox,oy,mx,my,sd){
        this.init();
        this.cobj.save();
        cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        var angle=Math.PI/sd;
        var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2));
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(var i=0;i<sd;i++){
            this.cobj.lineTo(x,-y);
            this.cobj.rotate(-angle*2)
        }
        this.cobj[this.style]();
        this.cobj.restore()
    }
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    eraser(ox,oy,mx,my){
        
        this.cobj.clearRect(mx,my,10,10);
    }

}