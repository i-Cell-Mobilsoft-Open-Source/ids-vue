<script setup lang="ts">
import { Size } from '@models/size.type';
import { computed, getCurrentInstance, onMounted, reactive, ref, watch } from 'vue';
import IdsCheckMark from '@assets/IdsCheckMark.vue'
import IdsIndeterminateIcon from '@assets/IdsIndeterminateIcon.vue';
import { IdsCheckboxProps } from '@components/checkbox/models/IdsCheckboxProps.interface.ts';
import { CheckboxVariant } from '@components/checkbox/models/IdsCheckboxVariant.type.ts';
import { IdsCheckboxState, IdsCheckboxStateType } from '@components/checkbox/models/IdsCheckboxState.type.ts';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

const componentClass = 'ids-checkbox';

const props = withDefaults(
  defineProps<IdsCheckboxProps>(),
  {
    variant: CheckboxVariant.SURFACE,
    size: Size.COMPACT,
    disabled: false,
    indeterminate: false,
    isValid: undefined,
    id: undefined,
    value: null,
    name: "",
    checked: false,
    tabindex: 0,
    readonly: false,
    required: false,
  });

const instance = getCurrentInstance();
const uid = ref(instance?.uid);
const checkboxRef = ref<HTMLInputElement | null>(null);
const labelRef = ref<HTMLInputElement | null>(null);
const checkboxTypes: IdsCheckboxStateType = IdsCheckboxState.UNCHECKED;
const checkboxState = ref<IdsCheckboxStateType>(checkboxTypes);
const model = defineModel<unknown, string>();
const $emit = defineEmits(['update:modelValue', 'focus', 'blur', 'update:indeterminate']);

const state = reactive({
  indeterminate: props.indeterminate,
  checked: props.checked,
  classList: [
    componentClass,
    addClassPrefix(componentClass, props.size),
    addClassPrefix(componentClass, props.variant),
  ],
});

const setDisabledClass = computed<string | null>(() => {
  return props.disabled ? addClassPrefix(componentClass, 'disabled') : null;
});

const setValidity = computed<string | null>(() => {
  return !validity.value ? addClassPrefix(componentClass, 'invalid') : null;
});

const validity = computed<boolean>(() => {
  return props.isValid !== undefined ? props.isValid : !props.required ? true : isChecked.value;
});

const setIndeterminate = computed<string | null>(() => {
  return props.indeterminate ? addClassPrefix(componentClass, 'indeterminate') : null;
});

const isIndeterminate = computed<boolean>(() => {
  return checkboxState.value === IdsCheckboxState.INDETERMINATE;
});

const isChecked = computed<boolean>(() => {
  return checkboxState.value === IdsCheckboxState.CHECKED;
});

const isFocusable = computed<boolean>(() => {
  return !props.disabled && !props.readonly;
});

const inputId = computed<string>(() => {
  return props.id !== undefined ? props.id : `${componentClass}-${uid.value}`;
});

onMounted(() => {
  if (checkboxRef.value) {
    checkboxRef.value.indeterminate = props.indeterminate;
    if (props.indeterminate) {
      checkboxRef.value.checked = false;
      checkboxState.value = IdsCheckboxState.INDETERMINATE;
    } else {
      checkboxRef.value.checked = props.checked ? props.checked : determinateCheckValue();
      checkboxState.value = checkboxRef.value.checked ? IdsCheckboxState.CHECKED : IdsCheckboxState.UNCHECKED;
    }
  }
})

watch(() => props.indeterminate, (newVal) => {
  if (checkboxRef.value) checkboxRef.value.indeterminate = newVal;
  if (newVal) {
    checkboxState.value = IdsCheckboxState.INDETERMINATE;
  }
})

function determinateCheckValue(): boolean {
  if (checkboxState.value === IdsCheckboxState.INDETERMINATE) {
    return false;
  }

  if (model.value instanceof Array) {
    return model.value.includes(props.value);
  }

  return checkboxState.value === IdsCheckboxState.CHECKED;
}

