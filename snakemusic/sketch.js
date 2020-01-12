let osc;
let playing = false;
var canvas;
var h1;
var albumart;
var music;
var musicRate = 1;
var fr = 5;

// snake
var s;               

// scale of the grid
var scl = 50;
var cols;
var rows;
var button;
var buttno;
var butnot;

// food location
var food;

// preload stuff
function preload() {
  music = loadSound('eggshaker.mp3');
  albumart = loadImage('albumart.jpg');
}

//setup stuff
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //canvas.position(32, 135);
  h1 = createElement('h1', '<iframe style="border: 0; width: 400px; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=952625283/size=small/bgcol=ffffff/linkcol=f20fd7/artwork=none/transparent=true/" seamless><a href="http://jackofthesuburbs.bandcamp.com/track/reptilian-parametric">reptilian parametric by jack of the suburbs</a></iframe>');
  h1.position(32, 150);
  
  let text = createP("s-n-a-k-e m-u-s-i-c");
  
  text.position(30, 30);
  text.style("font-family", "monospace");
  text.style("background-color", "#F20FD7");
  text.style("color", "#FFFFFF");
  text.style("font-size", "12pt");
  text.style("padding", "10px");
  
  
  let texty = createP("it\'s snake but when you eat the food<br> it skips to a random part in the song. <br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp use arrows to move.");
           
  texty.position(32, 80);
  //texty.style("background-color", "#FFFFFF");
  texty.style("font-family", "monospace");
  texty.style("color", "#F20FD7");
  texty.style("font-size", "10pt");
  
  
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
  button.position(30, 137);
  buttno = createButton("stop");
  buttno.mousePressed(stopPlaying);
  buttno.position(75, 137);
  //butnot = createButton("bandcamp");
  //butnot.mousePressed(stopPlaying);
  //butnot.position(330, 67);
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
  background(255);
  fill(255, 0, 255, 20);
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

