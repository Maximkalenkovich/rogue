function placeHero(game) {
  placeHeroCommon(game);
}

function addHeroListeners(game) {
  addHeroListenersCommon(game, attackEnemies, checkEnemyAttack);
}

function attackEnemies(game) {
  attackEnemiesCommon(game);
}