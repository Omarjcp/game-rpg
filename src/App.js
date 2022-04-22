import { useState, useEffect } from "react";
import { atackBoss, characterAtack } from "./actionsPlay/atack";
import "./App.css";
import { Play } from "./components/play";
import { LosserGameOrWinPlayer } from "./components/winOrLossPlay";
import { BossKiba, BossLvl1 } from "./objects/bosses";
import { Character } from "./objects/character";

function App() {
  const [levelBoss, setLevelBoss] = useState(1);
  let dayota = new Character("dayota", 1, levelBoss);
  let bossKiba = new BossKiba(levelBoss);

  const [characterData, setCharacterData] = useState(dayota);
  const [bossData, setBossData] = useState(bossKiba);
  console.log(dayota);
  return (
    <>
      {characterData.heal < 1 || bossData.heal < 1 ? (
        <LosserGameOrWinPlayer
          setLevelBoss={setLevelBoss}
          characterData={characterData}
          bossData={bossData}
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
