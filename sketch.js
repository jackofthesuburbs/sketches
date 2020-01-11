var drums;
var baw;
var tink;
var r = 0;
var z = 0;

function preload() {
  soundt = loadSound('soundt.wav');
  soundh = loadSound('soundh.wav');
  sounde = loadSound('sounde.wav');
  soundp = loadSound('soundp.wav');
  soundl = loadSound('soundl.wav');
  sounda = loadSound('sounda.wav');
  soundy = loadSound('soundy.wav');
  soundi = loadSound('soundi.wav');
  soundn = loadSound('soundn.wav');
  soundg = loadSound('soundg.wav');
  soundm = loadSound('soundm.wav');
}

//Function description : https://processing.org/reference/keyPressed_.html
function keyPressed() {
  //The keyPressed function checks for keys anytime a key is pressed
  if (key == 't') {
    soundt.play();
  }
  if (key == 'h') {
    soundh.play();
  }

  if (key == 'e') {
    sounde.play();
    sounde.setVolume(0.2);
  }

  if (key == 'p') {
    soundg.play();
  }
  
  if (key == 'l') {
    soundl.play();
  }
  
  if (key == 'a') {
    sounda.play();
  }
  
  if (key == 'y') {
    soundy.play();
  }
  
  if (key == 'i') {
    soundi.play();
  }
  
  if (key == 'n') {
    soundn.play();
  }
  
  if (key == 'g') {
    soundp.play();
  }

  if (key == 's') {
    soundt.stop();
    soundh.stop();
    sounde.stop();
    soundp.stop();
    soundl.stop();
    sounda.stop();
    soundy.stop();
    soundi.stop();
    soundn.stop();
    soundg.stop();
    soundm.stop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //mini.playMode('restart');
  
  var t = 10
  let text = createP("t-h-e p-l-a-y-i-n-g t-y-p-e");
  
  text.position(30, 30);
  text.style("font-family", "monospace");
  text.style("background-color", "#F20FD7");
  text.style("color", "#FFFFFF");
  text.style("font-size", "12pt");
  text.style("padding", "10px");
  
  let texty = createP("mouse-click, or type any of the <br>letters above to play.<br><br>(for desktop browser only.)");
           
  texty.position(32, 80);
  //texty.style("background-color", "#FFFFFF");
  texty.style("font-family", "monospace");
  texty.style("color", "#F20FD7");
  texty.style("font-size", "10pt");
  
  x = width / 2;
  y = height;
  f = width;
  
  
}

function mousePressed() {
  soundm.play();
}


var a;
var b;
function draw() {
  background(255);
  
  if (soundi.isPlaying()) {
        background(random(255),random(255),random(255));
     
  }
  
  if (mouseIsPressed) {
    noStroke();
    fill(255, 246, 84, 150);
    rect(pmouseX - 10, pmouseY - 30, 40, 40);
    noStroke();
    fill(242, 15, 215, 150);
    ellipse(mouseX, mouseY, 30, 30);
    ellipse(pmouseX, pmouseY, 10, 10);
    
  } else {
    //rect(25, 25, 50, 50);
    rect(0, 0, 0, 0);
  }


  if (soundt.isPlaying()) {
    noStroke();
    fill(0, 230, 255);
    ellipse(windowWidth/2, windowHeight/2, r, r);
  
    r += 10;
  }
  if (!soundt.isPlaying()) {
    r = 0;
  }


  if (soundh.isPlaying()) {
      noStroke();
      fill(92, 246, 74);
      quad(random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight));

  }

  //if (sounde.isPlaying()) {
    //fill(0, 230, 255);
   // a = mouseX;
    //b = mouseY;
  //}
  //ellipse(a, b, 20, 20);

  if (soundp.isPlaying()) {
        noStroke();
        fill(242, 15, 215);
        ellipse(windowWidth/3, random(0,windowHeight), 70);
        fill(0, 230, 255);
        ellipse(windowWidth/3 + windowWidth/3, random(0,windowHeight), 70);
        fill(92, 246, 74);
        ellipse(windowWidth/2, random(0,windowHeight), 70);
  }

  
  if (soundl.isPlaying()) {
    noStroke();
    fill(92, 246, 74);
    ellipse(random(0, width), random(0, height), 90, 90);
  }

  
  if (soundn.isPlaying()) {
    noStroke();
    fill(0, 230, 255);
    //rect(r + 60, 400, r, r);
   // rect(400 - r, 200, r, r);
   // rect(600, r+240, r, r);
   // rect(r + 300, 120, r, r);
   // rect(800 - r, 200, r, r);
   // rect(100, r+640, r, r);
   // rect(100, r+640, r, r);
    rect(random(0, width), random(0, height), 40, 40);
  }
  
   if (sounde.isPlaying()) {
        noStroke();
        fill(255, 246, 84);
        ellipse(random(0, windowWidth), windowHeight/3, 80, 80);
        ellipse(random(0, windowWidth), windowHeight/3 + windowHeight/3, 80, 80);
        ellipse(windowWidth/3 + windowWidth/3, random(0,windowHeight), 80, 80);
        ellipse(windowWidth/2, random(0,windowHeight), 80, 80);
     
  }
  

  if (soundg.isPlaying()) {
        noStroke();
        fill(255, 246, 84);
        rect(random(0, windowWidth), 0, random(0,10), random(windowHeight/3, windowHeight));
        //rect(windowWidth/2, windowHeight/2, 80, 80);
     
  }
  
  if (sounda.isPlaying()) {
        noStroke();
        fill(30, 75, 255, 150);
        rect(x + x/2, y, 50, 50);
  
        // Jiggling randomly on the horizontal axis
        x = x + random(-5, 5);
        // Moving up at a constant speed
        y = y - 20;
  
        // Reset to the bottom
        if (y < 0) {
        y = height;
      }
  }


  if (soundy.isPlaying()) {
        noStroke();
        fill(242, 15, 215, 150);
        rect(f, y, 70, 70);
    
        f = f - 10;
        y = y - 10;
    
        if (y < 0) {
          y = height;
        }
    
        if (f < 0) {
          f = windowWidth;
        }
    
  }
  
  //var t = 10;
  //fill(242, 15, 215);
  //textSize(12);
  //textFont('Monospace');yaa
  //fill(242, 15, 215);
  //text("for desktop browser only.", 14, height - 10);

  

}