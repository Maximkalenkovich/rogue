function placeEnemiesCommon(game, count = 10) {
  let enemyCount = 0;
  while (enemyCount < count) {
    const x = Math.floor(Math.random() * game.width);
    const y = Math.floor(Math.random() * game.height);
    if (game.map[y][x] === ' ' && (x !== game.hero.x || y !== game.hero.y)) {
      game.map[y][x] = 'E';
      game.enemies.push({ x, y, health: 50, attack: 5 });
      enemyCount++;
    }
  }
}

function checkEnemyAttackCommon(game, onHeroDeath) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let enemy of game.enemies) {
    for (let [dx, dy] of directions) {
      if (enemy.x + dx === game.hero.x && enemy.y + dy === game.hero.y) {
        game.hero.health -= enemy.attack;
        if (game.hero.health <= 0) {
          alert('Герой погиб!');
          onHeroDeath();
          return;
        }
      }
    }
  }
  render(game);
}

function moveEnemyCommon(game, enemy, moveStrategy) {
  const { newX, newY } = moveStrategy(game, enemy);
  if (newX >= 0 && newX < game.width && newY >= 0 && newY < game.height &&
    game.map[newY][newX] === ' ' && (newX !== game.hero.x || newY !== game.hero.y)) {
    game.map[enemy.y][enemy.x] = ' ';
    enemy.x = newX;
    enemy.y = newY;
    game.map[newY][newX] = 'E';
    return true;
  }
  return false;
}