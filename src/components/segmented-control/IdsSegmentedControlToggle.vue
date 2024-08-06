<script setup lang="ts">
import { Size } from '@models/size.type';
import { IdsSegmentedControlProps } from '@components/segmented-control/models/IdsSegmentedControlProps.interface';
import { SegmentedControlVariant } from '@components/segmented-control/models/IdsSegmentedControlVariant.type';
import { SegmentedControlAppearance } from '@components/segmented-control/models/IdsSegmentedControlAppearance.type';
import { ModelRef, provide, ref, toRef } from 'vue';
import { IdsSegmentedControlInjectedAttributes } from '@components/segmented-control/models/IdsSegmentedControlInjectedAttributes.interface';
import { useSegmentedControl } from '@components/segmented-control/composables/UseSegmentedControl';
import { SegmentedControlAttributes } from '@core/utils/Keys';

  const componentClass = 'ids-segmented-control-toggle';
  const model: ModelRef<unknown> = defineModel<unknown>();
  const segmentedControlRef = ref();
  
  const props = withDefaults(
    defineProps<IdsSegmentedControlProps>(),
    {
      id: undefined,
      name: undefined,
      size: Size.COMFORTABLE,
      variant: SegmentedControlVariant.SURFACE,
      appearance: SegmentedControlAppearance.FILLED,
      disabled: false,
    }
  );
  
  const disabledValue = toRef(() => props.disabled);
  const nameValue = toRef(() => props.name);
  const multiSelectValue = toRef(() => false);

  const {
    classObject,
    selected,
    segmentedControlId,
    setRole,
    handleKeyDown,
    initItems,
    onSelect,
    isSelected,
    isItemPreSelectedByValue,
  } = useSegmentedControl(
    toRef(() => props.id),
    multiSelectValue,
    toRef(() => props.size),
    toRef(() => props.variant),
    toRef(() => props.appearance),
    disabledValue,
    model,
    true,
    componentClass
  );

  provide<IdsSegmentedControlInjectedAttributes>(SegmentedControlAttributes, 
    {disabledValue, nameValue, multiSelectValue, onSelect, initItems, isItemPreSelectedByValue, selected, isSelected}
  );

</script>
<template>
  <div :id="segmentedControlId" ref="segmentedControlRef" :class="classObject" :role="setRole" @keydown="handleKeyDown($event)">
    <slot />
  </div>
</template>

<style lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: primary, surface, light, dark;
$appearances: filled, outlined;

@mixin segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, $state) {
  background-color: var(--ids-comp-segmented-control-toggle-button-#{$appearance}-color-bg-#{$variant}-#{$state});
  color: var(--ids-comp-segmented-control-toggle-button-#{$appearance}-color-fg-label-#{$variant}-#{$state});
  border-color: var(--ids-comp-segmented-control-toggle-button-#{$appearance}-color-border-#{$variant}-default);

  .ids-icon {
    color: var(--ids-comp-segmented-control-toggle-button-#{$appearance}-color-fg-icon-#{$variant}-#{$state});
  }
}

.ids-segmented-control-toggle {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  .ids-segmented-control-toggle-item > button {
    display: flex;
    align-items: center;
    border-style: solid;
    position: relative;
    text-wrap: nowrap;

    &:focus {
      z-index: 1;
      outline-style: solid;
      outline-offset: 2px;
    }

    &.selected {
      pointer-events: none;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  @each $size in $sizes {
    &.ids-segmented-control-toggle-#{$size} {
      padding: var(--ids-comp-segmented-control-toggle-container-size-padding-y-#{$size})
        var(--ids-comp-segmented-control-toggle-container-size-padding-x-#{$size});
      gap: var(--ids-comp-segmented-control-toggle-container-size-gap-#{$size});
      border-top-left-radius: var(--ids-comp-segmented-control-toggle-container-size-border-radius-left-#{$size});
      border-top-right-radius: var(--ids-comp-segmented-control-toggle-container-size-border-radius-right-#{$size});
      border-bottom-left-radius: var(--ids-comp-segmented-control-toggle-container-size-border-radius-left-#{$size});
      border-bottom-right-radius: var(--ids-comp-segmented-control-toggle-container-size-border-radius-right-#{$size});

      .ids-segmented-control-toggle-item {
        & > button {
          border-radius: var(--ids-comp-segmented-control-toggle-button-size-border-radius-#{$size});
          border-width: var(--ids-comp-segmented-control-toggle-button-size-border-width-#{$size});
          padding: var(--ids-comp-segmented-control-toggle-button-size-padding-y-#{$size})
            var(--ids-comp-segmented-control-toggle-button-size-padding-x-#{$size});
          gap: var(--ids-comp-segmented-control-toggle-button-size-gap-#{$size});
          font-family: var(--ids-comp-segmented-control-toggle-button-typography-font-family-#{$size});
          font-size: var(--ids-comp-segmented-control-toggle-button-typography-font-size-#{$size});
          font-weight: var(--ids-comp-segmented-control-toggle-button-typography-font-weight-#{$size});
          letter-spacing: var(--ids-comp-segmented-control-toggle-button-typography-letter-spacing-#{$size});
          line-height: var(--ids-comp-segmented-control-toggle-button-typography-line-height-#{$size});

          &:focus {
            outline-width: var(--ids-comp-segmented-control-toggle-focused-outline-size-outline-width-#{$size});
          }
        }

        .ids-icon {
          height: var(--ids-comp-segmented-control-toggle-button-size-icon-#{$size});
          width: var(--ids-comp-segmented-control-toggle-button-size-icon-#{$size});
        }
      }
    }
  }

  @each $variant in $variants {
    &.ids-segmented-control-toggle-#{$variant} {
      .ids-segmented-control-toggle-item > button:focus {
        $lightOrDark: 'dark';
        @if ($variant == 'light') {
          $lightOrDark: 'light';
        }
        outline-color: var(--ids-comp-segmented-control-toggle-focused-outline-color-#{$lightOrDark}-focused);
      }

      @each $appearance in $appearances {
        &.ids-segmented-control-toggle-#{$appearance} {
          background-color: var(--ids-comp-segmented-control-toggle-container-#{$appearance}-color-bg-#{$variant}-default);

          .ids-segmented-control-toggle-item > button {
            @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, default);

            &.ids-segmented-control-toggle-item-selected:not(:disabled) {
              @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, active);
            }
            &:hover {
              @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, hovered);
            }
            &:active {
              @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, pressed);
            }
            &:focus {
              @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, focused);
            }
            &:disabled {
              @include segmentedControlToggleItemAppearanceAndVariant($appearance, $variant, disabled);
            }
          }
        }
      }
    }
  }
}
</style>
