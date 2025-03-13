function generateMap(game) {
  for (let y = 0; y < game.height; y++) {
    game.map[y] = [];
    for (let x = 0; x < game.width; x++) {
      game.map[y][x] = "W";
    }
  }

  const roomCount = 5 + Math.floor(Math.random() * 6);
  const rooms = [];
  for (let i = 0; i < roomCount; i++) {
    const roomWidth = 3 + Math.floor(Math.random() * 6);
    const roomHeight = 3 + Math.floor(Math.random() * 6);
    const roomX = Math.floor(Math.random() * (game.width - roomWidth));
    const roomY = Math.floor(Math.random() * (game.height - roomHeight));

    for (let y = roomY; y < roomY + roomHeight; y++) {
      for (let x = roomX; x < roomX + roomWidth; x++) {
        game.map[y][x] = " ";
      }
    }
    rooms.push({
      x: Math.floor(roomX + roomWidth / 2),
      y: Math.floor(roomY + roomHeight / 2)
    });
  }

  for (let i = 1; i < rooms.length; i++) {
    const start = rooms[i - 1];
    const end = rooms[i];

    let x = Math.min(start.x, end.x);
    while (x <= Math.max(start.x, end.x)) {
      game.map[start.y][x] = " ";
      x++;
    }

    let y = Math.min(start.y, end.y);
    while (y <= Math.max(start.y, end.y)) {
      game.map[y][end.x] = " ";
      y++;
    }
  }

  const corridorCount = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < corridorCount; i++) {
    const y = Math.floor(Math.random() * game.height);
    for (let x = 0; x < game.width; x++) {
      game.map[y][x] = " ";
    }
    const x = Math.floor(Math.random() * game.width);
    for (let y = 0; y < game.height; y++) {
      game.map[y][x] = " ";
    }
  }
}

function placeItems(game) {
  let hpCount = 0;
  while (hpCount < 10) {
    const x = Math.floor(Math.random() * game.width);
    const y = Math.floor(Math.random() * game.height);
    if (game.map[y][x] === " ") {
      game.map[y][x] = "H";
      hpCount++;
    }
  }

  let swCount = 0;
  while (swCount < 2) {
    const x = Math.floor(Math.random() * game.width);
    const y = Math.floor(Math.random() * game.height);
    if (game.map[y][x] === " ") {
      game.map[y][x] = "S";
      swCount++;
    }
  }
}