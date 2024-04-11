<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "vertical" | "horizontal",
    size?: "dense" | "compact" | "comfortable" | "spacious",
    variant?:
    | "surface"
    | "primary"
    | "secondary"
    | "brand"
    | "error"
    | "success"
    | "warning"
    | "light"
    | "dark",
    width?: string,
    height?: string,
  }>(),
  {
    type: "horizontal",
    size: "comfortable",
    variant: "primary",
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
  <div :class="[type, size, 'ids-divider']" />
</template>

<style scoped lang="scss">
@mixin common {
  flex-shrink: 0;
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
    width: var(--ids-comp-divider-size-compact-width);
  }

  &.comfortable {
    @include common;
    align-self: stretch;
    width: var(--ids-comp-divider-size-comfortable-width);
  }

  &.spacious {
    @include common;
    align-self: stretch;
    width: var(--ids-comp-divider-size-spacious-width);
  }
}

.horizontal {
  &.compact {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-compact-height);
  }

  &.comfortable {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-comfortable-height);
  }

  &.spacious {
    @include common;
    align-self: stretch;
    height: var(--ids-comp-divider-size-spacious-height);
  }
}

.ids-divider {
  width: v-bind("DividerStyle.width");
  height: v-bind("DividerStyle.height");
  background: v-bind("DividerStyle.background");
  border-radius: v-bind("DividerStyle.borderRadius");
}
</style>
