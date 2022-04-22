export const atackBoss = (setCharacterData, characterData, boss) => {
  //boss ataca a personaje y baja vida
  setTimeout(() => {
    setCharacterData({
      ...characterData,
      ["heal"]: characterData.heal - boss.power,
    });
  }, 200);
};

export const characterAtack = (setBossData, bossData, characterData) => {
  setBossData({
    ...bossData,
    ["heal"]: bossData.heal - characterData.power,
  });
};
