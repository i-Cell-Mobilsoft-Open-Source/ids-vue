export const IdsActionItemVariant = {
  SURFACE: 'surface'
} as const;

export type IdsActionItemVariantType = (typeof IdsActionItemVariant)[keyof typeof IdsActionItemVariant];