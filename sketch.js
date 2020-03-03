let slider1;
let slider2;
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	slider1=createSlider(0,255);	
	slider2=createSlider(0,255);
	slider3=createSlider(0,255);
	
  }

  function draw(){
 background(slider1.value());
 slider2.value();
 slider3.value());
 
 ellipse(slider4.value()
 
 function playarea1(x,y,side){
fill(0, 0, frameCount % 255);
let h = 1198 + 100 * cos(frameCount / 100);
let w = 560 + 100 * sin(frameCount / 100);
    ellipse(h, w, 153, 100);
