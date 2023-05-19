const gameBoard = (() =>{
    const board = ['', '','', '','', '','', '',''];
    const gameDisplay = document.getElementById('game-display')
    board.forEach((element)=>{
        const boardCube = document.createElement('div');
        boardCube.classList.add('cube'); 
        gameDisplay.appendChild(boardCube);
    })
    return board;
})();
console.log(gameBoard);
