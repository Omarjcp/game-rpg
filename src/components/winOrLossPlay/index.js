export const LosserGameOrWinPlayer = ({
  characterData,
  bossData,
  setLevelBoss,
}) => {
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
      <button onClick={() => setLevelBoss(characterData.levelBoss)}>
        Next boss
      </button>
    </div>
  );
};
