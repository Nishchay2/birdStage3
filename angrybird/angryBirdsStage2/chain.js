class Chain{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.2,
            length:20
        }
        this.chain=constraint.create(option)
        World.add(world,this.chain)
    }
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.poistion;
    strokeWeight(4)
    console.log(pointA.x)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}