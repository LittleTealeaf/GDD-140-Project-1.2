function setup() {
  createCanvas(600, 600);
}

var h = 0,m = 0,s = 0;

var interpolate = 0.1;


function draw() {
  background(220);
  // Get current time and scale to their current degrees
  var offset = -PI / 2
  var c_hour = hour() * PI * 2 / 24 + offset;
  var c_minute = c_hour + minute() * PI * 2 / 60;
  var c_second = c_minute + second() * PI * 2 / 60;

  //interpolate the set h,m,s degrees to approach the goal values
  h = h + (c_hour - h) * interpolate;
  m = m + (c_minute - m) * interpolate;
  s = s + (c_second - s) * interpolate;
  
  //print arcs using the goal values
  arc(300,300,500,500,offset,h)
  arc(300,300,400,400,h,m)
  arc(300,300,300,300,m,s)
}