import { ComputedRef, DeepReadonly, Ref } from "vue";
import { IdsRadioItems } from "@components/radio/models/IdsRadioItems.interface";
import { PositionType } from "@models/position.type";
import { RadioVariantType } from "@components/radio/models/IdsRadioVariant.type";

export interface IdsRadioInjectedAttributes {
  disabledValue?: DeepReadonly<Ref<boolean>>,
  nameValue?: DeepReadonly<Ref<string | undefined>>,
  variantValue?: DeepReadonly<Ref<RadioVariantType | undefined>>,
  labelPositionValue?: DeepReadonly<Ref<PositionType | undefined>>,
  requiredValue?: DeepReadonly<Ref<boolean>>,
  onSelect?: (value1: IdsRadioItems, value2: boolean) => void,
  initItems?: (value: IdsRadioItems) => void,
  isItemPreSelectedByValue?: (value: unknown) => boolean,
  selected:  ComputedRef<IdsRadioItems[]>;
  isSelected: (value: IdsRadioItems) => boolean
}