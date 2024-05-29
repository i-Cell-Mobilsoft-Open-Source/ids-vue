<script setup lang="ts">
import { reactive } from 'vue';

const props = withDefaults(defineProps<{
  isDisabled?: boolean,
  interactive?: boolean,
  mode?: "filled" | "outlined",
  leadingIcon?: object | undefined,
  trailingIcon?: object | undefined,
  size?: "compact" | "comfortable",
  variant?: "primary" | "secondary" | "brand" | "error" | "success" | "warning" | "light" | "dark",
}>(), {
  mode: 'filled',
  isDisabled: false,
  size: 'comfortable',
  variant: 'primary',
  leadingIcon: undefined,
  trailingIcon: undefined,
  interactive: false,
});

const tagStyle = reactive({
  //enabled
  gap: `var(--ids-comp-size-tag-size-gap-${props.size})`,
  height: `var(--ids-comp-size-tag-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-size-tag-size-border-radius-${props.size})`,
  color: `var(--ids-comp-tag-${props.mode}-color-fg-label-${props.variant}-enabled)`,
  background: `var(--ids-comp-tag-${props.mode}-color-bg-${props.variant}-enabled)`,
  padding: `var(--ids-comp-size-tag-size-padding-y-${props.size}) var(--ids-comp-size-tag-size-padding-x-${props.size})`,
  border: `var(--ids-comp-size-tag-size-border-${props.size}) solid var(--ids-comp-tag-${props.mode}-color-border-${props.variant}-enabled)`,

  //hovered
  hoverBackground: `var(--ids-comp-tag-${props.mode}-color-bg-${props.variant}-hovered)`,
  hoverColor: `var(--ids-comp-tag-${props.mode}-color-fg-label-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-size-tag-size-border-${props.size}) solid var(--ids-comp-tag-${props.mode}-color-border-${props.variant}-hovered)`,

  //focused
  focusBorderRadius: `var(--ids-comp-size-tag-size-border-radius-${props.size})`,
  focusBackground: `var(--ids-comp-tag-${props.mode}-color-bg-${props.variant}-focused)`,
  focusColor: `var(--ids-comp-tag-${props.mode}-color-fg-label-${props.variant}-focused)`,
  focusBorder: `var(--ids-comp-size-tag-size-border-${props.size}) solid var(--ids-comp-tag-${props.mode}-color-border-${props.variant}-focused)`,

  //active
  activeBackground: `var(--ids-comp-tag-${props.mode}-color-bg-${props.variant}-pressed)`,
  activeColor: `var(--ids-comp-tag-${props.mode}-color-fg-label-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-size-tag-size-border-${props.size}) solid var(--ids-comp-tag-${props.mode}-color-border-${props.variant}-pressed)`,

  //disabled
  disabledColor: `var(--ids-comp-tag-${props.mode}-color-fg-label-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-tag-${props.mode}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-size-tag-size-border-${props.size}) solid var(--ids-comp-tag-${props.mode}-color-border-${props.variant}-disabled)`,

  //icon sizes
  iconWidth: `var(--ids-comp-size-tag-size-icon-${props.size})`,
  iconHeight: `var(--ids-comp-size-tag-size-icon-${props.size})`,
});
</script>

<template>
  <component
    :is="interactive ? 'button' : 'div'" :type="interactive ? 'button': ''" 
    :class="[size, 'ids-tag', { 'light': props.variant === 'light' }]" :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined"
  >
    <component :is="props.leadingIcon" class="icon-size" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" />
  </component>
</template>

<style scoped lang="scss">
//icon sizes
.icon-size {
  gap: 16px;
  display: flex;
  align-items: flex-start;
  width: v-bind('tagStyle.iconWidth');
  height: v-bind('tagStyle.iconHeight');
}

@mixin tagRules {
  color: v-bind('tagStyle.color');
  border: v-bind('tagStyle.border');
  background: v-bind('tagStyle.background');
  border-radius: v-bind('tagStyle.borderRadius');
}

//common
@mixin common {
  flex-shrink: 0;
  font-weight: 500;
  width: fit-content;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  gap: v-bind("tagStyle.gap");
  height: v-bind("tagStyle.height");
  padding: v-bind("tagStyle.padding");
}

//sizes
.compact {
  @include common;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
}

.comfortable {
  @include common;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}

//variants
button.ids-tag {
  @include tagRules;
  &:hover {
    color: v-bind('tagStyle.hoverColor');
    border: v-bind('tagStyle.hoverBorder');
    background: v-bind('tagStyle.hoverBackground');
  }

  &:focus-within {
    outline-style: solid;
    outline-offset: 2px;
    color: v-bind('tagStyle.focusColor');
    border: v-bind('tagStyle.focusBorder');
    background: v-bind('tagStyle.focusBackground');
    border-radius: v-bind('tagStyle.focusBorderRadius');
    outline: var(--ids-comp-tag-focused-outline-size-outline, 3px) solid var(--base-color-dark, rgba(0, 0, 0, 1));
  }

  &:active {
    color: v-bind('tagStyle.activeColor');
    border: v-bind('tagStyle.activeBorder');
    background: v-bind('tagStyle.activeBackground');
    outline: none;
  }

  &:disabled {
    color: v-bind('tagStyle.disabledColor');
    border: v-bind('tagStyle.disabledBorder');
    background: v-bind('tagStyle.disabledBackground');
  }

  &.light:focus {
    outline: var(--ids-comp-tag-focused-outline-size-outline) solid var(--ids-comp-tag-focused-outline-color-light-focused);
  }
}

div.ids-tag {
  @include tagRules;
}
</style>