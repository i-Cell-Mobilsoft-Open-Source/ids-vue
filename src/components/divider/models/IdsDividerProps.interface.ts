import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
import { OrientationType } from "@models/orientation.type";

/**
 * Props for the IdsDivider component
 */
export interface IdsDividerProps {
  /**
   * The orientation of the divider (e.g., horizontal or vertical)
   */
  type?: OrientationType;

  /**
   * The thickness or size of the divider
   */
  size?: SizeType;

  /**
   * The variant/style of the divider
   */
  variant?: AllVariantsType;
}