export function Character(nickname, level, levelBoss) {
  this.nickname = nickname;
  this.level = 1;
  this.heal = level + 10;
  this.experience = 0;
  this.pkb = 0;
  this.power = 1;
  this.levelBoss = levelBoss;
}
