  export const ActionPanelAppearance = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
    ELEVATED: 'elevated'
  } as const;
  
  export type ActionPanelAppearanceType = (typeof ActionPanelAppearance)[keyof typeof ActionPanelAppearance];
  
  export const ActionItemAppearance = {
    FILLED: 'filled',
    TEXT: 'text'
  } as const;
  
  export type ActionItemAppearanceType = (typeof ActionItemAppearance)[keyof typeof ActionItemAppearance];
  
  export const AccordionAppearance = {
    FILLED: 'filled',
    TEXT: 'text'
  } as const;
  
  export type AccordionAppearanceType = (typeof AccordionAppearance)[keyof typeof AccordionAppearance];
  
  export const CardAppearance = {
    FILLED: 'filled',
    OUTLINED: 'outlined',
    ELEVATED: 'elevated'
  } as const;
  
  export type CardAppearanceType = (typeof CardAppearance)[keyof typeof CardAppearance];
  
  