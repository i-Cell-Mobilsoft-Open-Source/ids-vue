export const IdsMenuItemVariant = {
  SURFACE: 'surface'
} as const;

export type IdsMenuItemVariantType = (typeof IdsMenuItemVariant)[keyof typeof IdsMenuItemVariant];