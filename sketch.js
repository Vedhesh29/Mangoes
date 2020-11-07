
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var ground, tree, boyImage, boy, stone, mango1,mango2,mango3,mango4, chain; 


function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,695,width,9);
	tree = new Tree(650, 450, 300, 400); 
  boy = createSprite(150,600,50,50);
  boy.scale=0.1;
  boy.addImage(boyImage); 
  stone = new Stone(mouseX,mouseY,50,50);
  mango1 = new Mango(600,400,40,40);
  mango2 = new Mango(650,380,40,40);
  mango3 = new Mango(700,400,40,40);
  mango4 = new Mango(650,320,40,40);

  chain = new Chain(stone.body, {x:300, y:550});
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);


  
  drawSprites();
  stone.display();
  ground.display(); 
  tree.display();
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  chain.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY}); 
}

//function mouseReleased(){
  //chain.fly(); 
//}

