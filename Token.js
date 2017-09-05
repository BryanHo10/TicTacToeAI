function Token(x,y,player){
    this.x=x;
    this.y=y;
    this.player=0;
    
    
    this.show=function(){
        if(this.player==0){
            fill(51);
        }
        else if(this.player==1){
            fill(150,0,0);
        }
        else if(this.player==2){
            fill(0,0,150);
        }
        rect(x+2,y+2,w-2,w-2);
    }
    
 
    
    
}