<script setup lang="ts">
import { IconButtonAppearance } from '@models/appearances';
import { ButtonTypeAttribute } from '@models/attributes';
import { IconButtonConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { reactive } from 'vue';

const props = withDefaults(defineProps<IconButtonConfig>(), {
  type: ButtonTypeAttribute.BUTTON,
  mode: IconButtonAppearance.FILLED,
  icon: undefined,
  isDisabled: false,
  variant: AllVariants.PRIMARY,
  size: Size.COMFORTABLE,
});

const iconButtonStyle = reactive({
  //enabled
  width: `var(--ids-comp-icon-button-size-width-${props.size})`,
  height: `var(--ids-comp-icon-button-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-icon-button-size-border-radius-${props.size})`,
  color: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-default)`,
  background: ` var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-default)`,
  padding: `var(--ids-comp-icon-button-size-padding-y-${props.size}) var(ids-comp-icon-button-size-padding-x-${props.size})`,
  border: `var(--ids-comp-icon-button-size-border-${props.size}) 
  solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-default)`,

  //hovered
  hoverColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-hovered)`,
  hoverBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-icon-button-size-border-${props.size}) 
  solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-hovered)`,

  //focused
  focusedColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-focused)`,
  focusedBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-icon-button-size-border-${props.size}) 
  solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-focused)`,

  //active
  activeColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-pressed)`,
  activeBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-icon-button-size-border-${props.size}) 
  solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-pressed)`,

  //disabled
  disabledColor: `var(--ids-comp-icon-button-${props.mode}-color-fg-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-icon-button-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-icon-button-size-border-${props.size}) 
  solid var(--ids-comp-icon-button-${props.mode}-color-border-${props.variant}-disabled)`,

  //icon
  iconWidthHeight: `var(--ids-comp-icon-button-size-icon-${props.size})`,
});
</script>

<template>
  <button
    :type="type" :disabled="isDisabled" :class="[size, mode + '-mode', { 'light': props.variant === 'light' },]"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.icon" class="icon-size" />
  </button>
</template>

<style scoped lang="scss">
@mixin baseMixin {
  color: v-bind('iconButtonStyle.color');
  background: v-bind('iconButtonStyle.background');
  border-radius: v-bind('iconButtonStyle.borderRadius');
}

@mixin focusMixin {
  outline-offset: 2px;
  border-radius: v-bind('iconButtonStyle.borderRadius');
  background: v-bind('iconButtonStyle.focusedBackground');
  outline: var(--ids-comp-icon-button-focused-outline-size-outline) solid var(--ids-base-color-dark);
}

.icon-size {
  width: v-bind('iconButtonStyle.iconWidthHeight');
  height: v-bind('iconButtonStyle.iconWidthHeight');
}

//sizes
.compact,
.comfortable,
.spacious {
  padding: 0px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: v-bind("iconButtonStyle.width");
  height: v-bind("iconButtonStyle.height");
}

//variants
.filled-mode,
.outlined-mode {
  @include baseMixin;
  border: v-bind('iconButtonStyle.border');

  &:hover {
    color: v-bind('iconButtonStyle.hoverColor');
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

  &.light:focus {
    background: var(--ids-comp-icon-button-outlined-color-bg-light-focused);
    outline: var(--ids-comp-icon-button-focused-outline-size-outline) solid var(--ids-base-color-light);
  }
}

.outlined-mode {
  &.light:active {
    background: var(--ids-comp-icon-button-outlined-color-bg-light-pressed);
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

  &.light:focus {
    background: var(--ids-comp-icon-button-outlined-color-bg-light-focused);
    outline: var(--ids-comp-icon-button-focused-outline-size-outline) solid var(--ids-base-color-light);
  }

  &.light:active {
    background: var(--ids-comp-icon-button-outlined-color-bg-light-pressed);
  }
}
</style>