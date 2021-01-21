class Slingshot{

    constructor(bodyA, bodyB){
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness : 1,
         length : -20
      }
      this.sling = Constraint.create(options)
      World.add(world,this.sling)
    }

    display(){
        push()
        strokeWeight(5)

        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y)
        pop()
    }


}