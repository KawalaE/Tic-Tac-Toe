/**gameboard module ->  board render function */
const gameBoard = (() =>{
    const board = ['', '','', '','', '','', '',''];
    const gameDisplay = document.getElementById('game-display')
    const createBoard = (marker) => board.forEach((_element, index) =>{
        const boardCube = document.createElement('div');
        boardCube.id = index;
        boardCube.classList.add('cube'); 
        gameDisplay.appendChild(boardCube);
        boardCube.addEventListener('click', markHandler)
    });
    
    return{
        createBoard,
    }
})();

function markHandler(e){
    const displayMark = document.createElement('div');
    displayMark.classList.add('cross');
    e.target.append(displayMark);
}
gameBoard.createBoard();
