function setup() {
  createCanvas(600, 600);
}

// var h = 0,m = 0,s = 0;

var interpolate = 0.1;


// function draw() {
//   background(255);
//   // Get current time and scale to their current degrees
//   var offset = -PI / 2
//   var c_hour = hour() * PI * 2 / 24 + offset;
//   var c_minute = c_hour + minute() * PI * 2 / 60;
//   var c_second = c_minute + second() * PI * 2 / 60;

//   //interpolate the set h,m,s degrees to approach the goal values
//   h = h + (c_hour - h) * interpolate;
//   m = m + (c_minute - m) * interpolate;
//   s = s + (c_second - s) * interpolate;
  
//   //print arcs using the goal values
//   arc(300,300,500,500,offset,h)
//   arc(300,300,400,400,h,m)
//   arc(300,300,300,300,m,s)
// }

var disp = [0,0,0,0,0]

function draw() {
  background(255)

  var cur = [month() / 12, day() / 31, hour() / 24, minute() / 60, second() / 60]

  for(var i = 0; i < 5; i++) {
    cur[i] = cur[i] * PI * 2;
    if(i > 0) {
      cur[i] += cur[i-1]
    } else {
      cur[i] += -PI / 2
    }
    disp[i] = disp[i] + (cur[i] - disp[i]) * interpolate;
  }

  var start = 400, dec = 75;

  for(var i = 0; i < 5; i++) {
    var size = start - dec * i;
    if(i == 0) {
      arc(300,300,size,size,disp[i])
    } else {
      arc(300,300,size,size,disp[i-1],disp[i])
    }
  }

}