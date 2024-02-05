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
    | "dark";
    leadingIcon?: object;
    trailingIcon?: object;
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
  opacity: `var(--ids-comp-buttons-size-${props.size}-border, 1)`,
  color: `var(--ids-comp-buttons-${props.mode}-color-fg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-buttons-size-${props.size}-border-radius, 1000px)`,
  background: ` var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-enabled)`,
  border: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-enabled, rgba(255, 255, 255, 0.00))`,

  //hovered
  hoverBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-hovered, rgba(255, 255, 255, 0.00))`,

  //focused
  focusedBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-focused, rgba(255, 255, 255, 0.00))`,

  //active
  activeBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-pressed, rgba(255, 255, 255, 0.00))`,

  //disabled
  disabledColor: `var(--ids-comp-buttons-${props.mode}-color-fg-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-buttons-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-buttons-size-${props.size}-border, 1px) solid var(--ids-comp-buttons-${props.mode}-color-border-${props.variant}-disabled, rgba(255, 255, 255, 0.00))`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-buttons-size-${props.size}-icon)`,
});
</script>

<template>
  <button
    :type="type" :class="[size, 'ids-button']"
    :disabled="isDisabled"
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
}

//sizes
.compact {
  @include common;
  font-size: 12px;
  line-height: 16px;
  gap: var(--ids-comp-buttons-size-compact-gap, 4px);
  height: var(--ids-comp-buttons-size-compact-height, 24px);
  min-width: var(--ids-comp-buttons-size-compact-min-width, 24px);
  padding: var(--ids-comp-buttons-size-compact-padding-y, 6px) var(--ids-comp-buttons-size-compact-padding-x, 8px);
}

.comfortable {
  @include common;
  font-size: 14px;
  line-height: 20px;
  gap: var(--ids-comp-buttons-size-comfortable-gap, 8px);
  height: var(--ids-comp-buttons-size-comfortable-height, 40px);
  min-width: var(--ids-comp-buttons-size-comfortable-min-width, 40px);
  padding: var(--ids-comp-buttons-size-comfortable-padding-y, 10px) var(--ids-comp-buttons-size-comfortable-padding-x, 20px);
}

.spacious {
  @include common;
  font-size: 18px;
  line-height: 24px;
  gap: var(--ids-comp-buttons-size-spacious-gap, 8px);
  height: var(--ids-comp-buttons-size-spacious-height, 56px);
  min-width: var(--ids-comp-buttons-size-spacious-min-width, 56px);
  padding: var(--ids-comp-buttons-size-spacious-padding-y, 16px) var(--ids-comp-buttons-size-spacious-padding-x, 24px);
}

//variants
.ids-button {
  color: v-bind("buttonStyle.color");
  border: v-bind("buttonStyle.border");
  opacity: v-bind("buttonStyle.opacity");
  background: v-bind("buttonStyle.background");
  border-radius: v-bind("buttonStyle.borderRadius");

  &:hover {
    border: v-bind("buttonStyle.hoverBorder");
    background: v-bind("buttonStyle.hoverBackground");
  }

  &:focus {
    outline-offset: 2px;
    border: v-bind("buttonStyle.focusedBorder");
    background: v-bind("buttonStyle.focusedBackground");
    opacity: var(--ids-comp-buttons-size-spacious-border, 1);
    border-radius: var(--ids-comp-buttons-size-spacious-border-radius, 1000px);
    outline: var(--ids-comp-buttons-focused-outline-size-outline, 3px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
  }

  &:active {
    border: v-bind("buttonStyle.activeBorder");
    background: v-bind("buttonStyle.activeBackground");
    outline: none;
  }

  &:disabled {
    color: v-bind("buttonStyle.disabledColor");
    border: v-bind("buttonStyle.disabledBorder");
    background: v-bind("buttonStyle.disabledBackground");
  }
}
</style>
