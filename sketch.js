
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let fan;
let ground;
let block1, block2;
let plane;
let rotator1, rotator2, rotator3;
let ball;
let angle = 60;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	
	var ball_options = {
		restitution: 0.95,
		frictionAir: 0.01
	}
	var ground_options = {
		isStatic: true
	}
	

	//Crie os Corpos aqui.
    ground = Bodies.rectangle(400,697,800,20,ground_options);
	World.add(world, ground);

    ball = Bodies.circle(400,-40,20,ball_options);
	World.add(world, ball);

	block1 = Bodies.rectangle(150,500,100,20,ground_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(650,500,100,50,ground_options);
	World.add(world, block2);

	fan = Bodies.rectangle (400,400,200,20,ground_options);
	World.add(world,fan);
  
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("indigo");
  Engine.update(engine);
  

  fill("DarkOrange");
  ellipse(ball.position.x,ball.position.y,25);
  
  fill("firebrick");
  rect(ground.position.x,ground.position.y,800,10);

  fill("gold");
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  Matter.Body.rotate(fan, angle);
  push();
  translate(fan.position.x,fan.position.y);
  rotate(angle);
  rect(0,0,200,9);
  pop();
  angle += 40;
  
  drawSprites();
 
}



