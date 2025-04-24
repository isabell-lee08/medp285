/*
 * @name Wavemaker
 * @arialabel Water like waves of neon green lines moving in circular patterns. The user’s mouse can change the direction of the current in the waves
 * @description This illustrates how waves (like water waves) emerge
 * from particles oscillating in place. Move your mouse to direct the wave.
 * Contributed by Aatish Bhatia, inspired by <a href="https://beesandbombs.tumblr.com/post/45513650541/orbiters">Orbiters</a> by Dave Whyte.
 */

let t = 0; // time variable
let circleHue = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 100);
}

function draw() {
  background(0, 5); // translucent background (creates trails)
  
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);
      
      // each particle moves in a circle
      const myX = x + 10 * cos(2 * PI * t + angle);
      const myY = y + 10 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 20); // draw particle
    }
  }
  fill(circleHue, 80, 90);
  
    if (t) {
    // Increase hue by 1
    circleHue = circleHue + 1;
  }
  
  if (circleHue >= 360) {
    // Reset hue to 0
    circleHue = 0;
  }

  t = t + 0.005; // update time
}
