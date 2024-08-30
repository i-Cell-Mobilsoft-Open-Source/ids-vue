import { 
        CardAppearanceType,
        AccordionAppearanceType, 
        } from "@models/appearances";
import { SizeType } from "@models/size.type";
import { AllVariantsType, SurfaceVariantType } from "@models/variants";
import { OrientationType } from "./orientation.type";
import { Component } from "vue";

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
