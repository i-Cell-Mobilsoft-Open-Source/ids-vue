<script setup lang="ts">
import { IdsActionPanelProps } from '@components/action-panel/models/IdsActionPanelProps.interface';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { IdsActionPanelAppearance } from '@components/action-panel/models/IdsActionPanelAppearance.type';
import { computed } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { IdsActionPanelSlots } from '@components/action-panel/models/IdsActionPanelSlots.interface';

const componentClass = 'ids-action-panel';
defineSlots<IdsActionPanelSlots>();

const props = withDefaults(
  defineProps<IdsActionPanelProps>(),
  {
    appearance: IdsActionPanelAppearance.FILLED,
    variant: AllVariants.LIGHT,
    size: Size.COMPACT,
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
  <div :class="classObject">
    <slot />
  </div>
</template>

<style lang="scss">
$appearances: filled, outlined, elevated;
$sizes: compact, comfortable, spacious, dense;

.ids-action-panel {
  display: flex;
  width: 22.25rem;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  @each $size in $sizes {
    &.ids-action-panel-#{$size} {
      gap: var(--ids-comp-action-panel-size-gap-#{$size});
      padding: var(--ids-comp-action-panel-size-padding-y-#{$size}) var(--ids-comp-action-panel-size-padding-x-#{$size});
      border-radius: var(--ids-comp-action-panel-size-border-radius-#{$size});

      @each $appearance in $appearances {
        &.ids-action-panel-#{$appearance} {
          &.ids-action-panel-outlined {
            border: var(--ids-comp-action-panel-size-border-#{$size})
              solid
              var(--ids-comp-action-panel-#{$appearance}-color-border-light-default);
          }
        }
      }
    }
  }

  &.ids-action-panel-filled {
    box-shadow: none;
  }
  &.ids-action-panel-outlined {
    box-shadow: var(--ids-smc-reference-container-effects-shadow-horizontal-none)
        var(--ids-smc-reference-container-effects-shadow-vertical-xxs) var(--ids-smc-reference-container-effects-shadow-blur-xxs)
        var(--ids-smc-reference-container-effects-shadow-spread-none) var(--ids-smc-reference-container-effects-shadow-color-dark-lighter);
  }
  &.ids-action-panel-elevated {
    box-shadow: var(--ids-smc-reference-container-effects-shadow-horizontal-none)
      var(--ids-smc-reference-container-effects-shadow-vertical-xxl) var(--ids-smc-reference-container-effects-shadow-blur-xxxl)
      var(--ids-smc-reference-container-effects-shadow-spread-xxs) var(--ids-smc-reference-container-effects-shadow-color-dark-default);
  }

  @each $appearance in $appearances {
    &.ids-action-panel-#{$appearance} {
      background: var(--ids-comp-action-panel-#{$appearance}-color-bg-light-default);
    }
  }

  button {
    &:hover {
      border-color: transparent;
    }
    &:focus {
      outline: none !important;
    }
  }
}
</style>