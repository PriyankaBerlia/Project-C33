class Particles{
    constructor(x,y,r){
        var options = {
            restitution : 0.2,
            density : 1
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(myWorld,this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.r = r;
    }

    display(){
        push();
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}