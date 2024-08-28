import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
import { Component } from "vue";
import { IdsButtonTypeAttributeType } from "@components/button/models/IdsButtonTypeAttribute.type";
import { IdsButtonAppearanceType } from "@components/button/models/IdsButtonAppearance.type";

/**
 * Props for the IdsButton component
 */
export interface IdsButtonProps {
  /**
   * The size of the button component
   */
  size?: SizeType;

  /**
   * Determines if the button is disabled
   */
  disabled?: boolean;

  /**
   * The icon to display before the button text
   */
  leadingIcon?: Component;

  /**
   * The icon to display after the button text
   */
  trailingIcon?: Component;

  /**
   * The variant/style of the button
   */
  variant?: AllVariantsType;

  /**
   * The type attribute for the button (e.g., "button", "submit", "reset")
   */
  type?: IdsButtonTypeAttributeType;

  /**
   * The appearance style of the button
   */
  appearance?: IdsButtonAppearanceType;
}
