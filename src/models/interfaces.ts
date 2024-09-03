import { 
        CardAppearanceType,
        AccordionAppearanceType, 
        } from "@models/appearances";
import { SizeType } from "@models/size.type";
import { AllVariantsType, SurfaceVariantType } from "@models/variants";
import { Component } from "vue";

export interface AccordionConfig {
    size?: SizeType,
    isExpanded?: boolean,
    isDisabled?: boolean,
    appearance?: AccordionAppearanceType,
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
