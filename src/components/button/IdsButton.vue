<script setup lang="ts">
import { Size } from "@models/size.type";
import { AllVariants } from "@models/variants";
import { computed } from "vue";
import { addClassPrefix } from "@core/utils/AddClassPrefix";
import IdsIcon from "@components/icon/IdsIcon.vue";
import { IdsButtonProps } from "@components/button/models/IdsButtonProps.interface";
import { IdsButtonTypeAttribute } from "@components/button/models/IdsButtonTypeAttribute.type";
import { IdsButtonAppearance } from "@components/button/models/IdsButtonAppearance.type";
import { IdsButtonSlots } from "@components/button//models/IdsButtonSlots.interface";

const componentClass = 'ids-button';
defineSlots<IdsButtonSlots>();

const props = withDefaults(
  defineProps<IdsButtonProps>(),
  {
    type: IdsButtonTypeAttribute.BUTTON,
    appearance: IdsButtonAppearance.FILLED,
    variant: AllVariants.PRIMARY,
    disabled: false,
    size: Size.COMFORTABLE,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));
</script>

<template>
  <button
    :type="type" 
    :disabled="props.disabled" 
    :class="classObject"
    :aria-disabled="props.disabled ? 'true' : undefined"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-button-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </button>
</template>

<style scoped lang="scss">
@use 'sass:list';

$appearances: filled, outlined, text;
$sizes: compact, comfortable, spacious, dense;
$variants: primary, secondary, brand, error, success, warning, light, dark, surface;

.ids-button {
  flex-shrink: 0;
  width: fit-content;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border-style: solid;

  &:focus {
    outline-offset: 2px;
    outline: var(--ids-comp-buttons-focused-outline-size-outline) solid var(--ids-comp-buttons-focused-outline-color-dark-focused);

    &.ids-button-light {
      outline-color: var(--ids-comp-buttons-focused-outline-color-light-focused);
    }
  }

  &:active {
    outline: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }

  *[icon-leading],
  *[icon-trailing] {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @each $size in $sizes {
    &.ids-button-#{$size} {
      gap: var(--ids-comp-buttons-size-gap-#{$size});
      height: var(--ids-comp-buttons-size-height-#{$size});
      min-width: var(--ids-comp-buttons-size-min-width-#{$size});
      padding: var(--ids-comp-buttons-size-padding-y-#{$size}) var(--ids-comp-buttons-size-padding-x-#{$size});
      border-radius: var(--ids-comp-buttons-size-border-radius-#{$size});
      border-width: var(--ids-comp-buttons-size-border-width-#{$size});

      & > .ids-button-label {
        font-family: var(--ids-comp-buttons-label-typography-font-family-#{$size});
        font-size: var(--ids-comp-buttons-label-typography-font-size-#{$size});
        font-weight: var(--ids-comp-buttons-label-typography-font-weight-#{$size});
        letter-spacing: var(--ids-comp-buttons-label-typography-letter-spacing-#{$size});
        line-height: var(--ids-comp-buttons-label-typography-line-height-#{$size});
      }

      *[icon-leading],
      *[icon-trailing] {
        width: var(--ids-comp-buttons-size-icon-#{$size});
        height: var(--ids-comp-buttons-size-icon-#{$size});
      }
    }
  }

  @each $appearance in $appearances {
    @each $variant in $variants {
      &.ids-button-#{$appearance}.ids-button-#{$variant} {
        color: var(--ids-comp-buttons-#{$appearance}-color-fg-label-#{$variant}-default);
        background: var(--ids-comp-buttons-#{$appearance}-color-bg-#{$variant}-default);
        border-color: var(--ids-comp-buttons-#{$appearance}-color-border-#{$variant}-default);

        &:hover {
          background: var(--ids-comp-buttons-#{$appearance}-color-bg-#{$variant}-hovered);
          color: var(--ids-comp-buttons-#{$appearance}-color-fg-label-#{$variant}-hovered);
          border-color: var(--ids-comp-buttons-#{$appearance}-color-border-#{$variant}-hovered);
        }

        &:focus {
          outline-offset: 2px;
          background: var(--ids-comp-buttons-#{$appearance}-color-bg-#{$variant}-focused);
          color: var(--ids-comp-buttons-#{$appearance}-color-fg-label-#{$variant}-focused);
          border-color: var(--ids-comp-buttons-#{$appearance}-color-border-#{$variant}-focused);
        }

        &:active {
          background: var(--ids-comp-buttons-#{$appearance}-color-bg-#{$variant}-pressed);
          color: var(--ids-comp-buttons-#{$appearance}-color-fg-label-#{$variant}-pressed);
          border-color: var(--ids-comp-buttons-#{$appearance}-color-border-#{$variant}-pressed);
        }

        // The following variants do not have a disabled state
        @if list.index(error success warning, $variant) == null {
          &:disabled {
            background: var(--ids-comp-buttons-#{$appearance}-color-bg-#{$variant}-disabled);
            color: var(--ids-comp-buttons-#{$appearance}-color-fg-label-#{$variant}-disabled);
            border-color: var(--ids-comp-buttons-#{$appearance}-color-border-#{$variant}-disabled);
          }
        }
      }
    }
  }
}
</style>
