import { atackBoss, characterAtack } from "../../actionsPlay/atack";

export const Play = ({
  characterData,
  bossData,
  setCharacterData,
  bossKiba,
  setBossData,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
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
        <span>
          lvl.{characterData.level} {characterData.nickname}
        </span>
        <img
          style={{ width: "150px" }}
          src="https://images.gnwcdn.com/2013/articles/1/5/9/3/5/4/6/13721868225.png/EG11/resize/480x-1/quality/75/format/jpg"
        />
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
        <span>{bossData.name}</span>
        <img
          style={{ width: "150px" }}
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/30/42/91/30429165-4aca-a6d6-69ec-5c62224c5b24/source/512x512bb.jpg"
          onClick={() => (
            atackBoss(setCharacterData, characterData, bossKiba),
            characterAtack(setBossData, bossData, characterData)
          )}
        />
      </div>
    </div>
  );
};
