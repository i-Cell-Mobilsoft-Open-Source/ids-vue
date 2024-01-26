<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    mode?: "text" | "filled",
    size?: "compact" | "comfortable" | "spacious",
    variant?: "surface",
    leadingIcon?: Object | undefined,
    trailingIcon?: Object | undefined,
    isDisabled?: boolean,
  }>(),
  {
    mode: "filled",
    isDisabled: false,
    size: "comfortable",
    variant: "surface",
  },
);

const actionItemButtonStyle = reactive({
  //enabled
  //opacity: `var(--ids-comp-action-item-button-size-${props.size}-border, 1)`,
  color: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-action-item-button-size-${props.size}-border-radius)`,
  background: ` var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-enabled)`,
  border: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-enabled, rgba(255, 255, 255, 0.00))`,

  //hovered
  hoverBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-hovered, rgba(255, 255, 255, 0.00))`,

  //focused
  focusedBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-focused, rgba(255, 255, 255, 0.00))`,
  //background: var(--comp-action-item-button-filled-color-bg-surface-focused, #F1F5F9);
  //border-radius: var(--comp-menu-item-size-spacious-border-radius, 1rem);

  //active
  activeBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-pressed, rgba(255, 255, 255, 0.00))`,

  //   border-radius: var(--comp-action-item-button-size-spacious-border-radius, 1rem);
  // border: var(--comp-action-item-button-size-spacious-border-width, 1px) solid var(--comp-action-item-button-text-color-border-surface-active, rgba(255, 255, 255, 0.00));
  // background: var(--comp-action-item-button-text-color-bg-surface-active, #F1F5F9);

  //disabled
  disabledColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-disabled, rgba(255, 255, 255, 0.00))`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-action-item-button-size-${props.size}-icon)`,
});
</script>

<template>
  <button type="button" :class="[size, 'ids-action-item-button']" :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined">
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot></slot>
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
  width: v-bind("actionItemButtonStyle.iconWidthHeight");
  height: v-bind("actionItemButtonStyle.iconWidthHeight");
}

@mixin commonMixin {
  display: flex;
  flex-shrink: 0;
  font-weight: 700;
  align-items: center;
  justify-content: center;
}

//sizes
.compact {
  @include commonMixin;
  font-size: 12px;
  line-height: 16px;
  height: var(--ids-comp-menu-item-size-compact-height);
  gap: var(--ids-comp-action-item-button-size-compact-gap);
  padding: var(--ids-comp-action-item-button-size-compact-padding-x);
}

.comfortable {
  @include commonMixin;
  font-size: 14px;
  line-height: 20px;
  gap: var(--ids-comp-action-item-button-size-comfortable-gap);
  height: var(--ids-comp-action-item-button-size-comfortable-height);
  padding: var(--ids-comp-action-item-button-size-comfortable-padding-y) var(--ids-comp-action-item-button-size-comfortable-padding-x);
}

.spacious {
  @include commonMixin;
  font-size: 18px;
  line-height: 24px;
  gap: var(--ids-comp-action-item-button-size-spacious-gap);
  height: var(--ids-comp-action-item-button-size-spacious-height);
  padding: var(--ids-comp-action-item-button-size-spacious-padding-y) var(--ids-comp-action-item-button-size-spacious-padding-x);
}

//variants
.ids-action-item-button {
  color: v-bind("actionItemButtonStyle.color");
  border: v-bind("actionItemButtonStyle.border");
  background: v-bind("actionItemButtonStyle.background");
  border-radius: v-bind("actionItemButtonStyle.borderRadius");

  &:hover {
    border: v-bind("actionItemButtonStyle.hoverBorder");
    background: v-bind("actionItemButtonStyle.hoverBackground");
  }

  &:focus {
    border: v-bind("actionItemButtonStyle.focusedBorder");
    outline-offset: 2px;
    background: v-bind("actionItemButtonStyle.focusedBackground");
    opacity: var(--ids-comp-action-item-button-size-spacious-border, 1);
    border-radius: var(--ids-comp-action-item-button-size-spacious-border-radius, 1000px);
    outline: var(--ids-comp-action-item-button-focused-outline-size-outline, 3px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
  }

  &:active {
    border: v-bind("actionItemButtonStyle.activeBorder");
    background: v-bind("actionItemButtonStyle.activeBackground");
    outline: none;
  }

  &:disabled {
    color: v-bind("actionItemButtonStyle.disabledColor");
    border: v-bind("actionItemButtonStyle.disabledBorder");
    background: v-bind("actionItemButtonStyle.disabledBackground");
  }
}
</style>
