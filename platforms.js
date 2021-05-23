class platform{
    constructor(x, y, w, h){
        var options={
            isStatic=true,
            'density':0.5,

        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.h=height;
        this.w=width;
        
        World.add(this.body, world);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos);
        rectMode(CENTER);
        rect(0,0, 300, 10);
        pop();
    }
}