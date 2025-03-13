class GameHard extends BaseGame {
  constructor() {
    super();
    this.hero.attack = 10;
  }

  init() {
    super.init();
  }

  placeHero() {
    placeHeroHard(this);
  }

  placeEnemies() {
    placeEnemiesHard(this);
  }

  addHeroListeners() {
    addHeroListenersHard(this);
  }

  startEnemyMovement() {
    startEnemyMovementHard(this);
  }
}