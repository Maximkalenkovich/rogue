class BaseGame {
  constructor() {
    this.width = 40;
    this.height = 24;
    this.map = [];
    this.hero = { x: 0, y: 0, health: 100, attack: 20 };
    this.enemies = [];
    this.enemyMovementInterval = null;
  }
  init() {
    generateMap(this);
    placeItems(this);
    this.placeHero();
    this.placeEnemies();
    render(this);
    this.addHeroListeners();
    this.startEnemyMovement();
  }

  cleanup() {
    if (this.enemyMovementInterval) {
      clearInterval(this.enemyMovementInterval);
      this.enemyMovementInterval = null;
    }
  }

  placeHero() {}
  placeEnemies() {}
  addHeroListeners() {}
  startEnemyMovement() {}
}