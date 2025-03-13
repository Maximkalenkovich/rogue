class Game extends BaseGame {
  constructor() {
    super();
  }

  init() {
    super.init();
  }

  placeHero() {
    placeHero(this);
  }

  placeEnemies() {
    placeEnemies(this);
  }

  addHeroListeners() {
    addHeroListeners(this);
  }

  startEnemyMovement() {
    startEnemyMovement(this);
  }
}