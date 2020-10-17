
const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var bob;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();


	world = engine.world;

	//Create the Bodies Here.

	bob = createSprite(850,850,20,20)

	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);

  background(0);

  bob.shapeColor = "red"
  
  drawSprites();
}



