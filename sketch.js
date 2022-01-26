function setup() {
  createCanvas(600, 600);
}


var interpolate = 0.1;

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

  var start = 500, dec = 100;

  for(var i = 0; i < 5; i++) {
    var size = start - dec * i;
    if(i == 0) {
      arc(300,300,size,size,-PI / 2, disp[i])
    } else {
      arc(300,300,size,size,disp[i-1],disp[i])
    }
  }

}
