function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 20, 20);
  fill(220, 50, 90);
  ellipse(width * 0.5, height * 0.5, width * 0.25);
  fill(90, 80, 70);
  ellipse(width * 0.5, height * 0.5, width * 0.15);
}
