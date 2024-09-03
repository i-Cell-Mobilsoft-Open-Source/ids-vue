<script setup lang="ts">
import { computed } from "vue";
import { IdsActionItemProps } from "@components/action-item/models/IdsActionItemProps.interface";
import { addClassPrefix } from "@core/utils/AddClassPrefix";
import IdsIcon from "@components/icon/IdsIcon.vue";
import { IdsActionItemSlots } from "@components/action-item/models/IdsActionItemSlots.interface";
import { Size } from "@models/size.type";
import { IdsActionItemVariant } from "@components/action-item/models/IdsActionItemVariant.type";
import { IdsActionItemAppearance } from "@components/action-item/models/IdsActionItemAppearance.type";
import { IdsActionItemTypeAttribute } from "@components/action-item/models/IdsActionItemTypeAttribute.type";

const componentClass = 'ids-action-item';
defineSlots<IdsActionItemSlots>();

const props = withDefaults(
  defineProps<IdsActionItemProps>(),    
  {
    type: IdsActionItemTypeAttribute.BUTTON,
    link: undefined,
    isActive: false,
    disabled: false,
    variant: IdsActionItemVariant.SURFACE,
    appearance: IdsActionItemAppearance.TEXT,
    size: Size.COMFORTABLE,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const hrefLink = computed(() => (props.type === IdsActionItemTypeAttribute.LINK ? props.link : undefined));
const componentType = computed(() => (props.type === IdsActionItemTypeAttribute.BUTTON ? 'button' : 'a'));
const buttonType = computed(() => (props.type === IdsActionItemTypeAttribute.BUTTON ? 'button' : undefined));

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
  [addClassPrefix(componentClass, 'active')]: props.isActive,
}));

</script>

<template>
  <component
    :is="componentType" 
    :type="buttonType" 
    :href="hrefLink"
    :class="classObject"
    :disabled="props.disabled" 
    :aria-disabled="props.disabled ? 'true' : undefined"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-action-item-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </component>
</template>

<style lang="scss">

$appearances: 'text', 'filled';
$variants: 'surface';
$sizes: 'compact', 'comfortable', 'spacious';

.ids-action-item {
  width: 100%;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  .ids-action-item-label {
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
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
    &.ids-action-item-#{$size} {
      gap: var(--ids-comp-action-item-size-gap-#{$size});
      border-radius: var(--ids-comp-action-item-size-border-radius-#{$size});
      padding: var(--ids-comp-action-item-size-padding-y-#{$size}) var(--ids-comp-action-item-size-padding-x-#{$size});
      height: var(--ids-comp-action-item-size-height-#{$size});
      font-family: var(--ids-comp-action-item-label-typography-font-family-#{$size});
      font-size: var(--ids-comp-action-item-label-typography-font-size-#{$size});
      font-weight: var(--ids-comp-action-item-label-typography-font-weight-#{$size});
      letter-spacing: var(--ids-comp-action-item-label-typography-letter-spacing-#{$size});
      line-height: var(--ids-comp-action-item-label-typography-line-height-#{$size});

      *[icon-leading],
      *[icon-trailing] {
        width: var(--ids-comp-action-item-size-icon-#{$size});
        height: var(--ids-comp-action-item-size-icon-#{$size});
      }

      @each $appearance in $appearances {
        @each $variant in $variants {
          &.ids-action-item-#{$appearance}.ids-action-item-#{$variant} {
            border-style: solid;
            border-width: var(--ids-comp-action-item-size-border-width-#{$size});
            border-color: var(--ids-comp-action-item-#{$appearance}-color-border-#{$variant}-default);

            &:hover {
              border-color: var(--ids-comp-action-item-#{$appearance}-color-border-#{$variant}-hovered);
            }

            &:disabled {
              border-color: var(--ids-comp-action-item-#{$appearance}-color-border-#{$variant}-disabled);
            }
          }
        }
      }
    }
  }

  @each $appearance in $appearances {
    &.ids-action-item-#{$appearance} {
      @each $variant in $variants {
        &.ids-action-item-#{$variant} {
          color: var(--ids-comp-action-item-#{$appearance}-color-fg-label-#{$variant}-default);
          background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-default);

          &.ids-action-item-active {
            color: var(--ids-comp-action-item-#{$appearance}-color-fg-label-#{$variant}-active);
            background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-active);
          }

          &:hover {
            color: var(--ids-comp-action-item-#{$appearance}-color-fg-label-#{$variant}-hovered);
            background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-hovered);
          }

          &:focus {
            color: var(--ids-comp-action-item-#{$appearance}-color-fg-label-#{$variant}-focused);
            background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-focused);
          }

          &:active {
            background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-pressed);
          }

          &:disabled {
            color: var(--ids-comp-action-item-#{$appearance}-color-fg-label-#{$variant}-disabled);
            background: var(--ids-comp-action-item-#{$appearance}-color-bg-#{$variant}-disabled);
          }
        }
      }
    }
  }
}

</style>
