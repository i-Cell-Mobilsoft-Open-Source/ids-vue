/**
 * Props for the IdsRadioItem component
 */
export interface IdsRadioItemProps {
  /**
   * The id of the radio item
   */
  id?: string;

  /**
   * The value associated with the radio item, typically used for form submission
   */
  value: unknown;

  /**
   * Provides an accessible label for the radio item, useful when a visible label is not present
   */
  ariaLabel?: string;

  /**
   * References the id of an element that labels the radio item, for accessibility purposes
   */
  ariaLabelledBy?: string;

  /**
   * References the id of an element that describes the radio item, for accessibility purposes
   */
  ariaDescribedBy?: string;

  /**
   * Specifies the tab order of the radio item
   */
  tabindex?: number;

  /**
   * Determines if the radio item is disabled
   */
  disabled?: boolean;
}
