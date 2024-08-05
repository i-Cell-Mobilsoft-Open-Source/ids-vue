<script setup lang="ts">
import { Size } from '@models/size.type';
import { IdsSegmentedControlProps } from '@components/segmented-control/models/IdsSegmentedControlProps.interface';
import { SegmentedControlVariant } from '@components/segmented-control/models/IdsSegmentedControlVariant.type';
import { SegmentedControlAppearance } from '@components/segmented-control/models/IdsSegmentedControlAppearance.type';
import { computed, onMounted, provide, ref, toRef, watch } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { IdsSegmentedControlInjectedAttributes } from './models/IdsSegmentedControlInjectedAttributes.interface';
import { getUid } from './BaseSegmentedControl';
import { IdsSegmentedControlItems } from './models/IdsSegmentedControlItems.interface';
import { useSelectionModel } from '@core/composables/SelectionModel';
import { createComponentError } from '@core/utils/CreateError';

  const componentClass = 'ids-segmented-control';
  const model = defineModel<unknown>();
  const segmentedControlRef = ref();
  const items = ref<IdsSegmentedControlItems[]>([]);
  const watchNotTrigger = ref<boolean>(false);
  
  const props = withDefaults(
    defineProps<IdsSegmentedControlProps>(),
    {
      id: undefined,
      name: undefined,
      multiSelect: true,
      size: Size.COMFORTABLE,
      variant: SegmentedControlVariant.SURFACE,
      appearance: SegmentedControlAppearance.FILLED,
      disabled: false,
    });
    
   const { 
    selected, 
    select,
    deselect,
    isSelected,
    clear 
  } = useSelectionModel<IdsSegmentedControlItems>([], props.multiSelect, false, (o1, o2) => o1.id === o2.id);

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, props.size)]: !!props.size,
    [addClassPrefix(componentClass, props.variant)]: !!props.variant,
    [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
    [addClassPrefix(componentClass, 'disabled')]: props.disabled,
  }));

  const segmentedControlId = computed<string>(() => {
    return props.id !== undefined ? props.id : `${componentClass}-${getUid()}`;
  });

  const setRole = computed<string>(() => {
    return props.multiSelect ? 'group' : 'radiogroup';
  });

  onMounted(() => {
    const minItemCount = 2;

    if (items.value.length < minItemCount) {
      throw new Error(
        createComponentError(componentClass, 'invalid count of segmented control items. Minimum item count is 2.'),
      );
    }

    select(...items.value.filter((item) => {
      if (item.selected) {
        return {
          id: item.id,
          value: item.value
        }
      }
    }));
  });

  watch(() => model.value, (newValue) => {
    if(!watchNotTrigger.value) {
      setSelectionByValue(newValue);
    }
    watchNotTrigger.value = false;
  }, { immediate: true })
  
  const disabledValue = toRef(() => props.disabled);
  const nameValue = toRef(() => props.name);
  const multiSelectValue = toRef(() => props.multiSelect);

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
      case 'ArrowLeft': {
        if (index === 0) {
          return;
        }
        const prevIndex = getSiblingItemIndex(index, -1);
        const prevItem = items.value[prevIndex].ref;
        prevItem?.focus();
        break;
      }
      case 'ArrowRight': {
        if (index === (items.value.length - 1)) {
          return;
        }
        const nextIndex = getSiblingItemIndex(index, 1);
        const nextItem = items.value[nextIndex].ref;
        nextItem?.focus();
        break;
      }
      case 'Enter': {
        onSelect(items.value[index], isSelected(items.value[index]));
        break;
      }
      default:
        return;
    }
  }

  function getSiblingItemIndex(index: number, offset: number): number {
    const nextIndex = index + offset;
    if (nextIndex === items.value.length) {
      return index;
    }
    if (nextIndex === -1) {
      return index;
    }
    return nextIndex;
  }

  function onSelect(selectedValue: IdsSegmentedControlItems, selected: boolean) {
    watchNotTrigger.value = true;
    if (!props.multiSelect) {
      clear();
    }

    if (!selected) {
      select(selectedValue);
    } else {
      deselect(selectedValue);
    }

    model.value = getSelectedValue();
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

  function getSelectedValue(): unknown {
    const mappedValue = selected.value.map((item) => item.value);
    
    return Array.isArray(model.value) ? mappedValue : mappedValue[0];
  }

  function setSelectionByValue(value: unknown | unknown[]): void {
    if (items.value.length === 0) {
      return;
    }

    if (props.multiSelect && !Array.isArray(value)) {
      throw new Error(createComponentError(componentClass, 'value must be an array in multiple-selection mode'));
    }
    clear();
    Array.isArray(value) ? value.forEach((currentValue: unknown) => selectValue(currentValue)) : selectValue(value);
  }

  function selectValue(value: unknown): void {
    const correspondingItem = items.value.find((item) => item.value !== null && item.value === value);
    if (correspondingItem) {
      select(correspondingItem);
    }
  }

  function initItems(value: IdsSegmentedControlItems): void {
    items.value = [...items.value, value];
  }

  provide<IdsSegmentedControlInjectedAttributes>('componentAttributes', 
    {disabledValue, nameValue, multiSelectValue, onSelect, initItems, isItemPreSelectedByValue, selected, isSelected}
  );

</script>
<template>
  <div :id="segmentedControlId" ref="segmentedControlRef" :class="classObject" :role="setRole" @keydown="handleKeyDown($event)">
    <slot />
  </div>
</template>
<style lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: primary, surface, light, dark;
$appearances: filled, outlined;

@mixin segmentedControlItemAppearanceAndVariant($appearance, $variant, $state) {
  background-color: var(--ids-comp-segmented-control-button-#{$appearance}-color-bg-#{$variant}-#{$state});
  color: var(--ids-comp-segmented-control-button-#{$appearance}-color-fg-label-#{$variant}-#{$state});
  border-color: var(--ids-comp-segmented-control-button-#{$appearance}-color-border-#{$variant}-#{$state});

  .ids-icon {
    color: var(--ids-comp-segmented-control-button-#{$appearance}-color-fg-icon-#{$variant}-#{$state});
  }
}

.ids-segmented-control {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  .ids-segmented-control-item > button {
    display: flex;
    align-items: center;
    border-style: solid;
    position: relative;
    text-wrap: nowrap;

    &:focus {
      z-index: 1;
      outline-style: solid;
      outline-offset: 2px;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  @each $size in $sizes {
    &.ids-segmented-control-#{$size} {
      padding: var(--ids-comp-segmented-control-container-size-padding-y-#{$size})
        var(--ids-comp-segmented-control-container-size-padding-x-#{$size});
      gap: var(--ids-comp-segmented-control-container-size-gap-#{$size});
      border-top-left-radius: var(--ids-comp-segmented-control-container-size-border-radius-left-#{$size});
      border-bottom-left-radius: var(--ids-comp-segmented-control-container-size-border-radius-left-#{$size});
      border-top-right-radius: var(--ids-comp-segmented-control-container-size-border-radius-right-#{$size});
      border-bottom-right-radius: var(--ids-comp-segmented-control-container-size-border-radius-right-#{$size});

      .ids-segmented-control-item {
        & > button {
          border-width: var(--ids-comp-segmented-control-button-size-border-width-#{$size});
          padding: var(--ids-comp-segmented-control-button-size-padding-y-#{$size})
            var(--ids-comp-segmented-control-button-size-padding-x-#{$size});
          gap: var(--ids-comp-segmented-control-button-size-gap-#{$size});
          font-family: var(--ids-comp-segmented-control-button-typography-font-family-#{$size});
          font-size: var(--ids-comp-segmented-control-button-typography-font-size-#{$size});
          font-weight: var(--ids-comp-segmented-control-button-typography-font-weight-#{$size});
          letter-spacing: var(--ids-comp-segmented-control-button-typography-letter-spacing-#{$size});
          line-height: var(--ids-comp-segmented-control-button-typography-line-height-#{$size});

          &:focus {
            outline-width: var(--ids-comp-segmented-control-focused-outline-size-outline-width-#{$size});
          }
        }

        &:first-of-type > button {
          border-top-left-radius: var(--ids-comp-segmented-control-button-size-border-radius-#{$size});
          border-bottom-left-radius: var(--ids-comp-segmented-control-button-size-border-radius-#{$size});
        }
        &:last-of-type > button {
          border-top-right-radius: var(--ids-comp-segmented-control-button-size-border-radius-#{$size});
          border-bottom-right-radius: var(--ids-comp-segmented-control-button-size-border-radius-#{$size});
        }
        &:not(:last-of-type) > button {
          border-right-width: 0;
        }

        .ids-icon {
          height: var(--ids-comp-segmented-control-button-size-icon-#{$size});
          width: var(--ids-comp-segmented-control-button-size-icon-#{$size});
        }
      }
    }
  }

  @each $variant in $variants {
    &.ids-segmented-control-#{$variant} {
      .ids-segmented-control-item > button:focus {
        $lightOrDark: 'dark';
        @if ($variant == 'light') {
          $lightOrDark: 'light';
        }
        outline-color: var(--ids-comp-segmented-control-focused-outline-color-#{$lightOrDark}-focused);
      }

      @each $appearance in $appearances {
        &.ids-segmented-control-#{$appearance} {
          background-color: var(--ids-comp-segmented-control-container-#{$appearance}-color-bg-#{$variant}-default);
          border-color: var(--ids-comp-segmented-control-container-#{$appearance}-color-border-#{$variant}-default);

          .ids-segmented-control-item > button {
            @include segmentedControlItemAppearanceAndVariant($appearance, $variant, default);

            &.ids-segmented-control-item-selected:not(:disabled) {
              @include segmentedControlItemAppearanceAndVariant($appearance, $variant, active);
            }
            &:hover {
              @include segmentedControlItemAppearanceAndVariant($appearance, $variant, hovered);
            }
            &:active {
              @include segmentedControlItemAppearanceAndVariant($appearance, $variant, pressed);
            }
            &:focus {
              @include segmentedControlItemAppearanceAndVariant($appearance, $variant, focused);
            }
            &:disabled {
              @include segmentedControlItemAppearanceAndVariant($appearance, $variant, disabled);
            }
          }
        }
      }
    }
  }
}
</style>