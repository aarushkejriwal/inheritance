class Log extends baseclass{
  constructor(x,y,height,angle)
{
  this.image=loadImage("sprites/wood1.png");
   super(x,y,20,height,angle);
   Matter.Body(this.body,angle);
}



};