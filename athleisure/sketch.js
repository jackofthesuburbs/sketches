let osc;
let playing = false;
var canvas;
var h1;
var albumart;
var music;
var musicRate = 1;
var fr = 8;

// snake
var s;               

// scale of the grid
var scl = 20;
var cols;
var rows;
var button;
var buttno;

// food location
var food;

// preload stuff
function preload() {
  music = loadSound('eggshaker.mp3');
  albumart = loadImage('albumart.jpg');
}

//setup stuff
function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(windowWidth/2 - 200, windowHeight/2 - 250);
  h1 = createElement('h1', '<iframe style="border: 0; width: 400px; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=952625283/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://jackofthesuburbs.bandcamp.com/track/reptilian-parametric">reptilian parametric by jack of the suburbs</a></iframe>');
  h1.position(windowWidth/2 - 200, windowHeight/2 + 150);
  
  //music.play();
  music.playMode('sustain');
  //
  colorMode(HSB, 255);
  noStroke();
  //
  cols = floor(width / scl);
  rows = floor(height / scl);
  //
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button.position(windowWidth/2 - 200, windowHeight/2 - 280);
  buttno = createButton("stop");
  buttno.mousePressed(stopPlaying);
  buttno.position(windowWidth/2 - 155, windowHeight/2 - 280);
  //
  s = new Snake();
  s.xspeed = 0;
  frameRate(fr);

  // pick a food location
  pickLocation();
}

// get music to play
function togglePlaying() {
  music.play();
  s.xspeed = 1; 
}

// stop music from playing
function stopPlaying() {
  music.stop();
  s = new Snake();
  s.xspeed = 0;
  frameRate(fr);
}
  

// pick a food location
function pickLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

// animation loop
function draw() {
  background(albumart);
  fill(255, 0, 255, 60);
  rect(0, 0, width, height);
  var len = music.duration();
  

  // if snake eats the food
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

// stop music if snake dies
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

