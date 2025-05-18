// Define array to hold snowflake objects
let snowflakes = [];
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position (0,0);
  canvas.style('z-index','-1')
  
  angleMode(DEGREES);

  // Create snowflake objects
  for (let i = 0; i < 300; i++) {
    // Add a new snowflake object to the array
    snowflakes.push(new Snowflake());
  }

  // Create screen reader accessible description
  describe('Marine snow falling on a black background.');
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {

  background(0, 230);
  
  // Update and display each snowflake in the array
  let currentTime = frameCount / 60;

  for (let flake of snowflakes) {
    // Update each snowflake position and display
    flake.update(currentTime);
    flake.display();
  }
}

// Define the snowflake class

class Snowflake {
  constructor() {
    this.posX = 0;
    this.posY = random(0, height);
    this.initialAngle = random(0, 360);
    this.size = random(0, 5);
    this.radius = sqrt(random(pow(windowWidth, 2)));
    this.color = color(255, 255, 255);
  }

  update(time) {
    // Define angular speed (degrees / second)
    let angularSpeed = 2;

    // Calculate the current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size snowflakes fall at different y speeds
    let ySpeed = 6 / this.size;
    this.posY += ySpeed;

    // When snowflake reaches the bottom, move it to the top
    if (this.posY > height) {
      this.posY = -50;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}