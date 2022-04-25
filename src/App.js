import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import "./App.scss";
import { DataChart } from "./components/dataChart";
import { Footer } from "./components/footer";
import { ConditionalPlay } from "./components/goGame";
import { Home } from "./components/home";
import { Store } from "./components/store";
import { BossKiba } from "./objects/bosses";
import { Character, characterDb } from "./objects/character";

export let dayota = new Character(
  characterDb.nickname,
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
    console.log("PRIMERA VEZ", characterData);
  }, []);

  useEffect(() => {
    console.log("Click next", characterData);
  }, [
    characterData.levelBoss,
    characterData.pkb,
    characterData.power,
    characterData.experience,
  ]);

  return (
    <>
      <Route
        exact
        path="/play"
        render={() => (
          <ConditionalPlay
            characterData={characterData}
            setCharacterData={setCharacterData}
            bossData={bossData}
            setBossData={setBossData}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={() => <Home characterData={characterData} />}
      />
      <Route
        exact
        path="/store"
        render={() => (
          <Store
            characterData={characterData}
            setCharacterData={setCharacterData}
          />
        )}
      />
      <Route
        path="/"
        render={() => <DataChart characterData={characterData} />}
      />
    </>
  );
}

export default App;
