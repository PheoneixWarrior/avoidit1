
//23 b vertical
//14 b horizontal
//8 r vertical
//11 r horizontal

function setup() {
  createCanvas(700,700);
player = createSprite(400, 200, 20, 20);

b1 = createSprite(350, 175, 50, 10);
b1.shapeColor = "black"
b1.velocityX = 0.5

b2 = createSprite(350, 620, 92, 10);
b2.shapeColor = "black"
b2.velocityX = 0.8


b3 = createSprite(160, 450, 10, 22);
b3.shapeColor = "black"
b3.velocityX = 0.5


b4 = createSprite(160, 200, 10, 40);
b4.shapeColor = "black"
b4.velocityX = 1


b5 = createSprite(540, 215, 10, 75);
b5.shapeColor = "red"
b5.velocityX = 0.9

b6 = createSprite(540, 400, 10, 37);
b6.shapeColor = "black"
b6.velocityX = 0.5

b7 = createSprite(540, 560, 10, 20);
b7.shapeColor = "red"
b7.velocityX = 2

b8 = createSprite(500, 570, 75, 10);
b8.shapeColor = "black"
b8.velocityX = 0.5

b9 = createSprite(350, 175, 45, 10);
b9.shapeColor = "black"
b9.velocityX = 0.5

b10 = createSprite(350, 620, 60, 10);
b10.shapeColor = "black"
b10.velocityX = 0.8


b11 = createSprite(650, 450, 10, 82);
b11.shapeColor = "black"
b11.velocityX = 0.5


b12 = createSprite(160, 200, 10, 40);
b12.shapeColor = "black"
b12.velocityX = 1


b13 = createSprite(540, 62, 10, 75);
b13.shapeColor = "red"
b13.velocityX = 0.9

b14 = createSprite(700, 400, 10, 75);
b14.shapeColor = "black"
b14.velocityX = 0.5

b15 = createSprite(540, 300, 10, 20);
b15.shapeColor = "red"
b15.velocityX = 2

b16 = createSprite(500, 570, 75, 10);
b16.shapeColor = "black"
b16.velocityX = 0.5



border1 = createSprite(0, 350, 10, 700);
border1.shapeColor = "green"

border2 = createSprite(700, 350, 10, 700);
border2.shapeColor = "green"

border3 = createSprite(350, 0, 700, 10);
border3.shapeColor = "green"

border4 = createSprite(350, 700, 700, 10);
border4.shapeColor = "green"








}

function draw() {
  background("lavender"); 

   b1.bounceOff(border1)
  b1.bounceOff(border2)
  b1.bounceOff(border3)
  b1.bounceOff(border4)

  b2.bounceOff(border1)
  b2.bounceOff(border2)
  b2.bounceOff(border3)
  b2.bounceOff(border4)
  
  b3.bounceOff(border1)
  b3.bounceOff(border2)
  b3.bounceOff(border3)
  b3.bounceOff(border4)

  b4.bounceOff(border1)
  b4.bounceOff(border2)
  b4.bounceOff(border3)
  b4.bounceOff(border4)

  b5.bounceOff(border1)
  b5.bounceOff(border2)
  b5.bounceOff(border3)
  b5.bounceOff(border4)

  b6.bounceOff(border1)
  b6.bounceOff(border2)
  b6.bounceOff(border3)
  b6.bounceOff(border4)
  
  b7.bounceOff(border1)
  b7.bounceOff(border2)
  b7.bounceOff(border3)
  b7.bounceOff(border4)

  b8.bounceOff(border1)
  b8.bounceOff(border2)
  b8.bounceOff(border3)
  b8.bounceOff(border4)

  b9.bounceOff(border1)
  b9.bounceOff(border2)
  b9.bounceOff(border3)
  b9.bounceOff(border4)

  b10.bounceOff(border1)
  b10.bounceOff(border2)
  b10.bounceOff(border3)
  b10.bounceOff(border4)
  
  b11.bounceOff(border1)
  b11.bounceOff(border2)
  b11.bounceOff(border3)
  b11.bounceOff(border4)

  b12.bounceOff(border1)
  b12.bounceOff(border2)
  b12.bounceOff(border3)
  b12.bounceOff(border4)

  b13.bounceOff(border1)
  b13.bounceOff(border2)
  b13.bounceOff(border3)
  b13.bounceOff(border4)

  b14.bounceOff(border1)
  b14.bounceOff(border2)
  b14.bounceOff(border3)
  b14.bounceOff(border4)
  
  b14.bounceOff(border1)
  b14.bounceOff(border2)
  b14.bounceOff(border3)
  b14.bounceOff(border4)

  b15.bounceOff(border1)
  b15.bounceOff(border2)
  b15.bounceOff(border3)
  b15.bounceOff(border4)

  drawSprites();
 
}