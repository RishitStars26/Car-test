var car,wall;
var speed,wieght;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90)
  wieght = random(400,1500)
  //car
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  //wall
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("Black");  

//coision and color change
if(wall.x - car.x <(car.width + wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * wieght * speed * speed/22500;
  if(deformation = 180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100){
    car.shapeColor = color(230,230,0);
  }
  if(deformation < 180){
    car.shapeColor = color(0,255,0);
  }
}
drawSprites();
}