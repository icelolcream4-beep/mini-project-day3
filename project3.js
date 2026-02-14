function setup() {
  createCanvas(400, 400);
  x = 0
  background(100);
}

function draw() {
  
  noStroke()
  circle(mouseX,mouseY,100)
}

function mousePressed(){
  background(200)
}