const gameBoard = (() =>{
    const gameDisplay = document.getElementById('game-display');
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

const Player = (marker) => {
    return {marker}
}

function gameLogic(){
    const xButton = document.getElementById('X-marker');
    const oButton = document.getElementById('O-marker');
    xButton.addEventListener('click', () =>{
        console.log("X was chosen");
        const playerOne = Player('X');
    });
    oButton.addEventListener('click', () =>{
        console.log("O was chosen");
        const playerOne = Player('O');
    });
}
gameLogic();


