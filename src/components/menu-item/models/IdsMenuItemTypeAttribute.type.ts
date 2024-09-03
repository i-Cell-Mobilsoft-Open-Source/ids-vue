export const IdsMenuItemTypeAttribute = {
  BUTTON: 'button',
  LINK: 'link'
} as const;

export type IdsMenuItemTypeAttributeType = (typeof IdsMenuItemTypeAttribute)[keyof typeof IdsMenuItemTypeAttribute];