function onTouchTargetClick(): void {
  if (!props.readonly) {
    handleInputClick();
  }

  if (!props.disabled) {
    checkboxRef.value?.focus();
  }
}

function onInputClick(): void {
  if (!props.readonly) {
    handleInputClick();
  }
}

function handleClickEvent(event: MouseEvent): void {
  if (props.disabled || props.readonly) {
    event.preventDefault();
  }

  preventBubblingFromLabel(event);
}

function handleKeyUpEvent(event: Event): void {
  if (props.disabled || props.readonly) {
    event.preventDefault();
  }
}

function preventBubblingFromLabel(event: MouseEvent): void {
  if (!!event.target && labelRef.value?.contains(event.target as HTMLElement)) {
    event.stopPropagation();
  }
}

function handleInputClick(): void {
  if (!props.disabled) {
    if (checkboxRef.value && checkboxState.value === IdsCheckboxState.INDETERMINATE) {
      checkboxState.value = IdsCheckboxState.CHECKED;
      checkboxRef.value.indeterminate = false;
      $emit('update:indeterminate', false);
    } else {
      checkboxState.value = checkboxState.value === IdsCheckboxState.CHECKED ? IdsCheckboxState.UNCHECKED : IdsCheckboxState.CHECKED;
    }
    if (checkboxRef.value) checkboxRef.value.checked = determinateCheckValue();
    $emit('update:modelValue', setModelValue());
  }
}


function setModelValue(): boolean | Array<unknown> {
  let modelValue;

  if (model.value instanceof Array) {
    if (checkboxState.value === IdsCheckboxState.CHECKED) {
      modelValue = model.value ? model.value.includes(props.value) ? [...model.value] : [...model.value, props.value] : [props.value];
    }
    else {
      modelValue = model.value.filter((val) => val !== props.value);
    }
  } else {
    modelValue = checkboxState.value === IdsCheckboxState.INDETERMINATE ? true : checkboxState.value === IdsCheckboxState.CHECKED;
  }

  return modelValue;
}

function onFocus(event: Event): void {
  if (!props.disabled) $emit('focus', event);
};

function onBlur(event: Event): void {
  if (!props.disabled) $emit('blur', event);
}

</script>
<template>
  <div
    :class="[state.classList, setDisabledClass, setValidity, setIndeterminate]" @keyup="handleKeyUpEvent($event)"
    @click="handleClickEvent($event)"
  >
    <div class="ids-checkbox__input-wrapper">
      <div class="ids-checkbox__touch-target" @click="onTouchTargetClick()" />
      <input
        :id="inputId" 
        ref="checkboxRef" 
        v-model="model" 
        type="checkbox"
        :disabled="props.disabled" 
        :value="props.value"
        :name="props.name" 
        :checked="props.checked" 
        :tabindex="isFocusable ? -1 : props.tabindex" 
        :readonly="props.readonly"
        :required="props.required"
        :aria-invalid="!validity || undefined"
        :aria-checked="isIndeterminate ? 'mixed' : undefined"
        @focus="onFocus" 
        @blur="onBlur" 
        @click="onInputClick()" 
        @change="$event.stopPropagation()"
      >
      <div class="ids-checkbox__icon">
        <IdsCheckMark v-if="isChecked" />
        <IdsIndeterminateIcon v-else-if="isIndeterminate" />
      </div>
    </div>
    <div class="ids-checkbox__label-wrapper">
      <div class="ids-checkbox__label-container">
        <label ref="labelRef" :for="inputId" class="ids-checkbox__label">
          <slot />
        </label>
        <span v-if="props.required" class="ids-validation__required-marker">*</span>
      </div>
      <div v-if="$slots.IdsHintMsg || $slots.IdsErrorMsg" class="ids-checkbox__message-container">
        <slot v-if="$slots.IdsErrorMsg && !validity" name="IdsErrorMsg" />
        <slot v-else-if="$slots.IdsHintMsg" name="IdsHintMsg" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, surface;

