const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine,myWorld;
var particle;
var plinko1 = [];
var division1 = [];
var ground;
var score=0;
var num=0;

function setup(){
    createCanvas(480,700);

    ellipseMode(RADIUS);
    rectMode(CENTER);
    
    myEngine = Engine.create();
    myWorld = myEngine.world;

   // particle = new Particles(240,10,6);

    for (var i = 30; i<480; i = i + 30){
        for(var j = 50; j< 350; j = j +50){
            plinko1.push(new plinko(i,j,6));
        }
    }

    for(var j = 0; j< 480; j = j +80){
        division1.push(new divisions(j,600,5,200));
    }

    ground = new divisions(240,694,480,10);

}

function draw(){
    background(0);
    textSize(20);
    text("Score: "+score,20,20);

    text(500, 20,500);
    text(400, 100,500);
    text(300, 180,500);
    text(200, 260,500);
    text(100, 340,500);
    text(50, 420,500);

    Engine.update(myEngine);

    if(particle!=null){
        particle.display();

        if(particle.body.position.y>680){
            if(particle.body.position.x<80){
                score=score+500;
                particle = null;
            }
            else if(particle.body.position.x<160 && particle.body.position.x>80){
                score=score+400;
                particle = null;
            }
            else if(particle.body.position.x<240 && particle.body.position.x>160){
                score=score+300;
                particle = null;
            }
            else if(particle.body.position.x<320 && particle.body.position.x>240){
                score=score+200;
                particle = null;
            }
            else if(particle.body.position.x<400 && particle.body.position.x>320){
                score=score+100;
                particle = null;
            }
            else if(particle.body.position.x<480 && particle.body.position.x>400){
                score=score+50;
                particle = null;
            }
        }
    }   

    //particle.display();

    for (var i = 0; i<plinko1.length; i = i + 1){
            plinko1[i].display();
    }

    for (var i = 0; i<division1.length; i = i + 1){
        division1[i].display();
    }

    ground.display();
    
}

function keyPressed(){
    if(keyCode===32){
        particle = new Particles(mouseX,10,6);
    }
}