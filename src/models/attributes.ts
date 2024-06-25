export const ButtonTypeAttribute = {
    SUBMIT: 'submit',
    BUTTON: 'button',
    RESET: 'reset'
  } as const;
  
  export type ButtonTypeAttributeType = (typeof ButtonTypeAttribute)[keyof typeof ButtonTypeAttribute];