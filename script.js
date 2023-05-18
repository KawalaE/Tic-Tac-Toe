const gameDisplay = document.getElementById('game-display');

const gameBoard = (() =>{
    const gameBoardArr = [];
    const horizontalArr = [];
    for (let verCube = 0; verCube <= 2; verCube++){
        gameBoardArr[verCube] = document.createElement('div');
        gameDisplay.appendChild(gameBoardArr[verCube]);
        gameBoardArr[verCube].classList.add('cubes');
       
        for (let horCube = 0; horCube <= 2; horCube++){
            horizontalArr[horCube] = document.createElement('div');
            gameBoardArr[verCube].appendChild(horizontalArr[horCube]);
            horizontalArr[horCube].classList.add('cube');
        }
        gameBoardArr[verCube] = horizontalArr;
    }
    return gameBoardArr;
})();

console.log(gameBoard);
