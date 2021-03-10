const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1, block2, block3, hexagon, block5, block6, block7, block8, block9, block10;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (400,350,200,15);
    baseGround = new Ground (300,595,600,20);

    block1 = new Block (350,330,50,50);
    block2 = new Block (350,280,50,50);
    block3 = new Block (350,230,50,50);
    hexagon = new Hexagon (100,350,70,70);
    block5 = new Block (400,260,50,50);
    block6 = new Block (450,320,50,50);
    block7 = new Block (450,260,50,50);
    block8 = new Block (450,290,50,50);
    block9 = new Block (400,290,50,50);
    block10 = new Block (400,320,50,50);  
}

function draw(){
    background(58,47,46);
    Engine.update(engine);   

    ground.display();
    baseGround.display();

    block1.display();
    block2.display();
    block3.display();
    hexagon.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
}