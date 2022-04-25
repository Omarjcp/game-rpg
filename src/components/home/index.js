import { useHistory } from "react-router-dom";
import { Footer } from "../footer";

import "./index.scss";

export const Home = ({ characterData }) => {
  const history = useHistory();

  const onPlay = () => {
    history.push("/play");
  };

  const onStore = () => {
    history.push("/store");
  };

  const onCharacter = (e, nickname) => {
    history.push(`mycharacter/${nickname}`);
  };

  return (
    <div className="container-home">
      <h1 style={{ letterSpacing: "3px" }}>HOME</h1>
      <div className="container-buttons">
        <button className="button-play" onClick={onPlay}>
          Play
        </button>
        <button className="button-store" onClick={onStore}>
          Store
        </button>
        <button
          className="button-character"
          onClick={(e) => onCharacter(e, characterData.nickname)}
        >
          My character
        </button>
      </div>
      <Footer />
    </div>
  );
};
