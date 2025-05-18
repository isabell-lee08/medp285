function setup() {
    createCanvas(470, 320);
    colorMode(RGB);
    angleMode(DEGREES);
    describe('Two eyes that follow the cursor.');
  }
  


  function draw() {
    background(255,0,0,0);
    
    //face
    fill(15, 15, 15);
    strokeWeight(0);
    stroke(0);
    curve(50, 800, 90, 200, 320, 200, 300, 900);
    fill(15, 15, 15);
    strokeWeight(0);
    stroke(0);
    curve(50, -400, 90, 200, 320, 200, 300, -500);
    fill(10, 10, 10);
    strokeWeight(0);
    stroke(0);
    curve(10, 600, 75, 200, 325, 200, 390, 700);
    fill(10, 10, 10);
    strokeWeight(0);
    stroke(0);
    curve(10, -200, 75, 200, 325, 200, 390, -300);
    fill(10, 10, 10);
    strokeWeight(0);
    stroke(0);
    quad(310, 190, 370, 150, 370, 250, 310, 210);
    
    
      // Draw left eye

  let leftX = 150;
  let leftY = 180;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  strokeWeight(0);
  stroke(0);
  fill(255);
  ellipse(0, 0, 20, 20);
  rotate(leftAngle);
  fill(10, 10, 10);
  ellipse(10, 0, 15, 15);
  pop();

  // Draw right eye

  let rightX = 150;
  let rightY = 220;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  strokeWeight(0);
  stroke(0);
  fill(255);
  ellipse(0, 0, 20, 20);
  rotate(rightAngle);
  fill(10, 10, 10);
  ellipse(10, 0, 15, 15);
  pop();
    
  }