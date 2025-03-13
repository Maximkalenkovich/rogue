function placeEnemiesHard(game) {
  placeEnemiesCommon(game);
}

function startEnemyMovementHard(game) {
  game.enemyMovementInterval = setInterval(() => {
    for (let enemy of game.enemies) {
      let moved = false;
      const dx = game.hero.x - enemy.x;
      const dy = game.hero.y - enemy.y;
      let newX = enemy.x;
      let newY = enemy.y;
      if (Math.abs(dx) > Math.abs(dy)) {
        newX += dx > 0 ? 1 : -1;
      } else if (dy !== 0) {
        newY += dy > 0 ? 1 : -1;
      }
      const pursueStrategy = () => ({ newX, newY });
      moved = moveEnemyCommon(game, enemy, pursueStrategy);

      if (!moved) {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        const [randDx, randDy] = directions[Math.floor(Math.random() * 4)];
        const randomStrategy = () => ({ newX: enemy.x + randDx, newY: enemy.y + randDy });
        moveEnemyCommon(game, enemy, randomStrategy);
      }
    }
    render(game);
    checkEnemyAttackHard(game);
  }, 1000);
}

function checkEnemyAttackHard(game) {
  checkEnemyAttackCommon(game, showDifficultySelection);
}