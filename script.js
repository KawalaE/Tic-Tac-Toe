const gameBoard = (() =>{
    const board = ['', '','', '','', '','', '',''];
    const gameDisplay = document.getElementById('game-display')
    const render = (marker) => board.forEach((element) =>{
        const boardCube = document.createElement('div');
        boardCube.textContent = element;
        boardCube.classList.add('cube'); 
        gameDisplay.appendChild(boardCube);
        boardCube.addEventListener('click',()=>{
            console.log('clicked')
            boardCube.textContent = marker;
            board[element] = marker;
            console.log(board)
        })
    });
    return{
        board,
        render,
    }
})();
console.log(gameBoard);
gameBoard.render('O');

function gameLogic(){
    const xChoice = document.getElementById('X-marker');
    xChoice.addEventListener('click', ()=>{
        console.log('X was choosen');
    });
};
gameLogic();