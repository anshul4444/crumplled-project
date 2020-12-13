const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1,rec2,rec3,paper,ground,circle1,paper1

function setup() {
	createCanvas(800, 700);

    var options = {
		isStatic:true
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rec1 = Bodies.rectangle(600,690,300,10,options)
	World.add(world,rec1);

	rec2 = Bodies.rectangle(450,690,10,100,options)
	World.add(world,rec2);

	rec3 = Bodies.rectangle(750,690,10,100,options)
	World.add(world,rec3);

	ground = Bodies.rectangle(10,700,1600,10,options);
	World.add(world,ground);
	
	ball1 = new ball(120,100,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  fill("green");
  rect(rec1.position.x,rec1.position.y,300,10);
  rect(rec2.position.x,rec2.position.y,10,100);
  rect(rec3.position.x,rec3.position.y,10,100);

  ball1.display();

  rect(ground.position.x,ground.position.y,1600,10);
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:80,y:-85});

	}
}
