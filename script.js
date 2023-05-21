/**gameboard module ->  board render function */
const gameBoard = (() =>{
    const board = ['', '','', '','', '','', '',''];
    const gameDisplay = document.getElementById('game-display')
    const createBoard = () => board.forEach((_element, index) =>{
        const boardCube = document.createElement('div');
        boardCube.id = index;
        boardCube.classList.add('cube'); 
        gameDisplay.appendChild(boardCube);
        boardCube.addEventListener('click', markHandler);
    });
    
    return{
        createBoard,
    }
})();

let marker = '';
function markHandler(e){
    const displayMark = document.createElement('div');
    displayMark.classList.add(marker);
    e.target.append(displayMark);
}
gameBoard.createBoard();

const Player = (mark) =>{
    const setMarker = () =>{
        marker = mark;
    }
    return {setMarker, mark}
};

const gameLogic = (() => {
    const playerOne = Player('cross');
    const playerTwo = Player('circle');
    playerOne.setMarker();
    //playerOne.mark === 'cross' ? playerTwo.setMarker() : playerOne.setMarker();
})();