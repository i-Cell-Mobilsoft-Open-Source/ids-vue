import { OrientationType } from "@models/orientation.type";
import { SizeType } from "@models/size.type";
import { RadioVariantType } from "./IdsRadioVariant.type";
import { PositionType } from "@models/position.type";

/**
 * Props for the IdsRadioGroup component
 */
export interface IdsRadioGroupProps {
  /**
   * The id of the radio group
   */
  id?: string;

  /**
   * The name attribute for the radio group, used for form submission
   */
  name?: string;

  /**
   * Specifies if the radio group is required in a form
   */
  required?: boolean;

  /**
   * The size of the radio buttons in the group
   */
  size?: SizeType;

  /**
   * The variant/style of the radio group
   */
  variant?: RadioVariantType;

  /**
   * The orientation of the radio buttons in the group (e.g., horizontal or vertical)
   */
  orientation?: OrientationType;

  /**
   * The position of the label relative to the radio buttons (e.g., left, right, top, bottom)
   */
  labelPosition?: PositionType;

  /**
   * Indicates if the radio group is in a valid state
   */
  isValid?: boolean;

  /**
   * Determines if the radio group is disabled
   */
  disabled?: boolean;
}