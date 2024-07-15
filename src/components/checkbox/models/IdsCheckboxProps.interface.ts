import { SizeType } from "@models/size.type";
import { CheckboxVariantType } from './IdsCheckboxVariant.type';

/**
 * Props for the IdsCheckbox component
 */
export interface IdsCheckboxProps {
  /**
   * The size of the checkbox
   */
  size?: SizeType;

  /**
   * The variant of the checkbox
   */
  variant?: CheckboxVariantType;

  /**
   * Determines if the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Determines if the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Indicates if the checkbox value is valid
   */
  isValid?: boolean;

  /**
   * The id of the checkbox
   */
  id?: string;

  /**
   * The value of the checkbox
   */
  value?: string | boolean | null;

  /**
   * The name of the checkbox
   */
  name?: string;

  /**
   * The tabindex of the checkbox
   */
  tabindex?: number;

  /**
   * Determines if the checkbox is read-only
   */
  readonly?: boolean;

  /**
   * Determines if the checkbox is required
   */
  required?: boolean;
}

