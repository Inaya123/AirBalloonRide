

var bg;
var balloon;
function preload(){
bg = loadImage("Hot Air Ballon-01.png")
hbi = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")

}
function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  var locnode = database.ref("balloon/position")
  locnode.on("value", readop,showerror)

  bgi = createSprite(600, 200, 100, 100);
  bgi . addImage( bg)
  // bgi.scale = 0.3



  balloon = createSprite(100, 300, 50, 50);
  balloon.addAnimation("colorful" ,hbi)
  balloon.scale = 0.32

}

function draw() {
  background(0);  

if (keyDown(UP_ARROW)){
  balloon.scale=0.25
  writePosition(0,-1);
}
if (keyDown(RIGHT_ARROW)){
  writePosition(1,0);
  }
  if (keyDown(LEFT_ARROW)){
    writePosition(-1,0);
    }
    if (keyDown(DOWN_ARROW)){
      writePosition(0,+1);
      }
drawSprites();
}

function readop(data){
  position=data.val();
  balloon.x= position.x;
  balloon.y= position.y;
  
  }
  
  
  function showerror(){
  console.log("error")
  
  }
  function writePosition(x,y){
    database.ref("balloon/position").set({
        x: balloon.x + x,
        y: balloon.y + y
    })}