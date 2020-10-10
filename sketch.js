const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block4, block5, block5, block6;
var block7, block8, block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22, block23,block24, block25;
var hexagon, slingShot, hexagonImg;
var ground1, ground2;
var pinkImg, bluerectImg, greenImg;


function preload() {
  hexagonImg = loadImage("hexagon.png");
pinkImg=loadImage("pink.jpg");
bluerectImg=loadImage("blue rect.jpg")
greenImg=loadImage("green.jpg")
}

function setup(){
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
    ground1 = new Ground(630,700,470, 20);
    ground2 = new Ground(800,300,350, 20);

    block1 = new Block(450,660,60, 80);
    block2 = new Block(510,660,60, 80);
    block3=new Block(570,660,60, 80)
    block4 = new Block(630,660,60, 80);
    block5 = new Block(690,660,60, 80);
    block6=new Block(750,660,60, 80)
    block7 = new Block(810,660,60, 80);

    block8 = new Block2(570,580,60, 80);
    block9=new Block2(630,580,60,80)
    block10=new Block2(690,580,60, 80);
    block11 = new Block2(750,580,60,80);
    block12 = new Block2(510,580,60, 80);

    block13=new Block3(630,500,60, 80)
    block14 = new Block3(690,500,60, 80);
    block15 = new Block3(570,500,60,80);

    block16=new Block4(630,420,60, 80)



    block17 = new Block2(680,250,60, 80);
    block18 = new Block2(740,250,60, 80);
    block19=new Block2(800,250,60, 80)
    block20 = new Block2(860,250,60, 80);
    block21 = new Block2(920,250,60, 80);

    block22=new Block(740,170,60, 80)
    block23 = new Block(800,170,60,80);
    block24 = new Block(860,170,60, 80);

    block25=new Block4(800,90,60, 80);
    
   

    hexagon = new Hexagon(400,600, 100, 100);

  
    slingShot = new SlingShot(hexagon.body,{x:250, y:350});

    
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(2);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    

    ground1.display();
    ground2.display();
    

    

    
    hexagon.display();
   
   
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingShot.fly();
}
function keyPressed(){
  if(keyCode===32) {
      slingShot.attach(hexagon.body);
  }
  }