export const CheckboxVariant = {
  LIGHT: 'light',
  DARK: 'dark',
  SURFACE: 'surface'
} as const;

export type CheckboxVariantType = (typeof CheckboxVariant)[keyof typeof CheckboxVariant];