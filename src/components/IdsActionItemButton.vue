<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    mode?: "text" | "filled",
    size?: "compact" | "comfortable" | "spacious",
    variant?: "surface",
    leadingIcon?: object | undefined,
    trailingIcon?: object | undefined,
    isDisabled?: boolean,
    isActive?: boolean
  }>(),
  {
    mode: "filled",
    isActive: false,
    isDisabled: false,
    variant: "surface",
    size: "comfortable",
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const actionItemButtonStyle = reactive({
  //enabled
  color: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-action-item-button-size-${props.size}-border-radius)`,
  background: ` var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-enabled)`,
  border: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-enabled, rgba(255, 255, 255, 0.00))`,

  //hovered
  hoverColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-hovered)`,
  hoverBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-hovered, rgba(255, 255, 255, 0.00))`,

  //focused
  focusedColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-focused)`,
  focusedBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-focused)`,

  //pressed
  pressedColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-pressed)`,
  pressedBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-pressed)`,

  //active
  activeColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-active)`,
  activeBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-active)`,

  //disabled
  disabledColor: `var(--ids-comp-action-item-button-${props.mode}-color-fg-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-action-item-button-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-action-item-button-size-${props.size}-border, 1px) solid var(--ids-comp-action-item-button-${props.mode}-color-border-${props.variant}-disabled, rgba(255, 255, 255, 0.00))`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-action-item-button-size-${props.size}-icon)`,
});
</script>

<template>
  <button
    type="button"
    :class="[size ,'ids-action-item-button', { 'active': isActive }]"
    :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component
      :is="props.leadingIcon"
      class="icon-size"
      aria-hidden="true"
    />
    <slot />
    <component
      :is="props.trailingIcon"
      class="icon-size"
      aria-hidden="true"
    />
  </button>
</template>

<style scoped lang="scss">
@mixin commonMixin {
  display: flex;
  flex-shrink: 0;
  font-weight: 700;
  align-items: center;
  justify-content: center;
}

//icon sizes
.icon-size {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind("actionItemButtonStyle.iconWidthHeight");
  height: v-bind("actionItemButtonStyle.iconWidthHeight");
}

button.active {
  color: v-bind("actionItemButtonStyle.activeColor");
  background: v-bind("actionItemButtonStyle.activeBackground");
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
    color: v-bind("actionItemButtonStyle.hoverColor");
    border: v-bind("actionItemButtonStyle.hoverBorder");
    background: v-bind("actionItemButtonStyle.hoverBackground");
  }

  &:focus {
    outline-offset: 2px;
    color: v-bind('actionItemButtonStyle.focusedColor');
    background: v-bind("actionItemButtonStyle.focusedBackground");
    opacity: var(--ids-comp-action-item-button-size-spacious-border, 1);
    outline: var(--ids-comp-action-item-button-focused-outline-size-outline, 1px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
  }

  &:active {
    background: v-bind("actionItemButtonStyle.pressedBackground");
    outline: none;
  }

  &:disabled {
    color: v-bind("actionItemButtonStyle.disabledColor");
    border: v-bind("actionItemButtonStyle.disabledBorder");
    background: v-bind("actionItemButtonStyle.disabledBackground");
  }
}
</style>
