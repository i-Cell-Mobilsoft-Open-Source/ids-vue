import { SizeType } from "@models/size.type";
import { Component } from "vue";
import { IdsActionItemTypeAttributeType } from "@components/action-item/models/IdsActionItemTypeAttribute.type";
import { IdsActionItemAppearanceType } from "@components/action-item/models/IdsActionItemAppearance.type";
import { IdsActionItemVariantType } from "@components/action-item/models/IdsActionItemVariant.type";

export interface IdsActionItemProps {
  link?: string,
  size?: SizeType,
  isActive?: boolean,
  variant?: IdsActionItemVariantType,
  disabled?: boolean,
  interactive?: boolean,
  type?: IdsActionItemTypeAttributeType,  
  leadingIcon?: Component,
  trailingIcon?: Component,
  appearance?: IdsActionItemAppearanceType,
}