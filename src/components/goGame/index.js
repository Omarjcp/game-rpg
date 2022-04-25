import { Play } from "./play";
import { LosserGameOrWinPlayer } from "./winOrLossPlay";

export const ConditionalPlay = ({
  characterData,
  setCharacterData,
  bossData,
  setBossData,
}) => {
  return characterData.heal < 1 || bossData.heal < 1 ? (
    <LosserGameOrWinPlayer
      characterData={characterData}
      bossData={bossData}
      setBossData={setBossData}
      setCharacterData={setCharacterData}
    />
  ) : (
    <Play
      characterData={characterData}
      bossData={bossData}
      setCharacterData={setCharacterData}
      setBossData={setBossData}
    />
  );
};
