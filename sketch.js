var gameState=0;
var contestantCount;
var db;
var qui,contest;

function setup()
{
createCanvas(800,500);


db=firebase.database();
qui=new quiz();
qui.getState();
qui.start();


}

function draw()
{
background(225);

if(qui.index>4)
{
    qui.end();
}
    

drawSprites();
}