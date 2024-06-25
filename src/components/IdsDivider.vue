<script setup lang="ts">
import { DividerConfig } from "@models/interfaces";
import { Orientation } from "@models/orientation.type";
import { Size } from "@models/size.type";
import { AllVariants } from "@models/variants";
import { reactive } from "vue";

const props = withDefaults(
  defineProps<DividerConfig>(),
  {
    type: Orientation.HORIZONTAL,
    size: Size.COMFORTABLE,
    variant: AllVariants.PRIMARY,
    width: "auto",
    height: "200px",
  },
);

const DividerStyle = reactive({
  //enabled
  width: props.width,
  height: props.height,
  background: ` var(--ids-comp-divider-color-bg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-size-divider-size-border-radius-${props.size})`,
});
</script>

<template>
  <div :class="[size, type, 'ids-divider']" />
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

@mixin common {
  flex-shrink: 0;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}

@each $size in $sizes {
  .#{$size} {
    @include common;

    &.vertical {
      width: var(--ids-comp-size-divider-size-width-#{$size});
    }

    &.horizontal {
      height: var(--ids-comp-size-divider-size-height-#{$size});
    }
  }
}

.ids-divider {
  width: v-bind("DividerStyle.width");
  height: v-bind("DividerStyle.height");
  background: v-bind("DividerStyle.background");
  border-radius: v-bind("DividerStyle.borderRadius");
}
</style>
