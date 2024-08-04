import { SizeType } from "@models/size.type.ts";
import { SegmentedControlAppearanceType } from "@components/segmented-control/models/IdsSegmentedControlAppearance.type.ts";
import { SegmentedControlVariantType } from "@components/segmented-control/models//IdsSegmentedControlVariant.type.ts";

export interface IdsSegmentedControlProps {
  id?: string;
  name?: string;
  size?: SizeType;
  variant?: SegmentedControlVariantType;
  appearance?: SegmentedControlAppearanceType;
  multiSelect?: boolean;
  disabled?: boolean;
}