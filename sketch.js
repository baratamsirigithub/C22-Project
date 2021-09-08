const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body

  var options={
    isStatic : true
  };

  playerBase = Bodies.rectangle(200,350,180,150, options);
  World.add(playerBase,world);
  //create player body
  playerBody = Bodies.rectangle(250, playerBase.y -160, 50, 180);
  World.add(playerBody, world);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, 50,180);
  //show the playerbase image using image() function
  image(baseimage, playerBase.position.y, playerBase.position.x, 180, 150)

  Engine.update(engine);
  
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
