class Stone{

    constructor(x,y,width, height){
        var options = {
            density: 1.2,
            
        }
            this.x=x;
            this.y=y;
            this.width= width;
            this.height= height; 
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.image= loadImage("stone.png");
            World.add(world, this.body); 
    }

    display(){
        
        var pos =this.body.position;
      
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        
    }
}

