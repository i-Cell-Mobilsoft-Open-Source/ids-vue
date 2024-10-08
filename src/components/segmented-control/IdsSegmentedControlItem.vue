<script setup lang="ts">
import { IdsSegmentedControlItemProps } from '@components/segmented-control/models/IdsSegmentedControlItemProps.interface';
import IdsIcon from '@components/icon/IdsIcon.vue';
import { useSegmentedControlItem } from '@components/segmented-control/composables/UseSegmentControlItem';
import { ref, toRef } from 'vue';
import { IdsSegmentedControlItemSlots } from '@components/segmented-control/models/IdsSegmentedControlItemSlots.interface';

const componentClass = 'ids-segmented-control-item';
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
    disabled: false,
  });
  
  const {
    controlId,
    classObject,
    isDisabled,
    role,
    buttonName,
    ariaChecked,
    ariaPressed,
    item,
    selectedValue,
    iconChecked,
    onSelect
  } = useSegmentedControlItem(
    toRef(() => props.id),
    toRef(() => props.name),
    toRef(() => props.value),
    toRef(() => props.disabled),
    selectionControlItem,
    false,
    componentClass,
  ); 

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