export const isTopForm = (location: number) => location === 0;

export const isBottomForm = (location: number, formCount: number) =>
  location === formCount;
