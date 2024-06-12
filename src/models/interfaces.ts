import { ButtonAppearanceType, CardAppearanceType, IconButtonAppearanceType, TagAppearanceType } from "@models/appearances";
import { ButtonTypeAttributeType } from "@models/attributes";
import { SizeType } from "@models/size.type";
import { AllVariantsType, SurfaceVariantType } from "@models/variants";
import { OrientationType } from "./orientation.type";

export interface ButtonConfig {
    type?: ButtonTypeAttributeType,
    mode?: ButtonAppearanceType,
    size?: SizeType,
    variant?: AllVariantsType,
    isDisabled?: boolean,
    leadingIcon?: object,
    trailingIcon?: object,
}

export interface TagConfig {
    mode?: TagAppearanceType,
    size?: SizeType,
    variant?: AllVariantsType,
    isDisabled?: boolean,
    interactive?: boolean,
    leadingIcon?: object,
    trailingIcon?: object,
}

export interface IconButtonConfig {
    isDisabled?: boolean,
    icon?: object,
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
    leadingIcon?: object,
    trailingIcon?: object,
    isDisabled?: boolean,
}

export interface AvatarConfig {
    size?: SizeType,
    variant?: SurfaceVariantType,
    image?: string,
    interactive?: boolean,
}