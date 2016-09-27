 var x = 50;
 var y = 50;
 var c;
 speed = 2;


 function setup() {
   createCanvas(640, 360);
   c = color(255, 255, 255)
 }

 function draw() {
   background(255);

   fill(c);
   ellipse(x, y, 80, 80);

   x = x + speed;

   fill(0);
   noStroke();
   text("X coordinate is :" + x, 321, 130);

   if (x >= width - 40) {
     speed = speed * -1;
     c = color(random(100, 255), random(255), random(255));
   }
   if (x <= 0) {
     speed = speed * -1;
     c = color(random(255), random(255), random(100, 255));
   }

function mousePressed() {
     c = color(random(255), random(255), random(255));
   }

function keyTyped() {
     if (key === 'a') {
       speed = 100;
     }
     if (key === 's') {
       speed = 2;
     }
   }
 }