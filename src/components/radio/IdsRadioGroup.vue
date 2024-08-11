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

  const componentClass = 'ids-radio-group';
  const model: ModelRef<unknown> = defineModel<unknown>();
  const radioGroupRef = ref();
  const items = ref<IdsRadioItems[]>([]);
  const watchNotTrigger = ref<boolean>(false);

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
  {{ validity }}
  <div :id="radioGroupId" ref="radioGroupRef" :class="classObject" role="radiogroup" @keydown="handleKeyDown($event)">
    <slot />
  </div>
</template>
<style lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: surface, light, dark;

@mixin radioItemVariantInput($variant, $selected, $error) {
  $selectedText: '';
  @if ($selected) {
    $selectedText: 'selected';
  } @else {
    $selectedText: 'unselected';
  }
  $errorText: '';
  @if ($error == true) {
    $errorText: '-error';
  }

  &:not(:disabled) {
    border-color: var(--ids-comp-radio-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-default);
    background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-default);

    @if ($selected) {
      & + .ids-radio-item__inner-circle {
        border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-default);
        background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-default);
      }
    }

    &:hover {
      border-color: var(--ids-comp-radio-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-hovered);
      background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-hovered);

      @if ($selected) {
        & + .ids-radio-item__inner-circle {
          border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-hovered);
          background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-hovered);
        }
      }
    }
    &:active {
      border-color: var(--ids-comp-radio-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-pressed);
      background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-pressed);

      @if ($selected) {
        & + .ids-radio-item__inner-circle {
          border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-pressed);
          background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-pressed);
        }
      }
    }
    &:focus,
    &:focus-visible {
      border-color: var(--ids-comp-radio-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-focused);
      background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-focused);

      @if ($selected) {
        & + .ids-radio-item__inner-circle {
          border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-focused);
          background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-focused);
        }
      }

      @if ($error != true) {
        outline-color: var(--ids-comp-radio-input-#{$selectedText}-color-focused-outline-#{$variant}-focused);
      }
    }
  }

  @if ($error != true) {
    &:disabled {
      border-color: var(--ids-comp-forms-form-field-standard-container-color-border-#{$variant}-disabled);
      background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-disabled);

      @if ($selected) {
        & + .ids-radio-item__inner-circle {
          border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-disabled);
          background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-disabled);
        }
      }
    }
  }
}

