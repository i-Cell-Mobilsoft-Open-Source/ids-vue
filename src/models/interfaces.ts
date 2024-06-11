import { ButtonAppearanceType } from "@models/appearances";
import { ButtonTypeAttributeType } from "@models/attributes";
import { SizeType } from "@models/size.type";
import { AllVariantsType } from "@models/variants";

export interface ButtonConfig {
    type?: ButtonTypeAttributeType,
    mode?: ButtonAppearanceType,
    size?: SizeType,
    variant?: AllVariantsType,
    isDisabled?: boolean,
    leadingIcon?: object,
    trailingIcon?: object,
}