<script setup lang="ts">
import { Size } from '@models/size.type';
import { computed, getCurrentInstance, onMounted, provide, ref, toRef, watch } from 'vue';
import IdsCheckMark from '@assets/IdsCheckMark.vue'
import IdsIndeterminateIcon from '@assets/IdsIndeterminateIcon.vue';
import { IdsCheckboxProps } from '@components/checkbox/models/IdsCheckboxProps.interface.ts';
import { CheckboxVariant } from '@components/checkbox/models/IdsCheckboxVariant.type.ts';
import { IdsCheckboxState, IdsCheckboxStateType } from '@components/checkbox/models/IdsCheckboxState.type.ts';
import { IdsCheckboxEvents } from '@components/checkbox/models/IdsCheckboxEvents.interface.ts';
import { IdsCheckboxSlots } from '@components/checkbox/models/IdsCheckboxSlots.interface.ts';
import { addClassPrefix } from '@core/utils/AddClassPrefix.ts';
import { IdsMessageInjectedAttributes } from '@components/message/models/IdsMessageInjectedAttributes.interface';
import { MessageAttributes } from '@core/utils/Keys';

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
    value: false,
    name: "",
    tabindex: 0,
    readonly: false,
    required: false,
  });

const instance = getCurrentInstance();
const uid = ref(instance?.uid);
const checkboxTypes: IdsCheckboxStateType = IdsCheckboxState.UNCHECKED;
const checkboxState = ref<IdsCheckboxStateType>(checkboxTypes);
const checkboxRef = ref<HTMLInputElement | null>(null);
const labelRef = ref<HTMLInputElement | null>(null);
const model = defineModel<unknown>();
const $emit = defineEmits<IdsCheckboxEvents>();
defineSlots<IdsCheckboxSlots>();

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
  [addClassPrefix(componentClass, 'disabled')]: props.disabled,
  [addClassPrefix(componentClass, 'invalid')]: !validity.value,
  [addClassPrefix(componentClass, 'indeterminate')]: props.indeterminate,
}));

const validity = computed<boolean>(() => {
  return props.isValid !== undefined ? props.isValid : !props.required ? true : isChecked.value;
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

const sizeValue = toRef(() => props.size);
const variantValue = toRef(() => props.variant);
const disabledValue = toRef(() => props.disabled);

provide<IdsMessageInjectedAttributes>(MessageAttributes, {sizeValue, variantValue, disabledValue});

onMounted(() => {
  if (checkboxRef.value) {
    checkboxRef.value.indeterminate = props.indeterminate;
    if (props.indeterminate) {
      checkboxRef.value.checked = false;
      checkboxState.value = IdsCheckboxState.INDETERMINATE;
    } else {
      checkboxRef.value.checked = determinateCheckValue();
      checkboxState.value = checkboxRef.value.checked ? IdsCheckboxState.CHECKED : IdsCheckboxState.UNCHECKED;
    }
  }
})

watch(() => [props.indeterminate, model.value], (currentValue) => {
  if (checkboxRef.value) {
    checkboxRef.value.indeterminate = !!currentValue[0];
    checkboxRef.value.checked = checkboxState.value === IdsCheckboxState.CHECKED;
    if (checkboxRef.value.indeterminate) {
      checkboxState.value = IdsCheckboxState.INDETERMINATE;
    } else {
      checkboxState.value = determinateCheckValue() ? IdsCheckboxState.CHECKED : IdsCheckboxState.UNCHECKED;
    }
  }
})

function determinateCheckValue(): boolean {
  if (model.value instanceof Array) {
    return model.value.includes(props.value);
  }

  if (model.value !== undefined && typeof model.value === 'boolean') {
    return model.value
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
    model.value = setModelValue();
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
    :class="classObject" @keyup="handleKeyUpEvent($event)"
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
        :checked="isChecked" 
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
        <IdsIndeterminateIcon v-if="isIndeterminate" />
      </div>
    </div>
    <div class="ids-checkbox__label-wrapper">
      <div class="ids-checkbox__label-container">
        <label ref="labelRef" :for="inputId" class="ids-checkbox__label">
          <span><slot /></span>
          <span v-if="props.required" class="ids-form-field__required-marker" />
        </label>
      </div>
      <div v-if="$slots.IdsHintMsg || $slots.IdsErrorMsg" class="ids-checkbox__message-container">
        <slot v-if="$slots.IdsErrorMsg && !validity" name="IdsErrorMsg" />
        <slot v-else-if="$slots.IdsHintMsg" name="IdsHintMsg" />
      </div>
    </div>
  </div>
</template>
