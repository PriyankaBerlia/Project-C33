class plinko{
    constructor(x,y,r){
        var options = {
            restitution : 0.8,
            density : 0.5,
            isStatic : true
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
        this.r = r;
    }

    display(){
        push();
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}