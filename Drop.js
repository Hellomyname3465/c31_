class Drop{
    constructor(x,y,width,height){
this.body = Matter.Bodies.circle(x,y,width,height)
this.width = width
this.height = height
    }
display(){
fill("blue")
ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
}
update(){

}

}