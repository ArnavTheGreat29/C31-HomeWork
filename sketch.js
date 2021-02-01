
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(300, 600);


	engine = Engine.create();
	world = engine.world;

	drop = new Drop(random(0,300),0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drop.display()
  

  drawSprites();
 
}



