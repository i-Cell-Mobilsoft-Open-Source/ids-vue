import { 
        TagAppearanceType,
        CardAppearanceType, 
        ButtonAppearanceType, 
        IconButtonAppearanceType, 
        AccordionAppearanceType, 
        } from "@models/appearances";
import { ButtonTypeAttributeType } from "@models/attributes";
import { SizeType } from "@models/size.type";
import { AllVariantsType, ErrorVariantType, SurfaceVariantType } from "@models/variants";
import { OrientationType } from "./orientation.type";
import { Component } from "vue";


export interface ButtonConfig {
    size?: SizeType,
    isDisabled?: boolean,
    leadingIcon?: Component,
    trailingIcon?: Component,
    variant?: AllVariantsType,
    type?: ButtonTypeAttributeType,
    appearance?: ButtonAppearanceType,
}

export interface TagConfig {
    appearance?: TagAppearanceType,
    size?: SizeType,
    variant?: AllVariantsType,
    isDisabled?: boolean,
    interactive?: boolean,
    leadingIcon?: Component,
    trailingIcon?: Component,
    link?: string,
}

export interface AccordionConfig {
    size?: SizeType,
    isExpanded?: boolean,
    isDisabled?: boolean,
    appearance?: AccordionAppearanceType,
}

export interface ActionItemConfig {
    link?: string,
    size?: SizeType,
    isActive?: boolean,
    variant?: "surface",
    isDisabled?: boolean,
    interactive?: boolean,
    type?: "button" | "link",  
    leadingIcon?: Component,
    trailingIcon?: Component,
    appearance?: "text" | "filled",
}

export interface IconButtonConfig {
    isDisabled?: boolean,
    icon?: Component,
    mode?: IconButtonAppearanceType,
    type?: ButtonTypeAttributeType,
    size?: SizeType,
    variant?: AllVariantsType,
}

export interface DividerConfig {
    type?: OrientationType,
    size?: SizeType,
    variant?: AllVariantsType,
    width?: string,
    height?: string,
}

export interface DialogConfig {
    backDrop?: boolean,
    size?: SizeType,
}

export interface CardConfig {
    mode?: CardAppearanceType,
    size?: SizeType,
    variant?: AllVariantsType
    leadingIcon?: Component,
    trailingIcon?: Component,
    isDisabled?: boolean,
}

export interface AvatarConfig {
    size?: SizeType,
    variant?: SurfaceVariantType,
    image?: string,
    interactive?: boolean,
}

export interface CheckboxConfig {
    size?: SizeType,
    variant?: ErrorVariantType,
    disabled?: boolean,
    indeterminate?: boolean,
    invalid?: boolean
    id?: string,
}
