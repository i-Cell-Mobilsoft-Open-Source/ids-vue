import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
import { Component } from "vue";
import { IdsTagAppearanceType } from "@components/tag/models/IdsTagAppearance.type";

/**
 * Props for the IdsTag component
 */
export interface IdsTagProps {
  /**
   * The URL that the tag links to, if the tag is clickable
   */
  link?: string;

  /**
   * The size of the tag component
   */
  size?: SizeType;

  /**
   * Determines if the tag is interactive (e.g., clickable)
   */
  interactive?: boolean;

  /**
   * The icon to display before the tag's text
   */
  leadingIcon?: Component;

  /**
   * The icon to display after the tag's text
   */
  trailingIcon?: Component;

  /**
   * The variant/style of the tag
   */
  variant?: AllVariantsType;

  /**
   * The appearance style of the tag
   */
  appearance?: IdsTagAppearanceType;
}