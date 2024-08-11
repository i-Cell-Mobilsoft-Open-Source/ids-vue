<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue';
import { IdsRadioItemProps } from '@components/radio/models/IdsRadioItemProps.interface';
import { IdsRadioInjectedAttributes } from '@components/radio/models/IdsRadioInjectedAttributes.interface';
import { IdsRadioItems } from '@components/radio/models/IdsRadioItems.interface';
import { RadioAttributes } from '@core/utils/Keys';
import { getRadioUid } from '@components/radio/utils/IdHandler';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

  const componentClass = 'ids-radio-item';
  const inputRef = ref();

  const props = withDefaults(
    defineProps<IdsRadioItemProps>(),
    {
      id: undefined,
      value: undefined,
      ariaLabel: undefined,
      ariaLabelledBy: undefined,
      ariaDescribedBy: undefined,
      tabindex: 0,
      disabled: false,
    }
  );

  const defaultValue: IdsRadioInjectedAttributes = {
    disabledValue: ref(false),
    nameValue: ref(undefined),
    variantValue: ref(undefined),
    labelPositionValue: ref(undefined),
    requiredValue: ref(false),
    onSelect: () => {},
    initItems: () => {},
    isItemPreSelectedByValue: () => false,
    selected: computed<IdsRadioItems[]>(() => []),
    isSelected: () => false,
  };

  const { 
    disabledValue,
    nameValue,
    variantValue,
    labelPositionValue,
    requiredValue,
    onSelect, 
    initItems, 
    isItemPreSelectedByValue, 
    selected, 
    isSelected 
  } = inject<IdsRadioInjectedAttributes>(RadioAttributes) || defaultValue;
  
  onMounted(() => {
    initItems!({ ...item, selected: isItemPreSelectedByValue!(props.value), ref: inputRef.value });
  });

  const getParentIsDisabled = computed<boolean>(() => {
    return disabledValue ? disabledValue.value : false;
  });

  const isDisabled = computed<boolean>(() => {
    return getParentIsDisabled.value ? getParentIsDisabled.value : props.disabled;
  });
  
  const radioId = computed<string>(() => {
    return props.id !== undefined ? props.id : `${componentClass}-${getRadioUid(false)}`;
  });

  const item: IdsRadioItems = { id: radioId.value, value: props.value };

  const selectedValue = computed<boolean>(() => {
    return selected ? isSelected(item) : false;
  });

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, variantValue!.value!)]: !!variantValue!.value,
    [addClassPrefix(componentClass, labelPositionValue!.value!)]: !!labelPositionValue!.value,
    [addClassPrefix(componentClass, 'disabled')]: !!isDisabled.value,
  }));

  function onChange(): void {
    onSelect!(item, selectedValue.value);
  }

  function touchTargetClick(): void {
    if (!selectedValue.value) {
      inputRef.value.focus();
      onChange();
    }
  }

  function innerCircleClick(): void {
    if (!selectedValue.value) {
      inputRef.value.focus();
      onChange();
    }
  }
</script>
<template>
  <div :class="classObject">
    <div class="ids-radio-item__input-wrapper">
      <div class="ids-radio-item__touch-target" @click="touchTargetClick()" />
      <input
        :id="radioId"
        ref="inputRef"
        class="ids-radio-item__native-control"
        type="radio"
        :checked="selectedValue"
        :disabled="isDisabled"
        :name="nameValue"
        :value="props.value"
        :required="requiredValue"
        :aria-label="props.ariaLabel"
        :aria-labelledby="props.ariaLabelledBy"
        :aria-describedby="props.ariaDescribedBy"
        @change="onChange()"
      >
      <div class="ids-radio-item__inner-circle" @click="innerCircleClick()" />
    </div>
    <label class="ids-radio-item__label" :for="radioId">
      <slot />
    </label>
  </div>
</template>