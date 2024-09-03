import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
import { IdsActionPanelAppearanceType } from "@components/action-panel/models/IdsActionPanelAppearance.type";

export interface IdsActionPanelProps {
  appearance?: IdsActionPanelAppearanceType,
  size?: SizeType,
  variant?: AllVariantsType,
}