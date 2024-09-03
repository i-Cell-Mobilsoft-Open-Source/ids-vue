export const IdsActionItemTypeAttribute = {
  BUTTON: 'button',
  LINK: 'link'
} as const;

export type IdsActionItemTypeAttributeType = (typeof IdsActionItemTypeAttribute)[keyof typeof IdsActionItemTypeAttribute];