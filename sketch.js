var helicopterImage, helicopterSprite, packageSprite,packageImage;
var packageBody,ground
var redBox1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterImage = loadImage("helicopter.png")
	packageImage = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImage);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImage);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	redBox1 = createSprite(400, 665, 200, 20);
	redBox1.shapeColor = color(rgb(255,0,0))

	redBox2 = createSprite(300, 615, 20, 120);
	redBox2.shapeColor = color(rgb(255,0,0));

	redBox3 = createSprite(500, 615, 20, 120);
	redBox3.shapeColor = color(rgb(255,0,0));

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200, 5, {restitution:0.75, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//redBox1 = Bodies.rectangle(width/2, 600, 200, 20, {isStatic:true});
	//redBox1.shapeColor = color(255);
	//World.add(world, redBox1);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y
  console.log(redBox1.position.y)

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, isStatic = false)
  }
}



