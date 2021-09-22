

function preload(){
    
}

function setup(){
createCanvas(500,700)
engine = Matter.Engine.create() 
word = engine.world   
drop = new Drop(100,100,10,10)
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
    new Drop(random(0,400), random(0,400),10,10)
}
}

function draw(){
 background("black") 
 drop.display()
 

}   

