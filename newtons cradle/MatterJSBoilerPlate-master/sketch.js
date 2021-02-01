
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(200,100,1300,50)
  bob1=new Bob(200,500,50,50)
  bob2=new Bob(300,500,50,50)
  bob3=new Bob(400,500,50,50)
  bob4=new Bob(500,500,50,50)
  bob5=new Bob(600,500,50,50)
 rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0)
 rope2=new Rope(bobObject2.body,roofObject.body,bobDiameter*2,0)
 rope3=new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0)
 rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0)
 rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0)
 
 
 Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

 // drawSprites();
 
}



