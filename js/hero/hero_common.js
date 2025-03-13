function placeHeroCommon(game) {
  while (true) {
    const x = Math.floor(Math.random() * game.width);
    const y = Math.floor(Math.random() * game.height);
    if (game.map[y][x] === " ") {
      game.hero.x = x;
      game.hero.y = y;
      game.map[y][x] = "P";
      break;
    }
  }
}

function addHeroListenersCommon(game, attackEnemiesFn, checkEnemyAttackFn) {
  document.addEventListener("keydown", (event) => {
    let newX = game.hero.x;
    let newY = game.hero.y;

    switch (event.key.toLowerCase()) {
      case "w":
      case "arrowup":
        newY--;
        break;
      case "s":
      case "arrowdown":
        newY++;
        break;
      case "a":
      case "arrowleft":
        newX--;
        break;
      case "d":
      case "arrowright":
        newX++;
        break;
      case " ":
        attackEnemiesFn(game);
        return;
    }

    if (newX >= 0 && newX < game.width && newY >= 0 && newY < game.height && game.map[newY][newX] !== "W" && game.map[newY][newX] !== "E") {
      game.map[game.hero.y][game.hero.x] = " ";
      game.hero.x = newX;
      game.hero.y = newY;

      if (game.map[newY][newX] === "H") {
        game.hero.health = Math.min(100, game.hero.health + 20);
      } else if (game.map[newY][newX] === "S") {
        game.hero.attack += 5;
      }
      game.map[newY][newX] = "P";
      render(game);
      checkEnemyAttackFn(game);
    }
  });
}

function attackEnemiesCommon(game) {
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let [dx, dy] of directions) {
    const ex = game.hero.x + dx;
    const ey = game.hero.y + dy;
    const enemyIndex = game.enemies.findIndex(e => e.x === ex && e.y === ey);
    if (enemyIndex !== -1) {
      const enemy = game.enemies[enemyIndex];
      enemy.health -= game.hero.attack;
      if (enemy.health <= 0) {
        game.map[enemy.y][enemy.x] = " ";
        game.enemies.splice(enemyIndex, 1);
      }
    }
  }
  render(game);
}