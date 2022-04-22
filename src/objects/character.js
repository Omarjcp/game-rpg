export let characterDb = {
  nickname: "dayota",
  level: 1,
  levelBoss: 1,
  experience: 0,
  pkb: 0,
  power: 1,
  levelBoss: 1,
};

export function Character(nickname, level, levelBoss, experience, pkb, power) {
  this.nickname = nickname;
  this.level = level;
  this.heal = level + 10;
  this.experience = experience;
  this.pkb = pkb;
  this.power = power;
  this.levelBoss = levelBoss;
}
