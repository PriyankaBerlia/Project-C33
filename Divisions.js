class divisions{
    constructor(x,y,w,h){
        var options = {
            restitution : 0.8,
            density : 0.5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.w = w;
        this.h = h;
    }

    display(){
        push();
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}