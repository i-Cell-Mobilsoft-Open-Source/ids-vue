import { ref, computed, inject, onMounted, ToRef, Ref } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import mdiCheck from '@mdi/svg/svg/check.svg?component';
import { IdsSegmentedControlInjectedAttributes } from '@components/segmented-control/models/IdsSegmentedControlInjectedAttributes.interface';
import { IdsSegmentedControlItems } from '@components/segmented-control/models/IdsSegmentedControlItems.interface';
import { getItemUid } from '@components/segmented-control/utils/IdHandler';
import { SegmentedControlAttributes } from '@core/utils/Keys';

export function useSegmentedControlItem(
  id: ToRef<string | undefined>,
  name: ToRef<string | undefined>,
  value: ToRef<unknown>,
  disabled: ToRef<boolean>,
  selectionControlItem: Ref,
  isToggle: boolean,
  componentClass: string,
) {
  const iconChecked = mdiCheck;

  const defaultValue: IdsSegmentedControlInjectedAttributes = {
    disabledValue: ref(false),
    nameValue: ref(undefined),
    multiSelectValue: ref(false),
    onSelect: () => {},
    initItems: () => {},
    isItemPreSelectedByValue: () => false,
    selected: computed<IdsSegmentedControlItems[]>(() => []),
    isSelected: () => false,
  };

  const { 
    disabledValue,
    nameValue,
    multiSelectValue, 
    onSelect, 
    initItems, 
    isItemPreSelectedByValue, 
    selected, 
    isSelected 
  } = inject<IdsSegmentedControlInjectedAttributes>(SegmentedControlAttributes) || defaultValue;
  
  onMounted(() => {
    initItems!({ ...item, selected: isItemPreSelectedByValue!(value.value), ref: selectionControlItem.value });
  });

  const getParentIsDisabled = computed<boolean>(() => {
    return disabledValue ? disabledValue.value : false;
  });

  const isDisabled = computed<boolean>(() => {
    return getParentIsDisabled.value ? getParentIsDisabled.value : disabled.value;
  });
  
  const controlId = computed<string>(() => {
    return id.value !== undefined ? id.value : `${componentClass}-${getItemUid(isToggle)}`;
  });

  const item: IdsSegmentedControlItems = { id: controlId.value, value: value.value };

  const selectedValue = computed<boolean>(() => {
    return selected ? isSelected(item) : false;
  });

  const buttonName = computed(() => (multiSelectValue?.value ? name.value : nameValue?.value));
  const ariaPressed = computed(() => (multiSelectValue?.value ? selectedValue.value : undefined));
  const ariaChecked = computed(() => (!multiSelectValue?.value ? selectedValue.value : undefined));
  const role = computed(() => (multiSelectValue?.value ? 'button' : 'radio'));

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, 'selected')]: selectedValue.value,
  }));

  return {
    componentClass,
    iconChecked,
    selectionControlItem,
    isDisabled,
    controlId,
    item,
    selectedValue,
    buttonName,
    ariaPressed,
    ariaChecked,
    role,
    classObject,
    onSelect,
  };
}
