function render(game) {
  const field = document.querySelector('.field');
  field.innerHTML = '';

  for (let y = 0; y < game.height; y++) {
    for (let x = 0; x < game.width; x++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      const tileType = game.map[y][x];

      if (tileType === 'W') tile.classList.add('tileW');
      else if (tileType === 'E') tile.classList.add('tileE');
      else if (tileType === 'P') tile.classList.add('tileP');
      else if (tileType === 'H') tile.classList.add('tileHP');
      else if (tileType === 'S') tile.classList.add('tileSW');

      if (tileType === 'P') {
        const healthBar = document.createElement('div');
        healthBar.classList.add('health');
        healthBar.style.width = `${game.hero.health}%`;
        tile.appendChild(healthBar);
      } else if (tileType === 'E') {
        const enemy = game.enemies.find((e) => e.x === x && e.y === y);
        if (enemy) {
          const healthBar = document.createElement('div');
          healthBar.classList.add('health');
          healthBar.style.width = `${(enemy.health / 50) * 100}%`;
          tile.appendChild(healthBar);
        }
      }

      tile.style.left = `${x * 30}px`;
      tile.style.top = `${y * 30}px`;
      field.appendChild(tile);
    }
  }
}
