import { ref, computed, watch, onMounted, ToRef, ModelRef } from 'vue';
import { useSelectionModel } from '@core/composables/SelectionModel';
import { createComponentError } from '@core/utils/CreateError';
import { IdsSegmentedControlItems } from '@components/segmented-control/models/IdsSegmentedControlItems.interface';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { getControlUid } from '@components/segmented-control/utils/IdHandler';

export function useSegmentedControl(
  id: ToRef<string | undefined>,
  multiSelect: ToRef<boolean>,
  size: ToRef<string>,
  variant: ToRef<string>,
  appearance: ToRef<string>,
  disabled: ToRef<boolean>,
  model: ModelRef<unknown>,
  isToggle: boolean,
  componentClass: string,
  minItemCount = 2
) {
  const items = ref<IdsSegmentedControlItems[]>([]);
  const watchNotTrigger = ref<boolean>(false);

  const { selected, select, deselect, isSelected, clear } = useSelectionModel<IdsSegmentedControlItems>(
    [],
    multiSelect.value,
    false,
    (o1, o2) => o1.id === o2.id,
  );

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, size.value)]: !!size.value,
    [addClassPrefix(componentClass, variant.value)]: !!variant.value,
    [addClassPrefix(componentClass, appearance.value)]: !!appearance.value,
    [addClassPrefix(componentClass, 'disabled')]: disabled.value,
  }));

  const segmentedControlId = computed<string>(() => {
    return id.value !== undefined ? id.value : `${componentClass}-${getControlUid(isToggle)}`;
  });

  const setRole = computed<string>(() => {
    return multiSelect.value ? 'group' : 'radiogroup';
  });

  onMounted(() => {
    if (items.value.length < minItemCount) {
      throw new Error(
        createComponentError(componentClass, `Invalid count of segmented control items. Minimum item count is ${minItemCount}.`),
      );
    }

    select(...items.value.filter((item) => item.selected));
  });

  watch(
    model,
    (newValue) => {
      if (!watchNotTrigger.value) {
        setSelectionByValue(newValue);
      }
      watchNotTrigger.value = false;
    },
    { immediate: true }
  );

  function handleKeyDown(event: KeyboardEvent): void {
    const navigationKeys = ['ArrowLeft', 'ArrowRight', 'Enter'];
    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    const target = event.target as HTMLButtonElement;
    const buttonId = target.id;
    const index = items.value.findIndex((item) => item.id === buttonId);
    switch (event.key) {
      case 'ArrowLeft':
        if (index > 0) {
          const prevIndex = getSiblingItemIndex(index, -1);
          const prevItem = items.value[prevIndex]?.ref;
          prevItem?.focus();
        }
        break;
      case 'ArrowRight':
        if (index < items.value.length - 1) {
          const nextIndex = getSiblingItemIndex(index, 1);
          const nextItem = items.value[nextIndex]?.ref;
          nextItem?.focus();
        }
        break;
      case 'Enter':
        onSelect(items.value[index], isSelected(items.value[index]));
        break;
    }
  }

  function getSiblingItemIndex(index: number, offset: number): number {
    const nextIndex = index + offset;
    if (nextIndex >= items.value.length || nextIndex < 0) {
      return index;
    }
    return nextIndex;
  }

  function isItemPreSelectedByValue(itemValue: unknown): boolean {
    if (model.value === undefined) {
      return false;
    }

    if (Array.isArray(model.value)) {
      return model.value.some((value) => itemValue !== null && value === itemValue);
    }

    return itemValue === model.value;
  }

  function onSelect(selectedValue: IdsSegmentedControlItems, selected: boolean) {
    watchNotTrigger.value = true;
    if (!multiSelect.value) {
      clear();
    }

    if (!selected) {
      select(selectedValue);
    } else {
      deselect(selectedValue);
    }

   model.value =  getSelectedValue();
  }

  function getSelectedValue(): unknown {
    const mappedValue = selected.value.map((item) => item.value);
    return multiSelect.value ? mappedValue : mappedValue[0];
  }

  function setSelectionByValue(value: unknown | unknown[]): void {
    if (items.value.length === 0) {
      return;
    }

    if (multiSelect.value && !Array.isArray(value)) {
      throw new Error(createComponentError(componentClass, 'Value must be an array in multiple-selection mode'));
    }
    clear();
    Array.isArray(value) ? value.forEach((currentValue) => selectValue(currentValue)) : selectValue(value);
  }

  function selectValue(value: unknown): void {
    const correspondingItem = items.value.find((item) => item.value === value);
    if (correspondingItem) {
      select(correspondingItem);
    }
  }

  function initItems(value: IdsSegmentedControlItems): void {
    items.value = [...items.value, value];
  }

  return {
    items,
    classObject,
    selected,
    segmentedControlId,
    setRole,
    handleKeyDown,
    initItems,
    onSelect,
    isSelected,
    clear,
    getSelectedValue,
    setSelectionByValue,
    isItemPreSelectedByValue,
  };
}
