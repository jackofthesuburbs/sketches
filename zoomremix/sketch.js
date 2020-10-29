

let img, by, xMinStep;

function preload() {
	img = loadImage("ZOOM.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// background(img);
	let xStep;
	by = random(1,img.height);
	xMinStep = random(1,img.width / 20);

	drawingContext.shadowColor = color(0, 0, 0);
	drawingContext.shadowBlur = 20;

	for (let x = 0; x < width; x += xStep) {
		xStep = random(1, xMinStep);
		let img_trim = img.get(x, 0, xStep, img.height);
		let y = by + random(img.height / 20);
		image(img_trim, x, y);
		image(img_trim, x, y - img.height);
	}
	//noLoop();
	frameRate(2);
}