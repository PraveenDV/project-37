/*const Engine=Matter.Engine();
const Bodies=Matter.Bodies();
const World=Matter.World();
*/

var player,playerImg,ground,invisibleGround, wall, stone, platGrp;
var engine,world;

var gameState;

function preload(){
 playerImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
 "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  stoneImg=loadImage("stone.png");
 bananaimg=loadImage("banana.png");
 wallImg=loadImage("laser2.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-100);
  //engine=Engine.create();
  //world=engine.world();

 player=createSprite(displayWidth-1000,displayHeight-165, 50, 50);
 player.addAnimation("run", playerImg);
 player.scale=0.2;
 player.setCollider("circle", -4,60,200);
 platGrp=createGroup();
 groundgrp=createGroup();
 bananaGrp=createGroup();

 //ground=createSprite(displayWidth-600, displayHeight-100, displayWidth, 10);
// ground.setCollider("rectangle", )

 console.log(displayWidth, displayHeight);

 wall=createSprite(displayWidth-1350, 300, 10, 2000);
 wall.setCollider('rectangle', 0,0, 60, 500);
 wall.addImage(wallImg);
 wall.scale=1.5;
 
 gameState="Start";

 ground=createSprite(player.x+400, displayHeight-100, displayWidth*2, 10);

  //Engine=engine.run();
}
  

function draw() {
  background(0);  
  //wall.debug=true;

  camera.position.x=player.x+200; 
  camera.position.y=player.y-250;

  //ground.velocityX=-4;

  console.log(player.x);

  wallSpeed=Math.round(frameRate());

  fill("yellow");
  textSize(30);
  text("press 'Enter' to play", 500, 500);
  textSize(25);
  text("avoid the stones and don't let the laser touch you", 500, 530);

if(keyDown('enter')){
  gameState="play";
}

if(gameState==="play"){

  //player.debug=true;

 wall.velocityX=(6+3*wallSpeed/100);

 player.velocityY= player.velocityY+0.8;

 if(keyDown('space')&& player.y>=550){
  player.velocityY=-15;
}

 
ground.x=player.x+400;

spawnstones();
 /*if(keyIsDown(LEFT_ARROW)){
  player.x-=5;
 }*/

 if(keyIsDown(RIGHT_ARROW)){
  player.x+=7;
  
 }



}

for(var i=0;i<platGrp.length; i++){

if(platGrp.get(i).isTouching(player) || wall.isTouching(player)){
gameState="end";
}}

if(gameState==="end"){
  fill("red");
  strokeWeight(5);
  stroke("green");
  textSize(30);
  text("Game over!", player.x,  300);

  wall.destroy();
  //platGrp.destroy();
  player.destroy();
}



  
//console.log(frameCount);

 
 //spawnBananas();
 
 player.collide(platGrp);
 player.collide(ground);

  drawSprites();
}

function spawnstones(){
 /* for(i=200;i<=frameCount;i+=400){
    stone=createSprite(i, random(displayHeight-50, displayHeight-250), 200, 10);
    
  }*/
  
  if(frameCount%120===0){
    stone=createSprite(player.x+800, 580,10, 10);
    stone.setCollider("circle", 0, 80, 250);
   // stone.debug=true;
    stone.lifeTime=50;
    stone.addImage(stoneImg);
    stone.scale=0.2;
    platGrp.add(stone);
  }
}

/*function spawnBananas(){
  for(var i=player.x+790;i<=850;i+=5){
    banana=createSprite(i, random(displayHeight-145, displayHeight-195), 5, 5 );
    banana.addImage(bananaimg);
    banana.scale=0.09;
    banana.lifeTime=90;
    bananaGrp.add(banana);
   banana.debug=true;
  }
}*/