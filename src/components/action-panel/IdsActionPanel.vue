<script setup lang="ts">
import { IdsActionPanelProps } from '@components/action-panel/models/IdsActionPanelProps.interface';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { IdsActionPanelAppearance } from '@components/action-panel/models/IdsActionPanelAppearance.type';
import { computed } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { IdsActionPanelSlots } from '@components/action-panel/models/IdsActionPanelSlots.interface';

const componentClass = 'ids-action-panel';
defineSlots<IdsActionPanelSlots>();

const props = withDefaults(
  defineProps<IdsActionPanelProps>(),
  {
    appearance: IdsActionPanelAppearance.FILLED,
    variant: AllVariants.LIGHT,
    size: Size.COMPACT,
  },
);

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));
</script>

<template>
  <div :class="classObject">
    <slot />
  </div>
</template>
