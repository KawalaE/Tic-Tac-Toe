const gameStatus = document.querySelector('.status');
const modal = document.querySelector('.modal');
let marker = '';

function isBoardFull() {
  let counter = 0;
  document.querySelectorAll('.cube').forEach((el) => {
    if (el.hasChildNodes()) {
      counter += 1;
    }
  });
  if (counter === 9) {
    return true;
  } return false;
}
function changeColor(arrayOfIds, color) {
  for (let i = 0; i < arrayOfIds.length; i++) {
    document.getElementById(arrayOfIds[i]).style.backgroundColor = color;
  }
}
function isSubset(mainArr, subArray) {
  for (const element of subArray) {
    if (!mainArr.includes(element)) {
      return false;
    }
  } return true;
}

function gamePause() {
  document.querySelectorAll('.cube').forEach((cube) => {
    cube.removeEventListener('click', markHandler);
  });
}

function checkScore() {
  const allCrosses = document.querySelectorAll('.cross');
  const allCircles = document.querySelectorAll('.circle');
  const crossMoves = [];
  const circleMoves = [];
  allCrosses.forEach((cross) => {
    crossMoves.push(Number(cross.parentNode.id));
  });
  allCircles.forEach((circle) => {
    circleMoves.push(Number(circle.parentNode.id));
  });
  const winningCombos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7],
  ];

  winningCombos.forEach((winArray) => {
    if (isSubset(crossMoves, winArray)) {
      changeColor(winArray, 'rgb(143, 250, 157)');
      gameStatus.textContent = 'X wins!';
      modal.showModal();
      gamePause();
    } else if (isSubset(circleMoves, winArray)) {
      changeColor(winArray, 'rgb(238, 148, 148)');
      gameStatus.textContent = 'O wins!';
      modal.showModal();
      gamePause();
    } else if (isBoardFull()) {
      gameStatus.textContent = "It's a tie!";
      modal.close();
      modal.showModal();
      gamePause();
    }
  });
}
const Player = (mark) => {
  const setMarker = () => {
    marker = mark;
  };
  return { setMarker, mark };
};
const playerOne = Player('cross');
const playerTwo = Player('circle');

function markHandler(e) {
  e.target.classList.remove('highlight');
  const displayMark = document.createElement('div');
  displayMark.classList.add(marker);
  e.target.append(displayMark);
  marker === 'cross' ? playerTwo.setMarker() : playerOne.setMarker();
  e.target.removeEventListener('click', markHandler);
  checkScore();
}

playerOne.setMarker();

function clearGameBoard() {
  document.querySelectorAll('.cube').forEach((cube) => {
    if (cube.firstChild) {
      cube.removeChild(cube.firstChild);
    }
    cube.addEventListener('click', markHandler);
    cube.classList.add('highlight');
    playerOne.setMarker();
  });
  gameStatus.textContent = '';
}

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const gameDisplay = document.getElementById('game-display');
  const restartGame = document.querySelector('.restart');
  const createBoard = () => board.forEach((_element, index) => {
    const boardCube = document.createElement('div');
    boardCube.classList.add('highlight');
    boardCube.id = index + 1;
    boardCube.classList.add('cube');
    gameDisplay.appendChild(boardCube);
    boardCube.addEventListener('click', markHandler);
  });
  restartGame.addEventListener('click', clearGameBoard);

  return {
    createBoard,
  };
})();

function modalHandler() {
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.close();
      document.querySelectorAll('.cube').forEach((el) => {
        el.style.backgroundColor = 'rgb(44, 44, 44)';
      });
      clearGameBoard();
    }
  };
}

modalHandler();
gameBoard.createBoard();
