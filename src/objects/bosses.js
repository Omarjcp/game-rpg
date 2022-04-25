export function BossKiba(level) {
  this.name = `Kiba lvl ${level}`;
  this.level = level;
  this.heal = level * 4;
  this.experienceDrop = level * 1.5;
  this.pkbDrop = level + 1;
  this.power = level;
}

// export function BossLvl2(level) {
//   this.name = "Shakin";
//   this.level = level;
//   this.heal = level * 5;
//   this.experienceDrop = level * 4;
//   this.pkbDrop = level;
//   this.power = Math.round(Math.random() * level);
// }
