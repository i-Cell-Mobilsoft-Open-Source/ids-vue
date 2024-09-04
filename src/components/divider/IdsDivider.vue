<script setup lang="ts">
import { addClassPrefix } from "@core/utils/AddClassPrefix";
import { Orientation } from "@models/orientation.type";
import { Size } from "@models/size.type";
import { AllVariants } from "@models/variants";
import { computed } from "vue";
import { IdsDividerProps } from "@components/divider/models/IdsDividerProps.interface";

const componentClass = 'ids-divider';

const props = withDefaults(
  defineProps<IdsDividerProps>(),
  {
    type: Orientation.HORIZONTAL,
    size: Size.COMFORTABLE,
    variant: AllVariants.PRIMARY,
  },
);

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.type)]: !!props.type,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));
</script>

<template>
  <div :class="classObject" />
</template>
