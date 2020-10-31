//Create variables here
var dog, dogImg1,happyDog, database, foodS, foodStock;
var database;
var PressUP_ARROWKeytofeedDragoMilk;

function preload()
{
  //load images here
  dogImg1=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {

  database= firebase.database();
    console.log("database");

  createCanvas(500,500);
  
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg1);
  dog.scale=0.15;
  //dog.addImage(happyDog);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  
  //add styles here
  fill("yellow");
  stroke("black");
  text("Food remaining : "+foodS,200,170);
  textSize(13);
  
  textSize(20);
  fill("blue");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })

}



