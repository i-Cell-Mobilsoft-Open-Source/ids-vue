export const IdsButtonTypeAttribute = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  RESET: 'reset'
} as const;

export type IdsButtonTypeAttributeType = (typeof IdsButtonTypeAttribute)[keyof typeof IdsButtonTypeAttribute];