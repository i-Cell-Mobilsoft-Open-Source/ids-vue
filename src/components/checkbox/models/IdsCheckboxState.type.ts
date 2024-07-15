export const IdsCheckboxState = {
  CHECKED: "Checked",
  UNCHECKED: "Unchecked",
  INDETERMINATE: "Indeterminate",
} as const;

export type IdsCheckboxStateType = (typeof IdsCheckboxState)[keyof typeof IdsCheckboxState];