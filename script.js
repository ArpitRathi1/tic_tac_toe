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