var x = 15; 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {

  background(51);

  ellipse(x, 200, 30, 30);
  ellipse(x, height - 200, 30, 30);
  x++;

  if (x >= width - 15) {
    x = 0;
  }

  textAlign(CENTER);
  // stroke(255);
  // noFill();
  // strokeWeight(4);
  textSize(34);
  text(' Hello, I am Kavin,', width / 2, (height / 2) - 20);
  text('and this is my website...', width / 2, (height / 2) + 20);

  textSize(15);
  fill(169);
  text('Kavin Bharathi™', 70, height - 10);
}

