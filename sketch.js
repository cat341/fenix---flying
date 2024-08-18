var fire_man;
var fenix_sprite, fenix_image, fenix_group;
var wall_up, wall_down;
var points = 0;
var time = 150;
var points_image, points_sprite;

function preload()
{
    fenix_image = loadAnimation("fenix_animation - 1.png","fenix_animation - 2.png","fenix_animation - 3.png");
    points_image = loadImage("point_represent.png");
}
function setup()
{
    createCanvas(500,500);
    fire_man = createSprite(150,400,25,25);
    fire_man.shapeColor = "orange";
    fenix_sprite = createSprite(46,46,46,46);
    fenix_group = createGroup();
    wall_up = createSprite(0,20,1000,15);
    wall_up.visible = false;
    wall_down = createSprite(0,480,1000,15);
    wall_down.visible = false;
    points_sprite = createSprite(30,50,20,20);
    points_sprite.addImage(points_image);
    points_sprite.scale = 1.7;
}
function draw()
{
    background("black");
    if(frameCount %45 === 0 && time > 0){
        var rng_fenix = Math.round(random(0,500));
        fenix_sprite = createSprite(500,rng_fenix,25,25);
        fenix_sprite.addAnimation("flying",fenix_image);
        fenix_sprite.scale = 5;
        fenix_group.add(fenix_sprite);
    }
    if(keyDown("s") && time > 0)
        {
            fire_man.y = fire_man.y + 15;
        }
        if(keyDown("w") && time > 0)
            {
                fire_man.y = fire_man.y - 15;
            }
            if(fenix_sprite.isTouching(fire_man))
                {
                    points += 1;
                    fenix_group.destroyEach();
                }
        if(fire_man.isTouching(wall_up) || fire_man.isTouching(wall_down))
            {
                fire_man.y = 250;
            }
    if(frameCount%25 === 0 && time > 0)
        {
            time -= 1;
        }
    if(time == 0)
    {
        text("total: " + points,225,200)
    }
    text("tempo: " + time,350,50)
    text("pontos: " + points,50,50);
    fenix_sprite.velocityX = - 27;
    drawSprites();
}