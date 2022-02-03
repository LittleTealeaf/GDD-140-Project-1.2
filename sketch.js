/// <reference path="./resources/p5.d.ts" />

function setup() {
  createCanvas(600, 600);
}

//Interpolation Rate
var interp = 0.03;

//Current Displaying Values
var disp = [0,0,0,0,0]

function draw() {
  background(255);
  fill(255,255,255);

  //Target values for displaying
  var target = [month() / 12, day() / 31, hour() / 24, minute() / 60, second() / 60]

  //Initial start offset
  var start = -PI / 2;
  //The ending of the previous iteration
  var end = 0;

  //Starting radius, and how fast to decrease it for each number
  var start_size = 550, decrease_size = 50;
  
  strokeWeight(10);
 
  //For each of the numbers (Month, day, hour, minute, second)
  for(var i = 0; i < target.length; i++) {
    //Scale the offset so it's a % of a full 360 degrees (or 2pi)
    disp[i] += (target[i] * 2 * PI - disp[i]) * interp;

    //Set the end as the starting point plus the display rotation
    end = start + disp[i];
    
    //Calculate the size
    var size = start_size - decrease_size * i;

    //As long as the start isn't the same as the end
    if(start != end) {
      //Draw an arc using the parameters
      arc(300,300,size,size,start,end);
    }

    //Update the starting point to the end of the drawn arc
    start = end;
  }
}