import { ComputedRef, DeepReadonly, Ref } from "vue";
import { IdsSegmentedControlItems } from "./IdsSegmentedControlItems.interface";

export interface IdsSegmentedControlInjectedAttributes {
  disabledValue?: DeepReadonly<Ref<boolean>>,
  nameValue?: DeepReadonly<Ref<string | undefined>>,
  multiSelectValue?: DeepReadonly<Ref<boolean>>,
  onSelect?: (value1: IdsSegmentedControlItems, value2: boolean) => void,
  initItems?: (value: IdsSegmentedControlItems) => void,
  isItemPreSelectedByValue?: (value: unknown) => boolean,
  selected:  ComputedRef<IdsSegmentedControlItems[]>;
  isSelected: (value: IdsSegmentedControlItems) => boolean
}