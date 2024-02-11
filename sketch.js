
var theta;
var rad;
var ani_fac;
var angle;
var str;

var angleInput;
var strokeInput;
function setup() {
  createCanvas(windowWidth, windowHeight);
  theta = 0;
  rad = 100;
  ani_fac = 0.001;
  angle = PI/2;
  str = 40;

  angleInput = document.getElementById("angle");
  strokeInput = document.getElementById("stroke");
  angleInput.oninput = function() { angle = radians(angleInput.value)}
  strokeInput.oninput = function() { str = strokeInput.value}

}

function draw() {
  background('rgb(244, 97, 151)');
  
  stroke('rgba(255, 253, 247,0.2)');
  strokeWeight(str)
  noFill();
  for(var i = 0; i < 8 ; i++) {
    push()
  translate(width/2, height/2)
  // point(0,0)
  // arc(0, 0, 80,80,0, 5*PI/6)
  translate(rad*cos(i*PI/4), rad*sin(i*PI/4))
  // point(0,0)

  translate(-rad*cos(theta + i*PI/4), -rad*sin(theta + i*PI/4))
  // point(0,0)
  arc(0, 0, 2*rad,2*rad,theta + i*PI/4, theta + i*PI/4 + angle)
  pop()
  }
  theta += ani_fac
  
}