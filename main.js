var paddle2=10, paddle1=10;

var paddle1x = 10, paddle1Height = 110;
var paddle2Y = 685, paddle2Height = 70;

var score1 = 0, score2 = 0;
var paddle1Y;

var playerscore =0;
var audio1;
var pcscore = 0;

var ball = {
    x : 350/2,
    y : 480/2,
    r:20,
    dx: 3,
    dy:3,
}

function setup()
{
    var canvas = createCanvas(700, 600);
    canvas.center();
}

function draw()
{
    background = 0;

    fill("black");
    stroke("black");
    rect(680, 0, 20, 700);

    fill("black");
    stroke("black");
    rect(0, 0, 20, 700);

    paddleInCanvas();

    fill(250, 0, 0);
    stroke(250, 0, 0);
    strokeWeight(0.5);
    paddle1Y = mouseY;
    rect(paddle1x, paddle1Y, paddle1, paddle1Height, 100);

    fill("#fff");
    stroke("#fff");
    var paddle2y = ball.y-paddle2Height/2; rect(paddle2Y, paddle2y, paddle2Height, 100);

    midline();
    drawScore();
    models();
    move();
}