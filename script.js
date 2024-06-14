const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialise game.
function initGame(){
    currentPlayer= "X";
    gameGrid=["","","","","","","","",""];
    // Empty UI.
    boxes.forEach((box,index)=>{
        box.innerText="";
        // Enable pointer events
        box.style.pointerEvents="all";
        // removing green color by intialise box with css properties again.
        box.classList=`box box${index+1}`;
    });

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();

function swapTurn(){
    if (currentPlayer==="X"){
        currentPlayer="0";
        }else{
        currentPlayer="X";
    }
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}

function checkGameover(){
    let answer="";
    // All 3 boxed should not be empty and have same value.
    winningPositions.forEach((position)=>{
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]])){
            // check if winner is X.
            if (gameGrid[position[0]]==="X"){
                answer="X";
            }else{
                answer="0";
            }
            // Disable pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
            // now we know X/0 is a winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    })
    // it means we have a winner.
    if ( answer!=="" ){
        gameInfo.innerText=`Winner player - ${answer}`;
        newGameBtn.classList.add("active");
    }
    // let's check whether there is tie.
    let fillcount=0;
    gameGrid.forEach((box)=>{
        if(box!==""){
            fillcount++;
        }
    });
    // if board is filled game is tie.
    if (fillcount===9 && answer===""){
        gameInfo.innerText="Game tied";
        newGameBtn.classList.add("active");
    }
}

function handleClick(index){
    if (gameGrid[index]===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        swapTurn();
        checkGameover();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
})

newGameBtn.addEventListener("click",initGame)