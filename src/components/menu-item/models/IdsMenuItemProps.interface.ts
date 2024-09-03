import { SizeType } from "@models/size.type";
import { Component } from "vue";
import { IdsMenuItemTypeAttributeType } from "@components/menu-item/models/IdsMenuItemTypeAttribute.type";
import { IdsMenuItemAppearanceType } from "@components/menu-item/models/IdsMenuItemAppearance.type";
import { IdsMenuItemVariantType } from "@components/menu-item/models/IdsMenuItemVariant.type";

export interface IdsMenuItemProps {
  link?: string,
  size?: SizeType,
  isActive?: boolean,
  variant?: IdsMenuItemVariantType,
  disabled?: boolean,
  interactive?: boolean,
  type?: IdsMenuItemTypeAttributeType,  
  leadingIcon?: Component,
  trailingIcon?: Component,
  appearance?: IdsMenuItemAppearanceType,
}