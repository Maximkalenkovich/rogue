let currentGame = null;

function startGame(difficulty) {
  if (currentGame !== null) {
    currentGame.cleanup();
    currentGame = null;
  }

  document.getElementById('difficultySelection').style.display = 'none';
  document.getElementById('gameContainer').style.display = 'block';
  if (difficulty === 'easy') {
    currentGame = new Game();
  } else if (difficulty === 'hard') {
    currentGame = new GameHard();
  }
  currentGame.init();
}

function showDifficultySelection() {
  if (currentGame !== null) {
    currentGame.cleanup();
    currentGame = null;
  }
  document.getElementById('gameContainer').style.display = 'none';
  document.getElementById('difficultySelection').style.display = 'block';
}

document.getElementById('startEasyButton').addEventListener('click', () => startGame('easy'));
document.getElementById('startHardButton').addEventListener('click', () => startGame('hard'));

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'escape' && currentGame !== null) {
    showDifficultySelection();
  }
});

showDifficultySelection();