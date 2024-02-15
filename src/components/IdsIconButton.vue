
<script setup lang="ts">
import { reactive } from 'vue';

const props = withDefaults(defineProps<{
  type?: "submit" | "button" | "reset" | undefined,
  mode?: "filled" | "outlined" | "standard",
  size?: "compact" | "comfortable" | "spacious",
  variant?: "primary" | "secondary" | "brand" | "error" | "success" | "warning" | "light" | "dark" | "surface",
  icon?: object | undefined,
}>(), {
  type: 'button',
  mode: 'filled',
  size: 'comfortable',
  variant: 'primary',
  icon: undefined,
});

const iconButtonStyle = reactive({
  //enabled
  gap: `var(--ids-comp-icon-button-size-${props.size}-gap)`,
  width: `var(--ids-comp-icon-button-size-${props.size}-width)`,
  height: `var(--ids-comp-icon-button-size-${props.size}-height)`,
  color: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-enabled)`,
  borderRadius: `var(--ids-comp-icon-button-size-${props.size}-border-radius, 1000px)`,
  background: ` var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-enabled)`,
  border: `var(--ids-comp-icon-button-size-${props.size}-border, 1px) solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-enabled, rgba(255, 255, 255, 0.00))`,

  //hovered
  hoverColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-hovered`,
  hoverBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-icon-button-size-${props.size}-border, 1px) solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-hovered, rgba(255, 255, 255, 0.00))`,

  //focused
  focusedColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-focused`,
  focusedBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-icon-button-size-${props.size}-border, 1px) solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-focused, rgba(255, 255, 255, 0.00))`,

  //active
  activeColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-pressed`,
  activeBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-icon-button-size-${props.size}-border, 1px) solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-pressed, rgba(255, 255, 255, 0.00))`,

  //disabled
  disabledColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-icon-button-size-${props.size}-border, 1px) solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-disabled, rgba(255, 255, 255, 0.00))`,

  iconWidthHeight: `var(--ids-comp-icon-button-size-${props.size}-icon)`,
});

</script>

<template>
  <button :type="type" :class="[size, mode + '-mode']">
    <component :is="props.icon" class="icon-size" />
  </button>
</template>

<style scoped lang="scss">
@mixin commonMixin {
  padding: 0px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: v-bind("iconButtonStyle.gap");
  width: v-bind("iconButtonStyle.width");
  height: v-bind("iconButtonStyle.height");
}

@mixin baseMixin {
  color: v-bind('iconButtonStyle.color');
  background: v-bind('iconButtonStyle.background');
  border-radius: v-bind('iconButtonStyle.borderRadius');
}

@mixin focusMixin {
  outline-offset: 2px;
  background: v-bind('iconButtonStyle.focusedBackground');
  opacity: var(--ids-comp-icon-button-size-spacious-border, 1);
  border-radius: var(--ids-comp-icon-button-size-spacious-border-radius, 1000px);
  outline: var(--ids-comp-icon-button-focused-outline-size-outline, 3px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
}

.icon-size {
  width: v-bind('iconButtonStyle.iconWidthHeight');
  height: v-bind('iconButtonStyle.iconWidthHeight');
}

//sizes
.compact {
  @include commonMixin;
}

.comfortable {
  @include commonMixin;
}

.spacious {
  @include commonMixin;
}

//variants
.filled-mode,
.outlined-mode {
  @include baseMixin;
  border: v-bind('iconButtonStyle.border');

  &:hover {
    color: v-bind('iconButtonStyle.color');
    border: v-bind('iconButtonStyle.hoverBorder');
    background: v-bind('iconButtonStyle.hoverBackground');
  }

  &:focus {
    @include focusMixin;
    color: v-bind('iconButtonStyle.focusedColor');
    border: v-bind('iconButtonStyle.focusedBorder');
  }

  &:active {
    outline: none;
    color: v-bind('iconButtonStyle.activeColor');
    border: v-bind('iconButtonStyle.activeBorder');
    background: v-bind('iconButtonStyle.activeBackground');
  }

  &:disabled {
    color: v-bind('iconButtonStyle.disabledColor');
    border: v-bind('iconButtonStyle.disabledBorder');
    background: v-bind('iconButtonStyle.disabledBackground');
  }
}

.standard-mode {
  @include baseMixin;
  border: none;

  &:hover {
    border: none;
    color: v-bind('iconButtonStyle.hoverColor');
    background: v-bind('iconButtonStyle.hoverBackground');
  }

  &:focus {
    @include focusMixin;
    border: none;
    color: v-bind('iconButtonStyle.focusedColor');
  }

  &:active {
    border: none;
    outline: none;
    color: v-bind('iconButtonStyle.activeColor');
    background: v-bind('iconButtonStyle.activeBackground');
  }

  &:disabled {
    border: none;
    color: v-bind('iconButtonStyle.disabledColor');
    background: v-bind('iconButtonStyle.disabledBackground');
  }
}
</style>
