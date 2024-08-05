<script setup lang="ts">
import { IdsSegmentedControlItemProps } from '@components/segmented-control/models/IdsSegmentedControlItemProps.interface';
import { computed, inject, onMounted, ref } from 'vue';
import { IdsSegmentedControlInjectedAttributes } from './models/IdsSegmentedControlInjectedAttributes.interface';
import { getUid } from './BaseSegmentedControlItem';
import { IdsSegmentedControlItems } from './models/IdsSegmentedControlItems.interface';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import IdsIcon from '@components/icon/IdsIcon.vue';
import mdiCheck from '@mdi/svg/svg/check.svg?component';
import { IdsSegmentedControlItemSlots } from './models/IdsSegmentedControlItemSlots.interface';

const componentClass = 'ids-segmented-control-item';
const iconChecked = mdiCheck;
const selectionControlItem = ref();
defineSlots<IdsSegmentedControlItemSlots>();

const props = withDefaults(
  defineProps<IdsSegmentedControlItemProps>(),
  {
    id: undefined,
    name: undefined,
    value: undefined,
    label: undefined,
    ariaLabel: undefined,
    ariaLabelledBy: undefined,
    tabindex: 0,
    test: undefined,
    disabled: false,
  });
  
  const defaultValue: IdsSegmentedControlInjectedAttributes = {
    disabledValue: ref(false),
    nameValue: ref(undefined),
    multiSelectValue: ref(false),
    onSelect: () => {},
    initItems: () => {},
    isItemPreSelectedByValue: () => false,
    selected: computed<IdsSegmentedControlItems[]>(() => []),
    isSelected: () => false,
  }

  const { 
    disabledValue,
    nameValue,
    multiSelectValue, 
    onSelect, 
    initItems, 
    isItemPreSelectedByValue, 
    selected, 
    isSelected 
  } = inject<IdsSegmentedControlInjectedAttributes>('componentAttributes') || defaultValue;
  
  onMounted(() =>{
    initItems!({...item, selected: isItemPreSelectedByValue!(props.value), ref: selectionControlItem.value});
  })

  function getParentIsDisabled(): boolean {
    return disabledValue ? disabledValue.value : false;
  };
  
  const isDisabled = computed<boolean>(() => {
    return props.disabled !== undefined ? props.disabled : getParentIsDisabled();
  });
  
  
  const controlId = computed<string>(() => {
    return  props.id !== undefined ? props.id : `${componentClass}-${getUid()}`;
  })

  const item: IdsSegmentedControlItems = { id: controlId.value, value: props.value };

  const selectedValue = computed<boolean>(() => {
    return selected ? isSelected(item) : false;
  });

  const buttonName = computed(() => (multiSelectValue?.value ? props.name : nameValue?.value));
  const ariaPressed = computed(() => multiSelectValue?.value ? selectedValue.value : undefined);
  const ariaChecked = computed(() => !multiSelectValue?.value ? selectedValue.value : undefined);
  const role = computed(() => multiSelectValue?.value ? 'button' : 'radio');

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, 'selected')]: selectedValue.value,
  }));


</script>
<template>
  <div :class="componentClass">
    <button
      :id="controlId"
      ref="selectionControlItem"
      :class="classObject"
      type="button"
      :tabindex="isDisabled ? -1 : props.tabindex"
      :role="role"
      :name="buttonName"
      :aria-checked="ariaChecked"
      :aria-pressed="ariaPressed"
      :disabled="isDisabled"
      @click="onSelect!(item, selectedValue)"
    >
      <IdsIcon v-if="selectedValue" aria-hidden="true" :icon="iconChecked" />
      <slot v-if="$slots.icon && (!selectedValue || !props.label)" name="icon" />
      {{ props.label }}
      <slot v-if="$slots.suffixContent" name="suffixContent" />
    </button>
  </div>
</template>
<style scoped lang="scss">
</style>