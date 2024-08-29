<script setup lang="ts">
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { computed } from 'vue';
import IdsIcon from '@components/icon/IdsIcon.vue';
import { IdsTagSlots } from '@components/tag/models/IdsTagSlots.interface';
import { IdsTagProps } from '@components/tag/models/IdsTagProps.interface';
import { IdsTagAppearance } from '@components/tag/models/IdsTagAppearance.type';

const componentClass = 'ids-tag';
defineSlots<IdsTagSlots>();

const props = withDefaults(defineProps<IdsTagProps>(), {
  appearance: IdsTagAppearance.FILLED,
  size: Size.COMFORTABLE,
  variant: AllVariants.PRIMARY,
  leadingIcon: undefined,
  trailingIcon: undefined,
  interactive: false,
  link: undefined,
});

const hrefLink = computed(() => (props.interactive ? props.link : undefined));
const componentType = computed(() => (props.interactive  ? 'a' : 'div'));

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));

</script>

<template>
  <component
    :is="componentType" 
    :href="hrefLink" 
    :class="classObject"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-tag-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </component> 
</template>

<style scoped lang="scss">
$appearances: filled, outlined;
$sizes: compact, comfortable, spacious, dense;
$variants: primary, secondary, brand, error, success, warning, light, dark, surface;

.ids-tag {
  flex-shrink: 0;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  box-sizing: border-box;

  &:focus {
    outline-offset: 2px;
    outline: var(--ids-comp-tag-focused-outline-size-outline) solid var(--ids-comp-tag-focused-outline-color-dark-focused);

    &.ids-tag-light {
      outline-color: var(--ids-comp-tag-focused-outline-color-light-focused);
    }
  }

  &:active {
    outline: none;
  }

  *[icon-leading],
  *[icon-trailing] {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @each $size in $sizes {
    &.ids-tag-#{$size} {
      gap: var(--ids-comp-tag-size-gap-#{$size});
      height: var(--ids-comp-tag-size-height-#{$size});
      padding: var(--ids-comp-tag-size-padding-y-#{$size}) var(--ids-comp-tag-size-padding-x-#{$size});
      border-radius: var(--ids-comp-tag-size-border-radius-#{$size});
      border-width: var(--ids-comp-tag-size-border-width-#{$size});

      & > .ids-tag-label {
        font-family: var(--ids-comp-tag-label-typography-font-family-#{$size});
        font-size: var(--ids-comp-tag-label-typography-font-size-#{$size});
        font-weight: var(--ids-comp-tag-label-typography-font-weight-#{$size});
        letter-spacing: var(--ids-comp-tag-label-typography-letter-spacing-#{$size});
        line-height: var(--ids-comp-tag-label-typography-line-height-#{$size});
      }

      *[icon-leading],
      *[icon-trailing] {
        width: var(--ids-comp-tag-size-icon-#{$size});
        height: var(--ids-comp-tag-size-icon-#{$size});
      }
    }
  }

  @each $appearance in $appearances {
    @each $variant in $variants {
      &.ids-tag-#{$appearance}.ids-tag-#{$variant} {
        color: var(--ids-comp-tag-#{$appearance}-color-fg-label-#{$variant}-default);
        background: var(--ids-comp-tag-#{$appearance}-color-bg-#{$variant}-default);
        border-color: var(--ids-comp-tag-#{$appearance}-color-border-#{$variant}-default);

        &:hover {
          color: var(--ids-comp-tag-#{$appearance}-color-fg-label-#{$variant}-hovered);
          background: var(--ids-comp-tag-#{$appearance}-color-bg-#{$variant}-hovered);
          border-color: var(--ids-comp-tag-#{$appearance}-color-border-#{$variant}-hovered);
        }

        &:focus {
          color: var(--ids-comp-tag-#{$appearance}-color-fg-label-#{$variant}-focused);
          background: var(--ids-comp-tag-#{$appearance}-color-bg-#{$variant}-focused);
          border-color: var(--ids-comp-tag-#{$appearance}-color-border-#{$variant}-focused);
        }

        &:active {
          color: var(--ids-comp-tag-#{$appearance}-color-fg-label-#{$variant}-pressed);
          background: var(--ids-comp-tag-#{$appearance}-color-bg-#{$variant}-pressed);
          border-color: var(--ids-comp-tag-#{$appearance}-color-border-#{$variant}-pressed);
        }
      }
    }
  }
}

a.ids-tag {
  text-decoration: none;
}

button.ids-tag {
  :not(:disabled) {
    cursor: pointer;
  }
  :disabled {
    cursor: not-allowed;
  }
}
</style>