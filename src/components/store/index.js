import { useHistory } from "react-router-dom";
import ImagePotion from "../assets/healthpotion.png";
import ImagePowerUp from "../assets/powerup.png";
import { Footer } from "../footer";
import { GoBack } from "../goBack";
import "./index.scss";

export const Store = ({ characterData, setCharacterData }) => {
  const onBuyPowerOrHeal = (e, buyItem) => {
    e.preventDefault();
    if (characterData.pkb >= 2 && buyItem === "power") {
      setCharacterData({
        ...characterData,
        ["power"]: characterData.power + 1,
        ["pkb"]: characterData.pkb - 2,
      });
    } else if (characterData.pkb >= 1 && buyItem === "heal") {
      setCharacterData({
        ...characterData,
        ["heal"]: characterData.heal + 1,
        ["pkb"]: characterData.pkb - 1,
      });
    }
  };

  return (
    <div className="container-store">
      <GoBack />
      <h1 style={{ letterSpacing: "3px" }}>STORE</h1>
      <div>
        <div className="container-buy-power">
          <img src={ImagePowerUp} className="image-power-up" />
          <h3>
            Buy 1 point of Power:
            <button
              className="button-buy"
              onClick={(e) => onBuyPowerOrHeal(e, "power")}
            >
              Buy
            </button>
            <br />
            <span style={{ fontSize: ".9rem" }}>Cost 2 PKB</span>
          </h3>
        </div>
        <div className="container-buy-heal">
          <img src={ImagePotion} className="image-potion" />
          <h3>
            Buy 1 point of Heal:{" "}
            <button
              className="button-buy"
              onClick={(e) => onBuyPowerOrHeal(e, "heal")}
            >
              Buy
            </button>
            <br />
            <span style={{ fontSize: ".9rem" }}>Cost 1 PKB</span>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};
