function setup() {
    createCanvas(400, 400);
    colorMode(RGB);
    angleMode(DEGREES);
    describe('Two eyes that follow the cursor.');
  }
  
  function draw() {
    background(246, 230, 232);
    
    //face
    fill(0);
    strokeWeight(2);
    stroke(10);
    curve(10, 600, 75, 200, 325, 200, 390, 600);
    fill(0);
    strokeWeight(2);
    stroke(10);
    curve(10, -200, 75, 200, 325, 200, 390, -200);
    
    //ears
    triangle(100, 100, 90, 200, 160, 180);
    triangle(300, 100, 310, 200, 240, 180);
    
    fill(255);
    strokeWeight(0);
    stroke(0);
    curve(100, 390, 120, 200, 180, 200, 200, 390);
    fill(255);
    strokeWeight(0);
    stroke(0);
    curve(100, 10, 120, 200, 180, 200, 200, 10);
    // Draw left eye
  
    let leftX = 150;
    let leftY = 200;
  
    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
    push();
    translate(leftX, leftY);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
    
    fill(255);
    strokeWeight(0);
    stroke(0);
    curve(200, 390, 220, 200, 280, 200, 300, 390);
    fill(255);
    strokeWeight(0);
    stroke(0);
    curve(200, 10, 220, 200, 280, 200, 300, 10);
    // Draw right eye
  
    let rightX = 250;
    let rightY = 200;
  
    // Calculate angle between right eye and angle
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
    push();
    translate(rightX, rightY);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
    
    //pointer
    let x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 50;
    dx = mouseX;
    dy = mouseY;
    angle1 = atan2(dy, dx);
    x = mouseX;
    y = mouseY;
    fill(255, 0, 0);
    ellipse(x, y, 20, 20);
  
  }