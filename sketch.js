function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  var h = hour()
  var m = minute()
  var s = second()
  var n = millis()

  var h_height = h / 24
  var m_height = m / 60
  var s_height = s / 60
  
  rect(100,0,400,200 * h_height)
  rect(150,200 * h_height,300,200 * m_height)
  rect(200,200 * h_height + 200 * m_height,200,200 * s_height)
}