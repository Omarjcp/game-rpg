import { useState } from "react";
import { useHistory } from "react-router-dom";
import { atackBoss, characterAtack } from "../../../actionsPlay/atack";
import { Footer } from "../../footer";
import { GoBack } from "../../goBack";

import ImageHit from "../../assets/hit.gif";

import "./index.scss";

export const Play = ({
  characterData,
  bossData,
  setCharacterData,
  setBossData,
}) => {
  const [hit, setHit] = useState(false);

  const onAtack = () => {
    setHit(true);
    atackBoss(setCharacterData, characterData, bossData);
    characterAtack(setBossData, bossData, characterData);
    setTimeout(() => setHit(false), 200);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GoBack />
      <h1 style={{ letterSpacing: "3px" }}>FIGHT!</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>heal {characterData.heal}</span>
          <span style={{ marginBottom: "1rem" }}>
            lvl.{characterData.level} {characterData.nickname}
          </span>
          <div className="container-image">
            {hit ? (
              <img src={ImageHit} style={{ position: "absolute" }} />
            ) : (
              <></>
            )}
            <img
              style={{
                width: "150px",
                height: "200px",
                borderRadius: "1.5rem 0px 1.5rem 0px",
              }}
              src="https://images.gnwcdn.com/2013/articles/1/5/9/3/5/4/6/13721868225.png/EG11/resize/480x-1/quality/75/format/jpg"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>heal {bossData.heal}</span>
          <span style={{ marginBottom: "1rem" }}>{bossData.name}</span>
          <div className="container-image">
            {hit ? (
              <img src={ImageHit} style={{ position: "absolute" }} />
            ) : (
              <></>
            )}
            <img
              style={{
                width: "150px",
                height: "200px",
                borderRadius: "1.5rem 0px 1.5rem 0px",
              }}
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/30/42/91/30429165-4aca-a6d6-69ec-5c62224c5b24/source/512x512bb.jpg"
              onClick={onAtack}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
