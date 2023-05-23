let gameStatus = document.querySelector('.status');
const modal = document.querySelector('.modal');
const gameBoard = (() =>{
    const board = ['', '','', '','', '','', '',''];
    const gameDisplay = document.getElementById('game-display');
    const restartGame = document.querySelector('.restart');
    const createBoard = () => board.forEach((_element, index) =>{
        const boardCube = document.createElement('div');
        boardCube.classList.add('highlight')
        boardCube.id = index+1;
        boardCube.classList.add('cube'); 
        gameDisplay.appendChild(boardCube);
        boardCube.addEventListener('click', markHandler);
    });
    restartGame.addEventListener('click', clearGameBoard);
    
    return{
        createBoard
    }
})();
function modalHandler(){
    window.onclick = function(e){
        if (e.target == modal){
            modal.close()
            clearGameBoard();
        }
    }
}
modalHandler();
function clearGameBoard(){
    document.querySelectorAll('.cube').forEach((cube)=>{
        if(cube.firstChild){
            cube.removeChild(cube.firstChild);
        }
        cube.addEventListener('click', markHandler)
        playerOne.setMarker();
    })
    gameStatus.textContent = "";
}
let marker = '';
function markHandler(e){
    e.target.classList.remove('highlight')
    const displayMark = document.createElement('div');
    displayMark.classList.add(marker);
    e.target.append(displayMark);
    marker ==='cross' ? playerTwo.setMarker() : playerOne.setMarker();
    e.target.removeEventListener('click', markHandler);
    checkScore();
}
gameBoard.createBoard();

function checkScore(){
    const allCrosses = document.querySelectorAll('.cross');
    const allCircles = document.querySelectorAll('.circle');
    let crossMoves = [];
    let circleMoves = [];
    allCrosses.forEach((cross) =>{
        crossMoves.push(Number(cross.parentNode.id));
    });
    allCircles.forEach((circle)=>{
        circleMoves.push(Number(circle.parentNode.id))
    })
    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
    ]; 

    winningCombos.forEach((winArray) =>{
        if(isSubset(crossMoves, winArray)){
            gameStatus.textContent = "X wins!";
            modal.showModal();
            gamePause();
            
        }else if(isSubset(circleMoves, winArray)){
            gameStatus.textContent = "O wins!";
            modal.showModal();
            gamePause()
        }
    })
}
function isSubset(mainArr, subArray){
    for (let el in subArray){
        if (!mainArr.includes(subArray[el])){
            return false;
        }
    } return true;
}
function gamePause(){
    document.querySelectorAll('.cube').forEach((cube)=>{
        cube.removeEventListener('click', markHandler);
    })
}
const Player = (mark) =>{
    const setMarker = () =>{
        marker = mark;
    }
    return {setMarker, mark}
};
const playerOne = Player('cross');
const playerTwo = Player('circle');
playerOne.setMarker();
