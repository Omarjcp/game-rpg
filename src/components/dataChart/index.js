import "./index.scss";

export const DataChart = ({ characterData }) => {
  return (
    <section className="container-data">
      <label>Charname: {characterData.nickname}</label>
      <label>Level: {characterData.level}</label>
      <label>Heal: {characterData.heal}</label>
      <label>Power: {characterData.power}</label>
      <label>PKB: {characterData.pkb}</label>
      <label>
        Experience: {characterData.experience} / {characterData.level * 2}
      </label>
    </section>
  );
};
