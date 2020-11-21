class Ground
{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic:true,
            
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body);
    }
    display()
    {
        var groundpos=this.body.position;

       push()
       translate(groundpos.x, groundpos.y);
       rectMode(CENTER)
       //strokeWeight(3);
       stroke("brown")
       fill("brown");
       rect(0,0,this.w,this.h)
       pop()
    }
}