import { Component } from "vue";
import { IdsIconButtonAppearanceType } from "@components/icon-button/models/IdsIconButtonAppearance.type";
import { IdsIconButtonTypeAttributeType } from "@components/icon-button/models/IdsButtonTypeAttribute.type";
import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";

/**
 * Props for the IdsIconButton component
 */
export interface IdsIconButtonProps {
  /**
   * Determines if the icon button is disabled
   */
  disabled?: boolean;

  /**
   * The icon to display within the button
   */
  icon?: Component;

  /**
   * The appearance style of the icon button
   */
  appearance?: IdsIconButtonAppearanceType;

  /**
   * The type attribute for the button (e.g., "button", "submit", "reset")
   */
  type?: IdsIconButtonTypeAttributeType;

  /**
   * The size of the icon button component
   */
  size?: SizeType;

  /**
   * The variant/style of the icon button
   */
  variant?: AllVariantsType;
}