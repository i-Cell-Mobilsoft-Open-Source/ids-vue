<script setup lang="ts">
import { computed, reactive } from "vue";
import { ActionItemConfig } from "../models/interfaces";

const props = withDefaults(
  defineProps<ActionItemConfig>(),    
  {
    type: "button",
    link: undefined,
    isActive: false,
    isDisabled: false,
    variant: "surface",
    appearance: "text",
    size: "comfortable",
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const hrefLink = computed(() => (props.type === 'link' ? props.link : undefined));
const componentType = computed(() => (props.type === 'button' ? 'button' : 'a'));
const buttonType = computed(() => (props.type === 'button' ? 'button' : undefined));

const actionItemStyle = reactive({
  //enabled
  gap: `var(--ids-comp-size-action-item-size-gap-${props.size})`,
  height: `var(--ids-comp-size-action-item-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-size-action-item-size-border-radius-${props.size})`,
  color: `var(--ids-comp-action-item-${props.appearance}-color-fg-label-${props.variant}-enabled)`,
  background: ` var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-enabled)`,
  padding: `var(--ids-comp-size-action-item-size-padding-y-${props.size}) var(--ids-comp-size-action-item-size-padding-x-${props.size})`,
  border: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.appearance}-color-border-${props.variant}-enabled)`,

  //hovered
  hoverColor: `var(--ids-comp-action-item-${props.appearance}-color-fg-label-${props.variant}-hovered)`,
  hoverBackground: `var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.appearance}-color-border-${props.variant}-hovered)`,

  //focused
  focusedColor: `var(--ids-comp-action-item-${props.appearance}-color-fg-label-${props.variant}-focused)`,
  focusedBackground: `var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-focused)`,

  //pressed
  pressedColor: `var(--ids-comp-action-item-${props.appearance}-color-fg-${props.variant}-pressed)`,
  pressedBackground: `var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-pressed)`,

  //active
  activeColor: `var(--ids-comp-action-item-${props.appearance}-color-fg-label-${props.variant}-active)`,
  activeBackground: `var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-active)`,

  //disabled
  disabledColor: `var(--ids-comp-action-item-${props.appearance}-color-fg-label-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-action-item-${props.appearance}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.appearance}-color-border-${props.variant}-disabled)`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-size-action-item-size-icon-${props.size})`,

  //typography
  fontStyle: `normal`,
  fontSize: `var(--ids-comp-size-action-item-label-typography-font-size-${props.size})`,
  fontFamily: `var(--ids-comp-size-action-item-label-typography-font-family-${props.size})`,
  fontWeight: `var(--ids-comp-size-action-item-label-typography-font-weight-${props.size})`,
  lineHeight: `var(--ids-comp-size-action-item-label-typography-line-height-${props.size})`,
  letterSpacing: `var(--ids-comp-size-action-item-label-typography-letter-spacing-${props.size})`,
});
</script>

<template>
  <component
    :is="componentType" :type="buttonType" 
    :href="hrefLink"
    :class="[size, 'ids-action-item', { 'active': isActive }]"
    :disabled="isDisabled" :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" aria-hidden="true" />
  </component>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

@mixin common {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: v-bind("actionItemStyle.gap");
  height: v-bind("actionItemStyle.height");
  padding: v-bind("actionItemStyle.padding");
  font-size: v-bind("actionItemStyle.fontSize");
  font-style: v-bind("actionItemStyle.fontStyle");
  font-family: v-bind("actionItemStyle.fontFamily");
  font-weight: v-bind("actionItemStyle.fontWeight");
  line-height: v-bind("actionItemStyle.lineHeight");
  letter-spacing: v-bind("actionItemStyle.letterSpacing");
}

//icon sizes
.icon-size {
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind("actionItemStyle.iconWidthHeight");
  height: v-bind("actionItemStyle.iconWidthHeight");
}

button.active,
a.active {
  color: v-bind("actionItemStyle.activeColor");
  background: v-bind("actionItemStyle.activeBackground");
}

//sizes
@each $size in $sizes  {
  .#{$size} {
    @include common;
  }
}

//variants
.ids-action-item {
  color: v-bind("actionItemStyle.color");
  border: v-bind("actionItemStyle.border");
  background: v-bind("actionItemStyle.background");
  border-radius: v-bind("actionItemStyle.borderRadius");

  &:hover {
    color: v-bind("actionItemStyle.hoverColor");
    border: v-bind("actionItemStyle.hoverBorder");
    background: v-bind("actionItemStyle.hoverBackground");
  }

  &:focus {
    outline-offset: 2px;
    color: v-bind('actionItemStyle.focusedColor');
    background: v-bind("actionItemStyle.focusedBackground");
    opacity: var(--ids-comp-action-item-size-spacious-border, 1);
    outline: var(--ids-comp-action-item-focused-outline-size-outline, 1px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
  }

  &:active {
    background: v-bind("actionItemStyle.pressedBackground");
    outline: none;
  }

  &:disabled {
    color: v-bind("actionItemStyle.disabledColor");
    border: v-bind("actionItemStyle.disabledBorder");
    background: v-bind("actionItemStyle.disabledBackground");
  }
}
</style>
