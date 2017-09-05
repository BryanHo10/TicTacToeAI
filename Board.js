var w;
var board=[];


function setup(){
    createCanvas(700,700);
    w=width/3;
    background(51);
    
    for(var y=0;y<3;y++){
      for(var x=0;x<3;x++){
          board[y*3+x]=new Token(x*w,y*w,0)
      }  
    }
}
function draw(){
    for(var i=0;i<board.length;i++){
        board[i].show();
    }
}

function aiTurn(index,gameBoard, depth, maximizingPlayer){
    var filledUp=true;
    var winCheck=false;
    var winner=checkWin();
    var tmpBoard=board;

    for(var i=0;i<board.length;i++){
        if(board[i].player==0)
            filledUp=false;
    }
    if(filledUp){
        return checkWin();
    }
    if(winner!=0){
        winCheck=true;
        return winner*depth;
    } 
    
    var bestValue = -Infinity;
    for(var i=0;i<tmpBoard.length;i++){
        if(tmpBoard[i].player == 0){
            
        }
    }
    
    

}

function checkWin(){
    
    var a=checkHorizontal();
    var b=checkDiagonal();
    var c=checkVertical();
    if(a>0){
        if(a==1)
            return 10;
        else
            return -10;
    }
    else if(b>0){
        if(b==1)
            return 10;
        else
            return -10;
    }
    else if(c>0){
        if(c==1)
            return 10;
        else
            return -10;
    }
    else
        {
            return 0;
        }
}
function checkHorizontal(){
    for(var i=0;i<3;i++){
        if(board[i*3].player == board[i*3+1].player&&board[i*3+1].player == board[i*3+2].player && board[i*3+1].player!=0){
            return board[i*3].player;
        }
    }
    return -1;
}
function checkVertical(){
for(var i=0;i<3;i++){
        if(board[i*3+i].player == board[(i+1)*3+i].player&&board[(i+2)*3+i].player == board[i*3+2].player && board[i*3+i].player!=0){
            return board[i*3].player;
        }
    }
    return -1;
}
function checkDiagonal(){
    if(board[0].player == board[4].player && board[4].player == board[8].player && board[4].player !=0){
        return board[4].player;
    }
    if(board[4].player == board[2].player && board[4].player == board[6].player && board[4].player !=0){
        return board[4].player;
    }
    return -1;
}