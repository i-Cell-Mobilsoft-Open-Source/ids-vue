<script setup lang="ts">
import { reactive } from "vue";
import { Size } from "@models/size.type";
import { AllVariants } from "@models/variants";
import { ButtonAppearance } from "@models/appearances";
import { ButtonTypeAttribute } from "@models/attributes";
import { ButtonConfig } from "@models/interfaces";

const props = withDefaults(
  defineProps<ButtonConfig>(),
  {
    type: ButtonTypeAttribute.BUTTON,
    appearance: ButtonAppearance.FILLED,
    variant: AllVariants.PRIMARY,
    isDisabled: false,
    size: Size.COMFORTABLE,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const buttonStyle = reactive({

  //enabled
  gap: `var(--ids-comp-buttons-size-gap-${props.size})`,
  height: `var(--ids-comp-buttons-size-height-${props.size})`,
  minWidth: `var(--ids-comp-buttons-size-min-width-${props.size})`,
  borderRadius: `var(--ids-comp-buttons-size-border-radius-${props.size})`,
  background: `var(--ids-comp-buttons-${props.appearance}-color-bg-${props.variant}-default)`,
  color: `var(--ids-comp-buttons-${props.appearance}-color-fg-label-${props.variant}-default)`,
  padding: `var(--ids-comp-buttons-size-padding-y-${props.size}) var(--ids-comp-buttons-size-padding-x-${props.size})`,
  border: `var(--ids-comp-buttons-size-border-width-${props.size}) solid 
  var(--ids-comp-buttons-${props.appearance}-color-border-${props.variant}-default)`,
  
  //hovered
  hoverBackground: `var(--ids-comp-buttons-${props.appearance}-color-bg-${props.variant}-hovered)`,
  hoverColor: `var(--ids-comp-buttons-${props.appearance}-color-fg-label-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-buttons-size-border-width-${props.size}) solid 
  var(--ids-comp-buttons-${props.appearance}-color-border-${props.variant}-hovered)`,

  //focused
  focusedBackground: `var(--ids-comp-buttons-${props.appearance}-color-bg-${props.variant}-focused)`,
  focusedColor: `var(--ids-comp-buttons-${props.appearance}-color-fg-label-${props.variant}-focused)`,
  focusedBorder: `var(--ids-comp-buttons-size-border-width-${props.size}) 
  solid var(--ids-comp-buttons-${props.appearance}-color-border-${props.variant}-focused)`,

  //active
  activeBackground: `var(--ids-comp-buttons-${props.appearance}-color-bg-${props.variant}-pressed)`,
  activeColor: `var(--ids-comp-buttons-${props.appearance}-color-fg-label-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-buttons-size-border-width-${props.size}) 
  solid var(--ids-comp-buttons-${props.appearance}-color-border-${props.variant}-pressed)`,

  //disabled
  disabledBackground: `var(--ids-comp-buttons-${props.appearance}-color-bg-${props.variant}-disabled)`,
  disabledColor: `var(--ids-comp-buttons-${props.appearance}-color-fg-label-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-buttons-size-border-width-${props.size}) 
  solid var(--ids-comp-buttons-${props.appearance}-color-border-${props.variant}-disabled)`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-buttons-size-icon-${props.size})`,

  //font
  fontFamily: `var(--ids-comp-buttons-label-typography-font-family-${props.size})`,
  fontWeight: `var(--ids-comp-buttons-label-typography-font-weight-${props.size})`,
  fontSize: `var(--ids-comp-buttons-label-typography-font-size-${props.size})`,
  lineHeight: `var(--ids-comp-buttons-label-typography-line-height-${props.size})`,
  letterSpacing: `var(--ids-comp-buttons-label-typography-letter-spacing-${props.size})`,
});
</script>

<template>
  <button
    :type="type" :disabled="isDisabled" :class="[size, 'ids-button', { 'light': props.variant === 'light' }]"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" aria-hidden="true" />
  </button>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

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
  font-weight: v-bind("buttonStyle.fontWeight"); 
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-family: v-bind("buttonStyle.fontFamily");
  font-size: v-bind("buttonStyle.fontSize");
  line-height: v-bind("buttonStyle.lineHeight");
  letter-spacing: v-bind("buttonStyle.letterSpacing");
  gap: v-bind("buttonStyle.gap");
  height: v-bind("buttonStyle.height");
  padding: v-bind("buttonStyle.padding");
  min-width: v-bind("buttonStyle.minWidth");
}

//sizes
@each $size in $sizes  {
  .#{$size} {
    @include common;
  }
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
    border-radius: v-bind("buttonStyle.borderRadius");
    background: v-bind("buttonStyle.focusedBackground");
    outline: var(--ids-comp-buttons-focused-outline-size-outline) solid var(--ids-comp-buttons-focused-outline-color-dark-focused);
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
    outline: var(--ids-comp-buttons-focused-outline-size-outline) solid var(--ids-comp-buttons-focused-outline-color-light-focused);
  }

}
</style>
