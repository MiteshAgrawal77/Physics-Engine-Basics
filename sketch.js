const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine

var myengine, myworld
var ball, ball_options
var ground, ground_options

function setup() {
  createCanvas(800,400);
  myengine = Engine.create()
  myworld = myengine.world
  ball_options = {
    
    restitution:0.8
  }
  ball = Bodies.circle(400,200,20,ball_options)
  console.log(ball)
  World.add(myworld, ball)
  //Engine.run()
  ground_options = {
    isStatic: true,
    friction:1
  }
  ground = Bodies.rectangle(385,380,400,5,ground_options)
  World.add(myworld, ground)
 
}

function draw() {
  Engine.update(myengine)
  background(255,255,255);
  //push() will save the settings

  push()
  fill("blue")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  pop()
  //it will remove the recent settings and restore to the push() point

  //ellipse(400,200,20*2,20*2)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,400,5)
}