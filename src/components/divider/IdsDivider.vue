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

<style scoped lang="scss">
$orientations: horizontal, vertical;
$sizes: compact, comfortable, spacious, dense;
$variants: primary, secondary, brand, error, success, warning, light, dark, surface;

.ids-divider {
  flex-shrink: 0;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  
  @each $size in $sizes {

    &.ids-divider-#{$size} {
      border-radius: var(--ids-comp-divider-size-border-radius-#{$size});

      &.ids-divider-horizontal {
        height: var(--ids-comp-divider-size-height-#{$size});
        width: 100%;
      }
      &.ids-divider-vertical {
        width: var(--ids-comp-divider-size-width-#{$size});
        height: 100%;
      }
    }
  }

  @each $variant in $variants {
    &.ids-divider-#{$variant} {
      background: var(--ids-comp-divider-color-bg-#{$variant}-default);
    }
  }
}
</style>
