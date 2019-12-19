// Master volume in decibels
const volume = -16;

// The synth we'll use for audio
let synth;

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);

  // Clear with black on setup
  background(0);

  // Make the volume quieter
  Tone.Master.volume.value = volume;

  // Setup a synth with ToneJS
  synth = new Tone.Synth({
    "oscillator" : {
      "type": 'sine'
    }
  });

  // Wire up our nodes:
  // synth->master
  synth.connect(Tone.Master);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  const dim = Math.min(width, height);

  // pink background
  background(255, 9, 255);

  // Get a 0..1 value for the mouse
  const u = max(0, min(1, mouseX / width));
  const frequency = lerp(50, 500, u);
  synth.setNote(frequency);

  // Draw a 'knob' for the frequency value
  if (mouseIsPressed) {
    stroke(245, 245, 0);
    strokeWeight(dim * 0.0175);
    noFill();
    const r = dim * 0.4;
    if (u > 0) {
      arc(width / 2, height / 2, r, r, 0, u * PI * 2);
    }
  }

  // Draw a 'play' button
//  noStroke();
//  fill(0, 77, 255);
//  polygon(width / 2, height / 2, dim * 0.1, 3);
}

// Update the FX and trigger synth ON
function mousePressed () {
  synth.triggerAttack();
}

// Trigger synth OFF
function mouseReleased () {
  synth.triggerRelease();
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
