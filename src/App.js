import { useState, useEffect } from "react";
import "./App.css";
import { Play } from "./components/play";
import { LosserGameOrWinPlayer } from "./components/winOrLossPlay";
import { bossInit, BossKiba } from "./objects/bosses";
import { Character, characterDb } from "./objects/character";

export let dayota = new Character(
  "dayota",
  characterDb.level,
  characterDb.levelBoss,
  characterDb.experience,
  characterDb.pkb,
  characterDb.power
);

function App() {
  let bossInit = 1;
  let bossKiba = new BossKiba(bossInit);
  const [characterData, setCharacterData] = useState(dayota);
  const [bossData, setBossData] = useState(bossKiba);

  useEffect(() => {
    setCharacterData({
      ...characterData,
      level:
        characterData.experience >= characterData.level * 2
          ? characterData.experience >= (characterData.level + 1) * 2
            ? characterData.level + 2
            : characterData.level + 1
          : characterData.level,
    });

    console.log(bossData);
    console.log(characterData);
  }, [bossData.heal]);

  return (
    <>
      {characterData.heal < 1 || bossData.heal < 1 ? (
        <LosserGameOrWinPlayer
          characterData={characterData}
          bossData={bossData}
          setBossData={setBossData}
          bossKiba={bossKiba}
          bossInit={bossInit}
          setCharacterData={setCharacterData}
        />
      ) : (
        <Play
          characterData={characterData}
          bossData={bossData}
          setCharacterData={setCharacterData}
          bossKiba={bossKiba}
          setBossData={setBossData}
        />
      )}
    </>
  );
}

export default App;
