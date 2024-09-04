<script setup lang="ts">
import { Size } from '@models/size.type';
import { IdsSegmentedControlProps } from '@components/segmented-control/models/IdsSegmentedControlProps.interface';
import { SegmentedControlVariant } from '@components/segmented-control/models/IdsSegmentedControlVariant.type';
import { SegmentedControlAppearance } from '@components/segmented-control/models/IdsSegmentedControlAppearance.type';
import { ModelRef, provide, ref, toRef } from 'vue';
import { IdsSegmentedControlInjectedAttributes } from '@components/segmented-control/models/IdsSegmentedControlInjectedAttributes.interface';
import { useSegmentedControl } from '@components/segmented-control/composables/UseSegmentedControl';
import { SegmentedControlAttributes } from '@core/utils/Keys';
import { IdsSegmentedControlEvents } from '@components/segmented-control/models/IdsSegmentedControlEvents.interface';
import { IdsSegmentedControlSlots } from '@components/segmented-control/models/IdsSegmentedControlSlots.interface';

  const componentClass = 'ids-segmented-control-toggle';
  const model: ModelRef<unknown> = defineModel<unknown>();
  const segmentedControlRef = ref();
  defineEmits<IdsSegmentedControlEvents>();
  defineSlots<IdsSegmentedControlSlots>()
  
  const props = withDefaults(
    defineProps<IdsSegmentedControlProps>(),
    {
      id: undefined,
      name: undefined,
      size: Size.COMFORTABLE,
      variant: SegmentedControlVariant.SURFACE,
      appearance: SegmentedControlAppearance.FILLED,
      disabled: false,
    }
  );
  
  const disabledValue = toRef(() => props.disabled);
  const nameValue = toRef(() => props.name);
  const multiSelectValue = toRef(() => false);

  const {
    classObject,
    selected,
    segmentedControlId,
    setRole,
    handleKeyDown,
    initItems,
    onSelect,
    isSelected,
    isItemPreSelectedByValue,
  } = useSegmentedControl(
    toRef(() => props.id),
    multiSelectValue,
    toRef(() => props.size),
    toRef(() => props.variant),
    toRef(() => props.appearance),
    disabledValue,
    model,
    true,
    componentClass
  );

  provide<IdsSegmentedControlInjectedAttributes>(SegmentedControlAttributes, 
    {disabledValue, nameValue, multiSelectValue, onSelect, initItems, isItemPreSelectedByValue, selected, isSelected}
  );

</script>
<template>
  <div :id="segmentedControlId" ref="segmentedControlRef" :class="classObject" :role="setRole" @keydown="handleKeyDown($event)">
    <slot />
  </div>
</template>
