import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
import { Component } from "vue";
import { IdsButtonTypeAttributeType } from "@components/button/models/IdsButtonTypeAttribute.type";
import { IdsButtonAppearanceType } from "@components/button/models/IdsButtonAppearance.type";

export interface IdsButtonProps {
  size?: SizeType,
  disabled?: boolean,
  leadingIcon?: Component,
  trailingIcon?: Component,
  variant?: AllVariantsType,
  type?: IdsButtonTypeAttributeType,
  appearance?: IdsButtonAppearanceType,
}
