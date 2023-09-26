const ROUND_DOWN_FACTOR = 10;

export const calculateProgressValue = (
  experiencesFormFieldCount: number,
  projectsFormFieldCount: number,
  activitiesFormFieldCount: number,
  errorCount: number
) => {
  const hasExperienceForm = experiencesFormFieldCount && 1;
  const hasProjectForm = projectsFormFieldCount && 1;
  const hasActivityForm = activitiesFormFieldCount && 1;

  const createdFormCount =
    hasExperienceForm + hasProjectForm + hasActivityForm + 1;
  const stepCount = 100 / createdFormCount;
  const validFormCount = createdFormCount - errorCount;
  const progress = stepCount * validFormCount;

  return Math.floor(progress / ROUND_DOWN_FACTOR) * ROUND_DOWN_FACTOR;
};
