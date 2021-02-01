class Drop{
constructor(x,y){
    this.body = Bodies.circle(x,y,5);
    this.rain = []
    World.add(world, this.body);
  }

  display() {
   
    var pos = [this.body.position.x,this.body.position.y]

   if(this.rain.position.y > height){
     
     Matter.Body.setPosition(this.rain,{x:random(0,300),y:random(0,100)})
   }
    
      this.rain.push (pos)
    
    for(var i =0;i<this.rain.length;i = i+1){

        fill ("blue")
     circle(this.rain[i] [0],this.rain [i] [1],10)

    }

  }
  
}