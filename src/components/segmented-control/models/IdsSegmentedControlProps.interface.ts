import { SizeType } from "@models/size.type.ts";
import { SegmentedControlAppearanceType } from "@components/segmented-control/models/IdsSegmentedControlAppearance.type.ts";
import { SegmentedControlVariantType } from "@components/segmented-control/models//IdsSegmentedControlVariant.type.ts";

/**
 * Props for the IdsSegmentedControl component
 */
export interface IdsSegmentedControlProps {
  /**
   * The unique identifier for the segmented control
   */
  id?: string;

  /**
   * The name attribute for the segmented control, useful for form submissions
   */
  name?: string;

  /**
   * The size of the segmented control component
   */
  size?: SizeType;

  /**
   * The variant/style of the segmented control
   */
  variant?: SegmentedControlVariantType;

  /**
   * The appearance style of the segmented control
   */
  appearance?: SegmentedControlAppearanceType;

  /**
   * Determines if multiple segments can be selected simultaneously
   */
  multiSelect?: boolean;

  /**
   * Determines if the segmented control is disabled
   */
  disabled?: boolean;
}