@mixin checkboxInputVariant($variant, $selected, $error) {
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
    border-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-enabled);
    background-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-bg-#{$variant}-enabled);

    &:hover {
      border-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-hovered);
      background-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-bg-#{$variant}-hovered);
    }
    &:active {
      border-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-pressed);
      background-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-bg-#{$variant}-pressed);
    }
    &:focus {
      border-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-border-#{$variant}#{$errorText}-focused);
      background-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-bg-#{$variant}-focused);
      @if ($error != true) {
        outline-color: var(--ids-comp-checkbox-input-selected-color-focused-outline-#{$variant}-focused);
      }
    }
  }

  @if ($error != true) {
    &:disabled {
      border-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-border-#{$variant}-disabled);
      background-color: var(--ids-comp-checkbox-input-#{$selectedText}-color-bg-#{$variant}-disabled);
    }
  }
}

@mixin checkboxIconVariant($variant, $error) {
  $errorText: '';
  @if ($error == true) {
    $errorText: '-error';
  }

  &:not(:disabled) {
    & + .ids-checkbox__icon {
      color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}#{$errorText}-enabled);
    }

    &:hover + .ids-checkbox__icon {
      color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}#{$errorText}-hovered);
    }
    &:active + .ids-checkbox__icon {
      color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}#{$errorText}-pressed);
    }
    &:focus + .ids-checkbox__icon {
      color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}#{$errorText}-focused);
    }
  }

  @if ($error != true) {
    &:disabled {
      color: var(--ids-comp-checkbox-input-selected-color-fg-icon-#{$variant}-disabled);
    }
  }
}

