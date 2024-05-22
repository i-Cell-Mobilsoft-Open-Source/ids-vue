<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    mode?: "text" | "filled",
    variant?: "surface",
    size?: "dense" | "compact" | "comfortable" | "spacious",
    type?: "button" | "link",
    leadingIcon?: object | undefined,
    trailingIcon?: object | undefined,
    isDisabled?: boolean,
    isActive?: boolean
  }>(),
  {
    mode: "text",
    type: "button",
    isActive: false,
    isDisabled: false,
    variant: "surface",
    size: "comfortable",
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);


const actionItemStyle = reactive({
  //enabled
  gap: `var(--ids-comp-size-action-item-size-gap-${props.size})`,
  height: `var(--ids-comp-size-action-item-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-size-action-item-size-border-radius-${props.size})`,
  color: `var(--ids-comp-action-item-${props.mode}-color-fg-label-${props.variant}-enabled)`,
  background: ` var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-enabled)`,
  padding: `var(--ids-comp-size-action-item-size-padding-y-${props.size}) var(--ids-comp-size-action-item-size-padding-x-${props.size})`,
  border: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.mode}-color-border-${props.variant}-enabled)`,

  //hovered
  hoverColor: `var(--ids-comp-action-item-${props.mode}-color-fg-label-${props.variant}-hovered)`,
  hoverBackground: `var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.mode}-color-border-${props.variant}-hovered)`,

  //focused
  focusedColor: `var(--ids-comp-action-item-${props.mode}-color-fg-label-${props.variant}-focused)`,
  focusedBackground: `var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-focused)`,

  //pressed
  pressedColor: `var(--ids-comp-action-item-${props.mode}-color-fg-${props.variant}-pressed)`,
  pressedBackground: `var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-pressed)`,

  //active
  activeColor: `var(--ids-comp-action-item-${props.mode}-color-fg-label-${props.variant}-active)`,
  activeBackground: `var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-active)`,

  //disabled
  disabledColor: `var(--ids-comp-action-item-${props.mode}-color-fg-label-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-action-item-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-size-action-item-size-border-width-${props.size}) 
  solid var(--ids-comp-action-item-${props.mode}-color-border-${props.variant}-disabled)`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-size-action-item-size-icon-${props.size})`,
});
</script>

<template>
  <button
    v-if="type === 'button'" type="button" :class="[size, 'ids-action-item', { 'active': isActive }]"
    :disabled="isDisabled" :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" aria-hidden="true" />
  </button>
  <a
    v-else :class="[size, 'ids-action-item', { 'active': isActive }]" :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" aria-hidden="true" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" aria-hidden="true" />
  </a>
</template>

<style scoped lang="scss">
@mixin commonMixin {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: v-bind("actionItemStyle.gap");
  height: v-bind("actionItemStyle.height");
  padding: v-bind("actionItemStyle.padding");
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
.dense {
  @include commonMixin;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.5px;
}
.compact {
  @include commonMixin;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.5px;
}

.comfortable {
  @include commonMixin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

.spacious {
  @include commonMixin;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; 
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
