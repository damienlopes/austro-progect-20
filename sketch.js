var astros
var sleep, gym, eat, brush, drink, bath

function preload () {
  sleep = loadAnimation("sleep.png")
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  brush = loadAnimation("brush.png")
  drink = loadAnimation("drink1.png", "drink2.png")
  bath = loadAnimation("bath1.png", "bath2.png")
}
function setup() {
  createCanvas(800,400);
  astros = createSprite(400, 200, 50, 50);
  astros.addAnimation("sleepi", sleep)
  

  astros.scale = 0.1

}

function draw() {
  background("black"); 
   if(keyDown(RIGHT_ARROW)){
    astros.addAnimation("gymi", gym)
    astros.changeAnimation("gymi")
   }
   if(keyDown(LEFT_ARROW)){
    astros.addAnimation("bath", bath)
    astros.changeAnimation("bath")
   }
   if(keyDown(UP_ARROW)){
    astros.addAnimation("eat", eat)
    astros.changeAnimation("eat")
   }
   if(keyDown(DOWN_ARROW)){
    astros.addAnimation("drink", drink)
    astros.changeAnimation("drink")
   }
   if(keyDown("w")){
    astros.addAnimation("brush", brush)
    astros.changeAnimation("brush")
   }
  drawSprites();
}