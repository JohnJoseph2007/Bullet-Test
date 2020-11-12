var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600, 400);

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  bullet = createSprite(50, 200, 100, 25);
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);


}

function draw() {
  background(0);

  if (bullet.x - wall.x <= bullet.width/2 + wall.width/2 && wall.x - bullet.x <= bullet.width/2 + wall.width/2&& bullet.y - wall.y <= bullet.height/2 + wall.height/2 && wall.y - bullet.y <= bullet.height/2 + wall.height/2) {
    bullet.velocityX = 0;
    damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    if (damage > 10) {
      bullet.shapeColor = "red";
    } else if (damage <= 10) {
      bullet.shapeColor = "green";
    }
  }

  drawSprites();
}