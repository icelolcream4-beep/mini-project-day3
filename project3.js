function setup() {
  createCanvas(1200, 1200);
  background(100);
}
x=0
y=0
z=0
function draw() {
  if (keyIsDown(32) === true) {
      noStroke()
      fill(x,y,z)
      circle(mouseX,mouseY,50)
}

}

function mousePressed(){
  background(200)
}
function keyPressed() {
  if (key === 'r') {
    x = random(0,225)
    y = random(0,225)
    z = random(0,225)
}}
