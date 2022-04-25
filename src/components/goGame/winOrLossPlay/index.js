import { useEffect } from "react";
import { useConditionals } from "../../../utils/condicionals";
import { Footer } from "../../footer";

import "./index.scss";

export const LosserGameOrWinPlayer = ({
  characterData,
  bossData,
  setCharacterData,
  setBossData,
}) => {
  const [
    sumExperienceChartMoreExpDrop,
    isExperienceEnoughToLevel,
    resetFullHeal,
    upTwoOrOneLevelHeal,
    upTwoOrOneLevel,
  ] = useConditionals(characterData, bossData);

  const onNextLevel = () => {
    setCharacterData({
      ...characterData,
      experience: isExperienceEnoughToLevel ? 0 : sumExperienceChartMoreExpDrop,
      level: isExperienceEnoughToLevel ? upTwoOrOneLevel : characterData.level,
      heal: isExperienceEnoughToLevel ? upTwoOrOneLevelHeal : resetFullHeal,
      pkb: characterData.pkb + bossData.pkbDrop,
      levelBoss: characterData.levelBoss + 1,
    });

    setBossData({
      ...bossData,
      level: bossData.level + 1,
      experienceDrop: (bossData.level + 1) * 1.5,
      heal: (bossData.level + 1) * 4,
      name: `Kiba lvl ${bossData.level + 1}`,
      pkbDrop: bossData.level + 1,
      power: bossData.level + 1,
    });
  };

  const onTryAgainBoss = () => {
    setCharacterData({
      ...characterData,
      heal: characterData.level + 10,
    });

    setBossData({
      ...bossData,
      heal: bossData.level * 4,
    });
  };

  return characterData.heal < 1 ? (
    <div className="container-gameover">
      <h1>GAME OVER {characterData.nickname}</h1>
      <div className="container-center">
        <label>{bossData.name} WIN</label>
        <div className="container-image">
          <img
            className="image-winlose"
            src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/30/42/91/30429165-4aca-a6d6-69ec-5c62224c5b24/source/512x512bb.jpg"
          />
        </div>

        <button onClick={onTryAgainBoss}>Try again</button>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="container-gameover">
      <h1>WINNER {characterData.nickname}</h1>
      <div className="container-center">
        <label>{bossData.name} DEAD</label>
        <div className="container-image">
          <img
            className="image-winlose"
            src="https://images.gnwcdn.com/2013/articles/1/5/9/3/5/4/6/13721868225.png/EG11/resize/480x-1/quality/75/format/jpg"
          />
        </div>
        <button onClick={onNextLevel}>Next boss</button>
      </div>
      <Footer />
    </div>
  );
};
