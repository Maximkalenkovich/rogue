function placeEnemies(game) {
  placeEnemiesCommon(game);
}

function startEnemyMovement(game) {
  game.enemyMovementInterval = setInterval(() => {
    for (let enemy of game.enemies) {
      const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
      const [dx, dy] = directions[Math.floor(Math.random() * 4)];
      const moveStrategy = () => ({ newX: enemy.x + dx, newY: enemy.y + dy });
      moveEnemyCommon(game, enemy, moveStrategy);
    }
    render(game);
    checkEnemyAttack(game);
  }, 1000);
}

function checkEnemyAttack(game) {
  checkEnemyAttackCommon(game, showDifficultySelection);
}