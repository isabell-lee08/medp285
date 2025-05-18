let boids = [];
let isAligned = false;
let SQUARE_SIZE = 5;
let NUM_BOIDS = 225; // Change this number to control the number of boids
let gridRotation = 0;

class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(2, 4));
        this.acc = createVector();
        this.maxSpeed = 5;
        this.maxForce = 0.2;
        this.gridPos = createVector(0, 0);
        this.rotation = 0;
    }

    flock(boids) {
        if (!isAligned) {
            let mouse = createVector(mouseX, mouseY);
            let attraction = this.attract(mouse);
            let separation = this.separate(boids);

            attraction.mult(0.5);
            separation.mult(1.5);

            this.acc.add(attraction);
            this.acc.add(separation);
        } else {
            let targetAngle = gridRotation;
            let target = createVector(
                mouseX + this.gridPos.x * cos(targetAngle) - this.gridPos.y * sin(targetAngle),
                mouseY + this.gridPos.x * sin(targetAngle) + this.gridPos.y * cos(targetAngle)
            );
            let arrive = this.arrive(target);
            arrive.mult(1.0);
            this.acc.add(arrive);

            let rotDiff = targetAngle - this.rotation;
            this.rotation += rotDiff * 0.1;
        }
    }

    attract(target) {
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        let speed = this.maxSpeed;
        if (d < 100) {
            speed = map(d, 0, 100, 0, this.maxSpeed);
        }
        desired.setMag(speed);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        return steer;
    }

    arrive(target) {
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        let speed = this.maxSpeed;
        if (d < 100) {
            speed = map(d, 0, 100, 0, this.maxSpeed);
        }
        desired.setMag(speed);
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        return steer;
    }

    separate(boids) {
        let desiredSeparation = SQUARE_SIZE * 2;
        let sum = createVector();
        let count = 0;

        for (let other of boids) {
            let d = p5.Vector.dist(this.pos, other.pos);
            if (d > 0 && d < desiredSeparation) {
                let diff = p5.Vector.sub(this.pos, other.pos);
                diff.normalize();
                diff.div(d);
                sum.add(diff);
                count++;
            }
        }

        if (count > 0) {
            sum.div(count);
            sum.setMag(this.maxSpeed);
            let steer = p5.Vector.sub(sum, this.vel);
            steer.limit(this.maxForce);
            return steer;
        }
        return createVector();
    }

    setGridPosition(col, row) {
        let gridSize = ceil(sqrt(NUM_BOIDS));
        this.gridPos.x = (col - gridSize / 2) * SQUARE_SIZE;
        this.gridPos.y = (row - gridSize / 2) * SQUARE_SIZE;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);

        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.y < 0) this.pos.y = height;
        if (this.pos.y > height) this.pos.y = 0;

        if (!isAligned) {
            this.rotation = this.vel.heading();
        }
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rotation);
        fill(255);
        noStroke();
        rectMode(CENTER);
        ellipse(0, 0, SQUARE_SIZE, SQUARE_SIZE);
        pop();
    }
}

function setup() {
    createCanvas(windowWidth, 400);
    let gridSize = ceil(sqrt(NUM_BOIDS));

    // Create boids
    for (let i = 0; i < NUM_BOIDS; i++) {
        boids.push(new Boid(random(width), random(height)));
    }

    // Assign grid positions
    let index = 0;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (index < NUM_BOIDS) {
                boids[index].setGridPosition(i, j);
                index++;
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, 400)
}

function draw() {
    background(9, 20, 35, 100);

    if (isAligned) {
        gridRotation += 0.01;
    }

    for (let boid of boids) {
        boid.flock(boids);
        boid.update();
        boid.draw();
    }

   cursor('phytoplankton.png', 10, 10);

}