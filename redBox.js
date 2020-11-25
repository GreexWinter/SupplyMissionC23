class redBox{
    constructor(x,y,width,height){
        var setStatic = {
            isStatic : false
        }
        this.body = Bodies.rectangle(780, 600, 100, 50, setStatic);
        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;
        rectMode(CENTER);
        rect(position.x, position.y, width, height);
    }
}