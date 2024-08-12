import { OrientationType } from "@models/orientation.type";
import { SizeType } from "@models/size.type";
import { RadioVariantType } from "./IdsRadioVariant.type";
import { PositionType } from "@models/position.type";

export interface IdsRadioGroupProps {
  is?: string;
  name?: string;
  required?: boolean;
  size?: SizeType;
  variant?: RadioVariantType;
  orientation?: OrientationType;
  labelPosition?: PositionType;
  isValid?: boolean;
  disabled?: boolean;
}