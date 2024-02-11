
var theta;
var rad;
var ani_fac;
var angle;
var str;
var clr;

var angleInput;
var strokeInput;
var radInput;
var clrInput;
function setup() {
  createCanvas(windowWidth, windowHeight);
  theta = 0;
  rad = 100;
  ani_fac = 0.001;
  angle = PI/2;
  str = 40;
  clr = "#f46197"

  angleInput = document.getElementById("angle");
  strokeInput = document.getElementById("stroke");
  radInput = document.getElementById("rad");
  clrInput = document.getElementById("bck-color");
  angleInput.oninput = function() { angle = radians(angleInput.value)}
  strokeInput.oninput = function() { str = strokeInput.value}
  radInput.oninput = function() { rad = radInput.value}
  clrInput.oninput = function() { clr = clrInput.value; document.body.style.background = clr;}

}

function draw() {
  background(String(clr));
  
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

