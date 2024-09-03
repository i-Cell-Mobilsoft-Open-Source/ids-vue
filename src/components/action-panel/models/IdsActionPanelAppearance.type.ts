export const IdsActionPanelAppearance = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
  ELEVATED: 'elevated'
} as const;

export type IdsActionPanelAppearanceType = (typeof IdsActionPanelAppearance)[keyof typeof IdsActionPanelAppearance];