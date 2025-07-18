// Define array to hold snowflake objects
let snowflakes = [];

function setup() {
  createCanvas(400, 600);
  
  angleMode(DEGREES);

  // Create snowflake objects
  for (let i = 0; i < 300; i++) {
    // Add a new snowflake object to the array
    snowflakes.push(new Snowflake());
  }

  // Create screen reader accessible description
  describe('Snowflakes falling on a black background.');
}

function draw() {

  background(255, 9);
  
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
    this.size = random(0, 25);
    this.radius = sqrt(random(pow(width/5, 2)));
    this.color = color(random(150, 256), random(100, 256), random(230, 256));
  }

  update(time) {
    // Define angular speed (degrees / second)
    let angularSpeed = 35;

    // Calculate the current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size snowflakes fall at different y speeds
    let ySpeed = 15 / this.size;
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