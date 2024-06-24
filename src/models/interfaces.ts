import { AccordionAppearanceType, ButtonAppearanceType, TagAppearanceType } from "@models/appearances";
import { ButtonTypeAttributeType } from "@models/attributes";
import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";
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
