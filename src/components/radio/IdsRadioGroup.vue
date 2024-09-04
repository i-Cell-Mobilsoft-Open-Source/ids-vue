<script setup lang="ts">
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { Size } from '@models/size.type';
import { computed, ModelRef, onMounted, provide, ref, toRef, watch } from 'vue';
import { IdsRadioGroupProps } from '@components/radio/models/IdsRadioGroupProps.interface';
import { RadioVariant } from '@components/radio/models/IdsRadioVariant.type';
import { Orientation, OrientationType } from '@models/orientation.type';
import { Position, VerticalPosition } from '@models/position.type';
import { IdsRadioItems } from '@components/radio/models/IdsRadioItems.interface';
import { getRadioUid } from '@components/radio/utils/IdHandler';
import { createComponentError } from '@core/utils/CreateError';
import { useSelectionModel } from '@core/composables/SelectionModel';
import { RadioAttributes } from '@core/utils/Keys';
import { IdsRadioInjectedAttributes } from '@components/radio/models/IdsRadioInjectedAttributes.interface';
import { IdsRadioGroupEvents } from '@components/radio//models/IdsRadioGroupEvents.interface';
import { IdsRadioSlots } from '@components/radio/models/IdsRadioSlots.interface';

  const componentClass = 'ids-radio-group';
  const model: ModelRef<unknown> = defineModel<unknown>();
  const radioGroupRef = ref();
  const items = ref<IdsRadioItems[]>([]);
  const watchNotTrigger = ref<boolean>(false);
  defineEmits<IdsRadioGroupEvents>();
  defineSlots<IdsRadioSlots>();

  const { selected, select, deselect, isSelected, clear } = useSelectionModel<IdsRadioItems>(
    [],
    false,
    false,
    (o1, o2) => o1.id === o2.id,
  );
  
  const props = withDefaults(
    defineProps<IdsRadioGroupProps>(),
    {
      id: undefined,
      name: undefined,
      required: false,
      size: Size.COMFORTABLE,
      variant: RadioVariant.SURFACE,
      orientation: Orientation.VERTICAL,
      labelPosition: Position.RIGHT,
      isValid: undefined,
      disabled: false,
    }
  );
  
  onMounted(() => {
    const minItemCount = 2;
    if (items.value.length < minItemCount) {
      throw new Error(
        createComponentError(componentClass, `Invalid count of radio group items. Minimum item count is ${minItemCount}.`),
      );
    }

    if (hasInvalidLabelPosition()) {
      throw new Error(
        createComponentError(componentClass, 'invalid `orientation` + `labelPosition` combination.'),
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

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, props.size)]: !!props.size,
    [addClassPrefix(componentClass, props.orientation)]: !!props.orientation,
    [addClassPrefix(componentClass, props.labelPosition)]: !!props.labelPosition,
    [addClassPrefix(componentClass, 'invalid')]: !validity.value,
  }));

  const radioGroupId = computed<string>(() => {
    return props.id !== undefined ? props.id : `${componentClass}-${getRadioUid(true)}`;
  });

  const validity = computed<boolean>(() => {
    return props.isValid !== undefined ? props.isValid : !props.required ? true : notEmpty.value;
  });

  const notEmpty = computed<boolean>(() => {
    return Array.isArray(model.value) ? model.value.length > 0 : !!model.value;
  });

  const requiredValue = toRef(() => props.required);
  const nameValue = toRef(() => props.name);
  const variantValue = toRef(() => props.variant);
  const labelPositionValue = toRef(() => props.labelPosition);
  const disabledValue = toRef(() => props.disabled);

  provide<IdsRadioInjectedAttributes>(RadioAttributes, 
    { disabledValue, nameValue, variantValue, labelPositionValue, requiredValue, onSelect, initItems, isItemPreSelectedByValue, selected, isSelected }
  );

  function handleKeyDown(event: KeyboardEvent): void {
    const navigationKeys: Record<OrientationType, Set<string>> = {
      horizontal: new Set(['ArrowLeft', 'ArrowRight', 'Enter', ' ']),
      vertical: new Set(['ArrowUp', 'ArrowDown', 'Enter', ' ']),
    };


    if (navigationKeys.horizontal.has(event.key) || navigationKeys.vertical.has(event.key)) {
      event.preventDefault();
    }
    if (!navigationKeys[props.orientation].has(event.key)) {
      return;
    }

    const target = event.target as HTMLInputElement;
    const inputId = target.id;
    const index = items.value.findIndex((item) => item.id === inputId);

    switch (event.key) {
      case 'ArrowUp': {
        if (props.orientation === Orientation.HORIZONTAL) {
          return;
        }
        if (index === 0) {
          return;
        }
        const prevIndex = getEnabledSiblingItemIndex(index, -1);
        const prevItem = items.value[prevIndex].ref;
        prevItem?.focus();
        break;
      }
      case 'ArrowLeft': {
        if (props.orientation === Orientation.VERTICAL) {
          return;
        }
        if (index === 0) {
          return;
        }
        const prevIndex = getEnabledSiblingItemIndex(index, -1);
        const prevItem = items.value[prevIndex].ref;
        prevItem?.focus();
        break;
      }
      case 'ArrowDown': {
        if (props.orientation === Orientation.HORIZONTAL) {
          return;
        }
        if (index === (items.value.length - 1)) {
          return;
        }
        const nextIndex = getEnabledSiblingItemIndex(index, 1);
        const nextItem = items.value[nextIndex]?.ref;
        nextItem?.focus();
        break;
      }
      case 'ArrowRight': {
        if (props.orientation === Orientation.VERTICAL) {
          return;
        }
        if (index === (items.value.length - 1)) {
          return;
        }
        const nextIndex = getEnabledSiblingItemIndex(index, 1);
        const nextItem = items.value[nextIndex]?.ref;
        nextItem?.focus();
        break;
      }
      case 'Enter':
      case ' ': {
        onSelect(items.value[index], isSelected(items.value[index]));
        break;
      }
      default:
        return;
    }
  }

  function getEnabledSiblingItemIndex(index: number, offset: number): number {
    let nextIndex = index + offset;
  
    while (nextIndex >= 0 && nextIndex < items.value.length) {
      if (!items.value[nextIndex]?.ref!.disabled) {
        return nextIndex;
      }
      nextIndex += offset;
    }
  
    return index; // If no enabled item is found, return the original index.
  }

  function onSelect(selectedValue: IdsRadioItems, selected: boolean) {
    watchNotTrigger.value = true;
    clear();

    if (!selected) {
      select(selectedValue);
    } else {
      deselect(selectedValue);
    }

   model.value =  getSelectedValue();
  }

  function getSelectedValue(): unknown {
    const mappedValue = selected.value.map((item) => item.value);
    return Array.isArray(model.value) ? mappedValue : mappedValue[0];
  }

  function setSelectionByValue(value: unknown | unknown[]): void {
    if (items.value.length === 0) {
      return;
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

  function isItemPreSelectedByValue(itemValue: unknown): boolean {
    if (model.value === undefined) {
      return false;
    }

    if (Array.isArray(model.value)) {
      return model.value.some((value) => itemValue !== null && value === itemValue);
    }

    return itemValue === model.value;
  }

  function initItems(value: IdsRadioItems): void {
    items.value = [...items.value, value];
  }

  function hasInvalidLabelPosition(): boolean {
    return (props.orientation === Orientation.VERTICAL && Object.values(VerticalPosition).some((pos) => pos === props.labelPosition));
  }
</script>
<template>
  <div :id="radioGroupId" ref="radioGroupRef" :class="classObject" role="radiogroup" @keydown="handleKeyDown($event)">
    <slot />
  </div>
</template>
