/// <reference path="./resources/p5.d.ts" />

function setup() {
  createCanvas(600, 600);
}


var interp = 0.03;

var disp = [0,0,0,0,0]

function draw() {
  background(255);

  var target = [month() / 12, day() / 31, hour() / 24, minute() / 60, second() / 60]

  var start = -PI / 2;
  var end = 0;

  var start_size = 550, decrease_size = 50;
  
  strokeWeight(10);
  for(var i = 0; i < target.length; i++) {
    disp[i] += (target[i] * 2 * PI - disp[i]) * interp;

    end = start + disp[i];
    var size = start_size - decrease_size * i;
    if(start != end) {
      arc(300,300,size,size,start,end);
    }
    start = end;
  }
}