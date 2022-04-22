export const atackBoss = (setCharacterData, characterData, boss) => {
  //boss ataca a personaje y baja vida
  setTimeout(() => {
    setCharacterData({
      ...characterData,
      ["heal"]: characterData.heal - Math.round(Math.random() * boss.power),
    });
  }, 200);
};

export const characterAtack = (setBossData, bossData, characterData) => {
  setTimeout(() => {
    setBossData({
      ...bossData,
      ["heal"]: bossData.heal - Math.round(Math.random() * characterData.power),
    });
  }, 200);
};
