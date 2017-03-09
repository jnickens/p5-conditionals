var x = 0;
var speed = 25;
function setup(){
    createCanvas(600,400);
    background(50);
}
 
function draw(){
    background(50);
    
    //I wrote this so background changes to pink when clicked. 
    if(mouseIsPressed){
     background(255,0,200);
    }
    
    //makes outline white, 6px thick ,no color inside shapes
    stroke(255);
    strokeWeight(6);
    
    
    if(mouseY<150){
        fill(54,56,90);
    }
    else{
        noFill();
    }
    
    // a circle
    ellipse(x,200,100,100);
    //this code is going to get the circle to move on it's own. 
   

   

   
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN")
        speed = speed * -1;
    }
 x = x + speed;   
console.log(x);
    

}
