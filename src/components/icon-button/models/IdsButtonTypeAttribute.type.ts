export const IdsIconButtonTypeAttribute = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  RESET: 'reset'
} as const;

export type IdsIconButtonTypeAttributeType = (typeof IdsIconButtonTypeAttribute)[keyof typeof IdsIconButtonTypeAttribute];