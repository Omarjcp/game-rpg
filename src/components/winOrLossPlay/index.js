import { dayota } from "../../App";
import { BossKiba } from "../../objects/bosses";
import { Character } from "../../objects/character";

export const LosserGameOrWinPlayer = ({
  characterData,
  bossData,
  bossKiba,
  bossInit,
  setCharacterData,
  setBossData,
}) => {
  const onNextLevel = () => {
    // dayota.experience = dayota.experience + bossData.experienceDrop;
    // dayota.level =
    //   dayota.experience >= dayota.level * 2 ? dayota.level + 1 : dayota.level;
    // dayota.heal = dayota.level + 10;
    // dayota.pkb = dayota.pkb + bossData.pkbDrop;
    // dayota.levelBoss = dayota.levelBoss + 1;
    setCharacterData({
      ...characterData,
      experience: characterData.experience + bossData.experienceDrop,
      heal: characterData.level + 10,
      pkb: characterData.pkb + bossData.pkbDrop,
      levelBoss: characterData.levelBoss + 1,
    });

    // bossKiba.level = bossData.level + 1;
    // bossKiba.heal = (bossData.level + 1) * 4;
    // bossKiba.experienceDrop = (bossData.level + 1) * 2;
    // bossKiba.name = `Kiba lvl ${bossData.level + 1}`;
    // bossKiba.pkbDrop = bossData.level + 1;
    // bossKiba.power = Math.round(Math.random() * bossData.level + 1);

    setBossData({
      ...bossData,
      level: bossData.level + 1,
      experienceDrop: (bossData.level + 1) * 1.5,
      heal: (bossData.level + 1) * 4,
      name: `Kiba lvl ${bossData.level + 1}`,
      pkbDrop: bossData.level + 1,
      power: Math.round(Math.random() * bossData.level + 1),
    });
  };

  const onTryAgainBoss = () => {
    characterData.heal = dayota.heal;
  };

  return characterData.heal < 1 ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>GAME OVER {characterData.nickname}</div>
      <br />
      <img
        style={{ width: "150px" }}
        src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/30/42/91/30429165-4aca-a6d6-69ec-5c62224c5b24/source/512x512bb.jpg"
      />
      <div>{bossData.name} gano</div>
      <button onClick={onTryAgainBoss}>Try again</button>
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>WINNER {characterData.nickname}</div>
      <img
        style={{ width: "150px" }}
        src="https://images.gnwcdn.com/2013/articles/1/5/9/3/5/4/6/13721868225.png/EG11/resize/480x-1/quality/75/format/jpg"
      />
      <br />
      <br />
      <div>{bossData.name} DEAD</div>
      <br />
      <button onClick={onNextLevel}>Next boss</button>
    </div>
  );
};
