const gameDisplay = document.querySelector('#game-display');
const winConfig= [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
]; 

const Gameboard = ()=>{
    return ["", "", "", "","", "","","", ""];
}
const humanPlayer = 'X'
const aiPlayer = 'O'
const originalBoard = Gameboard();

let currentPlayer = humanPlayer;

function displayBoard(board){
    board.forEach((element, index) => {
        const field = document.createElement('div');
        field.classList.add('cube')
        field.id = index;
        field.addEventListener('click', ()=>{
            field.textContent = currentPlayer;
            board[index] = currentPlayer;
            console.log(board)
            switchPlayer()
        })
        gameDisplay.appendChild(field);
    })
    return board;
}
function switchPlayer(){
    currentPlayer === humanPlayer ? currentPlayer = aiPlayer : currentPlayer = humanPlayer;
    let gameWinner = checkWinner(originalBoard, humanPlayer);
    if(gameWinner) console.log(gameWinner)
}
function checkWinner(board, player){
    const playerPositions = [];
    let winner = null;
    board.forEach((element, index)=>{
        if(element === player){
            playerPositions.push(index)
        }
    })
    for(let array in winConfig){
        if(isSubset(playerPositions, winConfig[array])){
            winner = {index: winConfig[array], player: player};
            break;
        }
    }
    console.log(winner)
    return winner;
}
function isSubset(mainArr, subArray){
    for (let el in subArray){
        if (!mainArr.includes(subArray[el])){
            return false;
        }
    } return true;
}
function gameOver(winner){

}

displayBoard(originalBoard);
 