.ids-checkbox {
  display: inline-flex;
  align-self: stretch;
  align-items: flex-start;

  .ids-checkbox__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .ids-checkbox__touch-target {
      position: absolute;
      z-index: 1;
    }

    input[type='checkbox'] {
      appearance: none;
      -webkit-appearance: none;
      flex-shrink: 0;
      border-style: solid;

      &:focus {
        outline-offset: 3px;
        outline-style: solid;
      }

      & + .ids-checkbox__icon {
        position: absolute;
      }
    }
  }

  .ids-checkbox__label-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;

    .ids-checkbox__label-container {
      display: flex;

      .ids-checkbox__label {
        text-align: start;
        font-style: normal;
      }

      .ids-validation__required-marker {
        color: var(--ids-comp-checkbox-asterisk-color-fg-enabled);
      }
    }

   

    .ids-checkbox__message-container {
      width: 100%;
    }
  }

  @each $size in $sizes {
    &.ids-checkbox-#{$size} {
      padding: var(--ids-comp-size-checkbox-container-size-padding-y-#{$size})
        var(--ids-comp-size-checkbox-container-size-padding-x-#{$size});
      gap: var(--ids-comp-size-checkbox-container-size-gap-#{$size});

      .ids-checkbox__input-wrapper {
        $input-height: var(--ids-comp-size-checkbox-input-size-height-#{$size});
        $input-width: var(--ids-comp-size-checkbox-input-size-width-#{$size});

        .ids-checkbox__touch-target {
          $touch-target-height: var(--ids-comp-size-checkbox-input-size-touchtarget-height-#{$size});
          $touch-target-width: var(--ids-comp-size-checkbox-input-size-touchtarget-width-#{$size});
          top: calc(($input-height - $touch-target-height) / 2);
          left: calc(($input-width - $touch-target-width) / 2);
          height: $touch-target-height;
          width: $touch-target-width;
        }

        input[type='checkbox'] {
          width: $input-width;
          height: $input-height;
          border-radius: var(--ids-comp-size-checkbox-input-size-border-radius-#{$size});
          border-width: var(--ids-comp-size-checkbox-input-size-border-width-#{$size});

          &:focus {
            outline-width: var(--ids-comp-size-checkbox-focused-outline-outline-#{size});
          }
        }

        .ids-checkbox__icon {
          height: var(--ids-comp-size-checkbox-input-size-icon-#{$size});
          width: var(--ids-comp-size-checkbox-input-size-icon-#{$size});
        }
      }

      .ids-checkbox__label-wrapper {
        padding: var(--ids-comp-size-checkbox-label-group-size-padding-y-#{$size})
          var(--ids-comp-size-checkbox-label-group-size-padding-x-#{$size});
        gap: var(--ids-comp-size-checkbox-label-group-size-gap-#{$size});

        .ids-checkbox__label-container .ids-checkbox__label {
          font-family: var(--ids-comp-size-checkbox-label-typography-font-family-#{$size});
          font-weight: var(--ids-comp-size-checkbox-label-typography-font-weight-#{$size});
          letter-spacing: var(--ids-comp-size-checkbox-label-typography-letter-spacing-#{$size});
          font-size: var(--ids-comp-size-checkbox-label-typography-font-size-#{$size});
          line-height: var(--ids-comp-size-checkbox-label-typography-line-height-#{$size});
        }

        .ids-validation__required-marker {
          line-height: var(--ids-comp-size-checkbox-label-typography-line-height-#{$size});
        }
      }
    }
  }

  @each $variant in $variants {
    &.ids-checkbox-#{$variant} {
      .ids-checkbox__input-wrapper {
        input[type='checkbox'] {
          @include checkboxInputVariant($variant, false, false);

          &:checked,
          &:indeterminate {
            @include checkboxInputVariant($variant, true, false);
            @include checkboxIconVariant($variant, false);
          }
        }
      }

      .ids-checkbox__label-wrapper .ids-checkbox__label-container .ids-checkbox__label {
        color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-enabled);

        &:hover {
          color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-hovered);
        }
        &:active {
          color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-pressed);
        }
        &:focus {
          color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-focused);
        }
      }

      &.ids-checkbox-disabled .ids-checkbox__label-wrapper .ids-checkbox__label-container {
        .ids-checkbox__label {
          color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-disabled);
        }

        .ids-validation__required-marker {
          color: var(--ids-comp-checkbox-asterisk-color-fg-disabled);
        }
      }
    }
  }

  &.ids-checkbox-disabled {
    .ids-checkbox__input-wrapper {
      .ids-checkbox__touch-target {
        cursor: not-allowed;
      }

      input[type='checkbox'] {
        cursor: not-allowed;

        & + .ids-checkbox__icon {
          cursor: not-allowed;
        }
      }
    }

    .ids-checkbox__label-wrapper {
      .ids-checkbox__label-container {
        .ids-checkbox__label {
          cursor: not-allowed;
        }
      }
    }
  }

  &:not(.ids-checkbox-disabled) {
    .ids-checkbox__input-wrapper {
      .ids-checkbox__touch-target {
        cursor: pointer;
      }

      input[type='checkbox'] {
        cursor: pointer;

        & + .ids-checkbox__icon {
          cursor: pointer;
        }
      }
    }

    .ids-checkbox__label-wrapper {
      .ids-checkbox__label-container {
        .ids-checkbox__label {
          cursor: pointer;
        }
      }
    }
  }

  &.ng-invalid,
  &.ids-checkbox-invalid {
    @each $variant in $variants {
      &.ids-checkbox.ids-checkbox-#{$variant} {
        .ids-checkbox__input-wrapper {
          input[type='checkbox'] {
            @include checkboxInputVariant($variant, false, true);

            &:checked,
            &:indeterminate {
              @include checkboxInputVariant($variant, true, true);
              @include checkboxIconVariant($variant, true);
            }
          }
        }
      }
    }
  }
}
</style>