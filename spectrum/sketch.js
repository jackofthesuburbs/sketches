var button;
var toggle;
var stepX;
var stepY;
let osc; 

function setup() {
  createCanvas(displayWidth, displayHeight);
  noCursor();
  noStroke();
  colorMode(HSB, width, height, 100); 
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc = new p5.Oscillator();
  osc.setType('sine');
  reverb.process(osc, 5, 5);
  //osc.start();
  // delay.process() accepts 4 parameters:
  // source, delayTime, feedback, filter frequency
  // play with these numbers!!
  delay.process(osc, 0.6, 0.3, 1000);

  // play the noise with an envelope,
  // a series of fades ( time / value pairs )
  
  var t = 10
  let text = createP("s-p-e-c-t-r-u-m");
  
  text.position(30, 30);
  text.style("font-family", "monospace");
  text.style("background-color", "#FFFFFF");
  text.style("color", "#F20FD7");
  text.style("font-size", "12pt");
  text.style("padding", "10px");
  
  let texty = createP("move mouse to control the <br>sine-wave theramin.<br><br>x axis = pitch 30-3000hz<br>y axis = volume quiet-loud");
           
  texty.position(32, 80);
  //texty.style("background-color", "#FFFFFF");
  texty.style("font-family", "monospace");
  texty.style("color", "#FFFFFF");
  texty.style("font-size", "10pt");
  
  
  button = createButton("audio on/off");
  button.mousePressed(toggle);
  button.position(32, 180);
  
}

function draw() {
  let pitch = map(mouseX, 0, width, 30, 3000);
  let volume = map(mouseY, 0, height, 1, 0);
  background(200);
  osc.freq(pitch);
  osc.amp(volume);
  
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (var gridY = 0; gridY < height; gridY += stepY) {
    for(var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
    
  } 
  
    
}
  
 function toggle() { 
  if (!osc.playing) {
    osc.start();
    osc.playing = true;
  } else {
    osc.stop();
    osc.playing = false;
    }
} 
