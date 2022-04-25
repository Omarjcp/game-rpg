export const useConditionals = (characterData, bossData) => {
  const sumExperienceChartMoreExpDrop =
    characterData.experience + bossData.experienceDrop;

  const isExperienceEnoughToLevel =
    sumExperienceChartMoreExpDrop >= characterData.level * 2;

  const nextLevelChart = characterData.level + 1;

  const isExperienceEnoughToUpTwoLevel =
    sumExperienceChartMoreExpDrop >= nextLevelChart * 2;

  const upTwoLevelToChart = characterData.level + 2;

  const resetFullHeal = characterData.level + 10;

  const healOfNextLevel = characterData.level + 11;

  const healOfTwoLevel = characterData.level + 12;

  const upTwoOrOneLevelHeal = isExperienceEnoughToUpTwoLevel
    ? healOfTwoLevel
    : healOfNextLevel;

  const upTwoOrOneLevel = isExperienceEnoughToUpTwoLevel
    ? upTwoLevelToChart
    : nextLevelChart;

  return [
    sumExperienceChartMoreExpDrop,
    isExperienceEnoughToLevel,
    resetFullHeal,
    upTwoOrOneLevelHeal,
    upTwoOrOneLevel,
  ];
};
