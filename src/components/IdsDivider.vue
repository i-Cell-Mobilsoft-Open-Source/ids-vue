<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "vertical" | "horizontal";
    size?: "compact" | "comfortable" | "spacious";
    variant?:
    | "surface"
    | "primary"
    | "secondary"
    | "brand"
    | "error"
    | "success"
    | "warning"
    | "light"
    | "dark";
    width?: string;
    height?: string;
  }>(),
  {
    type: "horizontal",
    size: "comfortable",
    variant: "primary",
    width: "auto",
    height: "100px",
  },
);

const DividerStyle = reactive({
  //enabled
  background: ` var(--ids-comp-divider-color-bg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-divider-size-${props.size}-border-radius, 0px)`,
  width: props.width,
  height: props.height,
});
</script>

<template>
  <div :class="[type, size, 'ids-divider']" />
</template>

<style scoped lang="scss">
@mixin common {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}

//sizes
.vertical {
  &.compact {
    @include common;
    align-self: stretch;
    width: var(--ids-comp-divider-size-compact-width, 1px);
  }

  &.comfortable {
    @include common;
    align-self: stretch;
    width: var(--ids-comp-divider-size-comfortable-width, 2px);
  }

  &.spacious {
    @include common;
    align-self: stretch;
    width: var(--ids-comp-divider-size-spacious-width, 4px);
  }
}

.horizontal {
  &.compact {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-compact-height, 1px);
  }

  &.comfortable {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-comfortable-height, 2px);
  }

  &.spacious {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-spacious-height, 4px);
  }
}

.ids-divider {
  width: v-bind("DividerStyle.width");
  height: v-bind("DividerStyle.height");
  background: v-bind("DividerStyle.background");
  border-radius: v-bind("DividerStyle.borderRadius");
}
</style>
