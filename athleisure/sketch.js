var canvas;
var h1;

let osc;
let playing = false;
var albumart;

// The snake
var s;

// The scale of the grid
var scl = 20;
var cols;
var rows;
var button;
var buttno;

var music;

var fr = 8;

// This is the food location
var food;

var musicRate = 1;

function preload() {
  music = loadSound('athleisure.mp3');
  albumart = loadImage('albumart.jpg');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(windowWidth/2 - 250, windowHeight/2 - 250);
  h1 = createElement('h1', '<iframe style="border: 0; width: 500px; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=4010593746/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://jackofthesuburbs.bandcamp.com/album/athleisure">athleisure by jack of the suburbs</a></iframe>');
  h1.position(windowWidth/2 - 250, windowHeight/2 + 250);
  
  //music.play();
  music.playMode('sustain');
  colorMode(HSB, 255);
  noStroke();
  cols = floor(width / scl);
  rows = floor(height / scl);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button.position(windowWidth/2 - 250, windowHeight/2 - 280);
  buttno = createButton("stop");
  buttno.mousePressed(resetPlaying);
  buttno.position(windowWidth/2 - 205, windowHeight/2 - 280);

  s = new Snake();
  s.xspeed = 0;
  frameRate(fr);

  // Pick a food location
  pickLocation();
}

function togglePlaying() {
  music.play();
  s.xspeed = 1; 
}

function resetPlaying() {
  music.stop();
  s = new Snake();
  s.xspeed = 0;
  frameRate(fr);
}
  

// Pick a food location
function pickLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// Animation loop
function draw() {
  background(albumart);
  fill(255, 0, 255, 100);
  rect(0, 0, width, height);
  var len = music.duration();
  

  // If the snake eats the food
  if (s.eat(food)) {
    setTimeout(function(){
  Object.assign(music, {_playing: true});
  music.playMode('restart');
}, 100);
music.stop();
music.playMode('sustain');
    music.jump(random(len));
    frameRate(fr);
    pickLocation();
  }
  


  // Check if the snake hits itself or a wall
  s.death();
  // Update snake
  s.update();
  // Draw snake
  s.show();
  

  fill(150, 255, 255);
  rect(food.x, food.y, scl, scl);
}

if (s.death) {
  music.stop();
  }

// Moving the snake
function keyPressed() {

  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }

  if (key == ' ') {
    s.total++;
  }
  return false;
}