@mixin radioItemVariantTouchTargetHover($variant, $selected, $error) {
  $selectedText: '';
  @if ($selected) {
    $selectedText: 'selected';
  } @else {
    $selectedText: 'unselected';
  }
  $errorText: '';
  @if ($error == true) {
    $errorText: '-error';
  }

  & + input[type='radio'] {
    &:not(:disabled) {
      border-color: var(--ids-comp-radio-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-hovered);
      background-color: var(--ids-comp-radio-input-#{$selectedText}-color-bg-#{$variant}-hovered);

      @if ($selected) {
        & + .ids-radio-item__inner-circle {
          border-color: var(--ids-comp-radio-input-selected-inner-circle-color-border-#{$variant}#{$errorText}-hovered);
          background: var(--ids-comp-radio-input-selected-inner-circle-color-bg-#{$variant}#{$errorText}-hovered);
        }
      }
    }
  }
}

.ids-radio-group {
  display: inline-flex;
  align-items: flex-start;
  justify-content: start;

  &.ids-radio-group-horizontal {
    flex-direction: row;
  }

  &.ids-radio-group-vertical {
    flex-direction: column;
  }

  &.ids-radio-group-left {
    align-items: flex-end;
  }

  &.ids-radio-group-right {
    align-items: flex-start;
  }

  .ids-radio-item {
    display: flex;
    align-items: center;

    &.ids-radio-item-left {
      flex-direction: row-reverse;
      justify-content: start;
    }

    &.ids-radio-item-righ {
      flex-direction: row;
      justify-content: start;
    }

    &.ids-radio-item-top {
      flex-direction: column-reverse;
      align-items: center;
    }

    &.ids-radio-item-bottom {
      flex-direction: column;
      align-items: center;
    }

    .ids-radio-item__input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .ids-radio-item__touch-target {
        position: absolute;
        cursor: pointer;
      }

      input[type='radio'] {
        appearance: none;
        -webkit-appearance: none;
        flex-shrink: 0;
        border-style: solid;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;

        & + .ids-radio-item__inner-circle {
          position: absolute;
          flex-shrink: 0;
          border-style: solid;
          height: 0;
          width: 0;
          border-width: 0;
          cursor: pointer;
        }

        &:focus,
        &:focus-visible {
          outline-offset: 2px;
          outline-style: solid;
        }
      }
    }

    .ids-radio-item__label {
      cursor: pointer;
    }

    &.ids-radio-item-disabled {
      .ids-radio-item__input-wrapper {
        .ids-radio-item__touch-target {
          cursor: not-allowed;
        }

        input[type='radio'] {
          cursor: not-allowed;

          & + .ids-radio-item__inner-circle {
            cursor: not-allowed;
          }
        }
      }

      .ids-radio-item__label {
        cursor: not-allowed;
      }
    }

    .ids-radio-item__label {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 0;
      font-style: normal;
    }
  }

  @each $size in $sizes {
    &.ids-radio-group-#{$size} {
      &.ids-radio-group-horizontal {
        padding: var(--ids-comp-radio-group-horizontal-container-size-padding-y-#{$size})
          var(--ids-comp-radio-group-horizontal-container-size-padding-x-#{$size});
        gap: var(--ids-comp-radio-group-horizontal-container-size-gap-#{$size});
      }

      &.ids-radio-group-vertical {
        padding: var(--ids-comp-radio-group-vertical-container-size-padding-y-#{$size})
          var(--ids-comp-radio-group-vertical-container-size-padding-x-#{$size});
        gap: var(--ids-comp-radio-group-vertical-container-size-gap-#{$size});
      }

      & > .ids-radio-item {
        padding: var(--ids-comp-radio-button-container-size-padding-y-#{$size})
          var(--ids-comp-radio-button-container-size-padding-x-#{$size});
        gap: var(--ids-comp-radio-button-container-size-gap-#{$size});

        .ids-radio-item__input-wrapper {
          $input-height: var(--ids-comp-radio-button-input-size-height-#{$size});
          $input-width: var(--ids-comp-radio-button-input-size-width-#{$size});

          .ids-radio-item__touch-target {
            $touch-target-height: var(--ids-comp-radio-button-input-size-touchtarget-height-#{$size});
            $touch-target-width: var(--ids-comp-radio-button-input-size-touchtarget-width-#{$size});
            top: calc(($input-height - $touch-target-height) / 2);
            left: calc(($input-width - $touch-target-width) / 2);
            height: $touch-target-height;
            width: $touch-target-width;
          }

          input[type='radio'] {
            width: $input-width;
            height: $input-height;
            border-radius: var(--ids-comp-radio-button-input-size-border-radius-#{$size});
            border-width: var(--ids-comp-radio-button-input-size-border-width-#{$size});

            &:checked {
              & + .ids-radio-item__inner-circle {
                width: var(--ids-comp-radio-button-input-inner-circle-size-width-#{$size});
                height: var(--ids-comp-radio-button-input-inner-circle-size-height-#{$size});
                border-radius: var(--ids-comp-radio-button-input-inner-circle-size-border-radius-#{$size});
                border-width: var(--ids-comp-radio-button-input-inner-circle-size-border-width-#{$size});
              }
            }

            &:focus {
              outline-width: var(--ids-comp-radio-focused-outline-outline-#{$size});
            }
          }
        }

        .ids-radio-item__label {
          padding: var(--ids-comp-radio-button-label-size-padding-y-#{$size}) 0px;
          font-family: var(--ids-comp-radio-button-label-typography-font-family-#{$size});
          font-size: var(--ids-comp-radio-button-label-typography-font-size-#{$size});
          font-weight: var(--ids-comp-radio-button-label-typography-font-weight-#{$size});
          line-height: var(--ids-comp-radio-button-label-typography-line-height-#{$size});
          letter-spacing: var(--ids-comp-radio-button-label-typography-letter-spacing-#{$size});
        }
      }
    }
  }

  @each $variant in $variants {
    .ids-radio-item-#{$variant} {
      .ids-radio-item__input-wrapper {
        .ids-radio-item__touch-target:hover {
          @include radioItemVariantTouchTargetHover($variant, false, false);
        }
        input[type='radio'] {
          @include radioItemVariantInput($variant, false, false);

          &:checked {
            @include radioItemVariantInput($variant, true, false);
          }
        }
      }

      &:has(input[type='radio']:checked) {
        .ids-radio-item__input-wrapper {
          .ids-radio-item__touch-target:hover {
            @include radioItemVariantTouchTargetHover($variant, true, false);
          }
        }
      }

      .ids-radio-item__label {
        color: var(--ids-comp-radio-label-color-fg-#{$variant}-default);

        &:hover {
          color: var(--ids-comp-radio-label-color-fg-#{$variant}-hovered);
        }
        &:active {
          color: var(--ids-comp-radio-label-color-fg-#{$variant}-pressed);
        }
        &:focus {
          color: var(--ids-comp-radio-label-color-fg-#{$variant}-focused);
        }
      }

      &.ids-radio-item-disabled .ids-radio-item__label {
        color: var(--ids-comp-radio-label-color-fg-#{$variant}-disabled);
      }
    }
  }

  &.ng-invalid,
  &.ids-radio-group-invalid {
    @each $variant in $variants {
      .ids-radio-item-#{$variant} {
        .ids-radio-item__input-wrapper {
          .ids-radio-item__touch-target:hover {
            @include radioItemVariantTouchTargetHover($variant, false, true);
          }
          input[type='radio'] {
            @include radioItemVariantInput($variant, false, true);

            &:checked {
              @include radioItemVariantInput($variant, true, true);
            }
          }
        }

        &:has(input[type='radio']:checked) {
          .ids-radio-item__input-wrapper {
            .ids-radio-item__touch-target:hover {
              @include radioItemVariantTouchTargetHover($variant, true, true);
            }
          }
        }
      }
    }
  }
}
</style>