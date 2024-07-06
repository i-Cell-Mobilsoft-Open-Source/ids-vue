import { SizeType } from "@models/size.type";
import { CheckboxVariantType } from './IdsCheckboxVariant.type';

export interface IdsCheckboxProps {
  size?: SizeType,
  variant?: CheckboxVariantType,
  disabled?: boolean,
  indeterminate?: boolean,
  isValid?: boolean
  id?: string,
  value?: string | boolean | null,
  name?: string,
  checked?: boolean,
  tabindex?: number,
  readonly?: boolean,
  required?: boolean,
}
