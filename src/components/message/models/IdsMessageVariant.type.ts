export const MessageVariant = {
  LIGHT: 'light',
  DARK: 'dark',
  SURFACE: 'surface'
} as const;

export type MessageVariantType = (typeof MessageVariant)[keyof typeof MessageVariant];