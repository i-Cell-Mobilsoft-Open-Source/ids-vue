export const IdsActionItemAppearance = {
  FILLED: 'filled',
  TEXT: 'text',
} as const;

export type IdsActionItemAppearanceType = (typeof IdsActionItemAppearance)[keyof typeof IdsActionItemAppearance];