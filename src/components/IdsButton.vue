<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "submit" | "button" | "reset";
    mode?: "filled" | "outlined" | "text";
    size?: "compact" | "comfortable" | "spacious";
    variant?:
    | "primary"
    | "secondary"
    | "brand"
    | "error"
    | "success"
    | "warning"
    | "light"
    | "dark"
    | "surface";
    leadingIcon?: object | undefined;
    trailingIcon?: object | undefined;
    isDisabled?: boolean;
  }>(),
  {
    type: "button",
    mode: "filled",
    isDisabled: false,
    variant: "primary",
    size: "comfortable",
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const buttonStyle = reactive({
  //enabled
  gap: `var(--ids-comp-buttons-size-${props.size}-gap)`,
  height: `var(--ids-comp-buttons-size-${props.size}-height)`,
  minWidth: `var(--ids-comp-buttons-size-${props.size}-min-width)`,
  borderRadius: `var(--ids-comp-buttons-size-${props.size}-border-radius)`,
  background: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-enabled)`,
  color: `var(--ids-comp-buttons-${props.mode}-color-fg-label-${props.variant}-enabled)`,
  padding: `var(--ids-comp-buttons-size-${props.size}-padding-y) var(--ids-comp-buttons-size-${props.size}-padding-x)`,
  border: `var(--ids-comp-buttons-size-${props.size}-border) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-enabled)`,

  //hovered
  hoverBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverColor: `var(--ids-comp-buttons-${props.mode}-color-fg-label-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-hovered)`,

  //focused
  focusedBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-focused)`,
  focusedColor: `var(--ids-comp-buttons-${props.mode}-color-fg-label-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-focused)`,

  //active
  activeBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeColor: `var(--ids-comp-buttons-${props.mode}-color-fg-label-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-pressed)`,

  //disabled
  disabledBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledColor: `var(--ids-comp-buttons-${props.mode}-color-fg-label-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-disabled)`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-buttons-size-${props.size}-icon)`,
});
</script>

<template>
  <button
    :type="type" 
    :disabled="isDisabled" 
    :class="[size, 'ids-button', { 'light': props.variant === 'light' }]"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" aria-hidden="true" />
  </button>
</template>

<style scoped lang="scss">
//icon sizes
.icon-size {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind("buttonStyle.iconWidthHeight");
  height: v-bind("buttonStyle.iconWidthHeight");
}

@mixin common {
  flex-shrink: 0;
  font-weight: 700;
  width: fit-content;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  gap: v-bind("buttonStyle.gap");
  height: v-bind("buttonStyle.height");
  padding: v-bind("buttonStyle.padding");
  min-width: v-bind("buttonStyle.minWidth");
}

//sizes
.compact {
  @include common;
  font-size: 12px;
  line-height: 16px;
}

.comfortable {
  @include common;
  font-size: 14px;
  line-height: 20px;
}

.spacious {
  @include common;
  font-size: 18px;
  line-height: 24px;
}

//variants
.ids-button {
  color: v-bind("buttonStyle.color");
  border: v-bind("buttonStyle.border");
  background: v-bind("buttonStyle.background");
  border-radius: v-bind("buttonStyle.borderRadius");

  &:hover {
    color: v-bind("buttonStyle.hoverColor");
    border: v-bind("buttonStyle.hoverBorder");
    background: v-bind("buttonStyle.hoverBackground");
  }

  &:focus {
    outline-offset: 2px;
    color: v-bind("buttonStyle.focusedColor");
    border: v-bind("buttonStyle.focusedBorder");
    background: v-bind("buttonStyle.focusedBackground");
    border-radius: var(--ids-comp-buttons-size-spacious-border-radius);
    outline: var(--ids-comp-buttons-focused-outline-size-outline) solid var(--ids-base-color-dark);
  }

  &:active {
    outline: none;
    color: v-bind("buttonStyle.activeColor");
    border: v-bind("buttonStyle.activeBorder");
    background: v-bind("buttonStyle.activeBackground");
  }

  &:disabled {
    color: v-bind("buttonStyle.disabledColor");
    border: v-bind("buttonStyle.disabledBorder");
    background: v-bind("buttonStyle.disabledBackground");
  }

  &.light:focus {
    outline: var(--ids-comp-buttons-focused-outline-size-outline) solid var(--ids-base-color-light);
  }
   
}
</style>
