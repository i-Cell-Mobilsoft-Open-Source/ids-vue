<script setup lang="ts">
import { TagAppearance } from '@models/appearances';
import { TagConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { computed, reactive } from 'vue';

const props = withDefaults(defineProps<TagConfig>(), {
  appearance: TagAppearance.FILLED,
  size: Size.COMFORTABLE,
  variant: AllVariants.PRIMARY,
  leadingIcon: undefined,
  trailingIcon: undefined,
  interactive: false,
  link: undefined,
});

const hrefLink = computed(() => (props.interactive ? props.link : undefined));
const componentType = computed(() => (props.interactive  ? 'a' : 'div'));

const tagStyle = reactive({
  //enabled
  gap: `var(--ids-comp-tag-size-gap-${props.size})`,
  height: `var(--ids-comp-tag-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-tag-size-border-radius-${props.size})`,
  color: `var(--ids-comp-tag-${props.appearance}-color-fg-label-${props.variant}-default)`,
  background: `var(--ids-comp-tag-${props.appearance}-color-bg-${props.variant}-default)`,
  padding: `var(--ids-comp-tag-size-padding-y-${props.size}) var(--ids-comp-tag-size-padding-x-${props.size})`,
  border: `var(--ids-comp-tag-size-border-width-${props.size}) solid 
  var(--ids-comp-tag-${props.appearance}-color-border-${props.variant}-default)`,

  //hovered
  hoverBackground: `var(--ids-comp-tag-${props.appearance}-color-bg-${props.variant}-hovered)`,
  hoverColor: `var(--ids-comp-tag-${props.appearance}-color-fg-label-${props.variant}-hovered)`,
  hoverBorder: `var(--ids-comp-tag-size-border-width-${props.size}) solid 
  var(--ids-comp-tag-${props.appearance}-color-border-${props.variant}-hovered)`,

  //focused
  focusBorderRadius: `var(--ids-comp-tag-size-border-radius-${props.size})`,
  focusBackground: `var(--ids-comp-tag-${props.appearance}-color-bg-${props.variant}-focused)`,
  focusColor: `var(--ids-comp-tag-${props.appearance}-color-fg-label-${props.variant}-focused)`,
  focusBorder: `var(--ids-comp-tag-size-border-width-${props.size}) solid 
  var(--ids-comp-tag-${props.appearance}-color-border-${props.variant}-focused)`,

  //active
  activeBackground: `var(--ids-comp-tag-${props.appearance}-color-bg-${props.variant}-pressed)`,
  activeColor: `var(--ids-comp-tag-${props.appearance}-color-fg-label-${props.variant}-pressed)`,
  activeBorder: `var(--ids-comp-tag-size-border-width-${props.size}) solid 
  var(--ids-comp-tag-${props.appearance}-color-border-${props.variant}-pressed)`,

  //disabled
  disabledColor: `var(--ids-comp-tag-${props.appearance}-color-fg-label-${props.variant}-disabled)`,
  disabledBackground: `var(--ids-comp-tag-${props.appearance}-color-bg-${props.variant}-disabled)`,
  disabledBorder: `var(--ids-comp-tag-size-border-width-${props.size}) solid var(--ids-comp-tag-${props.appearance}-color-border-${props.variant}-disabled)`,
  
  //icon sizes
  iconWidth: `var(--ids-comp-tag-size-icon-${props.size})`,
  iconHeight: `var(--ids-comp-tag-size-icon-${props.size})`,

  //font
  fontFamily: `var(--ids-comp-tag-label-typography-font-family-${props.size})`,
  fontWeight: `var(--ids-comp-tag-label-typography-font-weight-${props.size})`,
  fontSize: `var(--ids-comp-tag-label-typography-font-size-${props.size})`,
  lineHeight: `var(--ids-comp-tag-label-typography-line-height-${props.size})`,
  letterSpacing: `var(--ids-comp-tag-label-typography-letter-spacing-${props.size})`,
});
</script>

<template>
  <component
    :is="componentType" :href="hrefLink" 
    :class="[size, 'ids-tag', { 'light': props.variant === 'light' }]"
  >
    <component :is="props.leadingIcon" class="icon-size" />
    <slot />
    <component :is="props.trailingIcon" class="icon-size" />
  </component> 
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

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
  box-sizing: border-box;
}

//common
@mixin common {
  flex-shrink: 0;
  font-weight: v-bind("tagStyle.fontWeight");
  width: fit-content;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-family: v-bind("tagStyle.fontFamily");
  font-size: v-bind("tagStyle.fontSize");
  line-height: v-bind("tagStyle.lineHeight");
  letter-spacing: v-bind("tagStyle.letterSpacing");
  gap: v-bind("tagStyle.gap");
  height: v-bind("tagStyle.height");
  padding: v-bind("tagStyle.padding");
}

//sizes
@each $size in $sizes  {
  .#{$size} {
    @include common;
  }
}

//variants
.ids-tag {
  @include tagRules;

  &:hover {
    color: v-bind('tagStyle.hoverColor');
    border: v-bind('tagStyle.hoverBorder');
    background: v-bind('tagStyle.hoverBackground');
  }

  &:focus {
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

  &.light:focus {
    outline: var(--ids-comp-tag-focused-outline-size-outline) solid var(--ids-comp-tag-focused-outline-color-light-focused);
  }
}

.ids-tag {
  @include tagRules;
}
</style>