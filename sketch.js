var fixedRect,movingRect;
 function setup() {
    createCanvas(800,400);
     fixedRect=createSprite(400, 200, 50, 50);
      movingRect=createSprite(200,200,30,20);
       fixedRect.shapeColor="yellow";
        movingRect.shapeColor="red"; }
         function draw() {
            background(0,0,0);
             movingRect.x=mouseX;
              movingRect.y=mouseY;
               if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
                 fixedRect.x-movingRect.x< fixedRect.width/2 + movingRect.width/2 &&
                  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
                movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 ) { 
                 movingRect.shapeColor = "red";
                  fixedRect.shapeColor = "red"; }
                   else{
                      fixedRect.shapeColor="yellow";
                       movingRect.shapeColor="red"; }
                        drawSprites(); }