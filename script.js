const gameDisplay = document.querySelector('#game-display');
const winConfig= [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
]; 

const Gameboard = ()=>{
    return ["", "", "", "","", "","","", ""];
}
const Player = (mark, name) =>{
    return {mark, name};
}
const humanPlayer = Player('X', "cross");
const aiPlayer = Player('O', "circle");
const originalBoard = Gameboard();

let currentPlayer = humanPlayer.mark;

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
    currentPlayer === humanPlayer.mark ? currentPlayer = aiPlayer.mark : currentPlayer = humanPlayer.mark;
    checkWinner(originalBoard, humanPlayer)
}
function checkWinner(board, player){
    playerPositions = board.filter((field) => field === player.mark);
    console.log(`Player positions ${playerPositions}`);
    
}


displayBoard(originalBoard)
 




