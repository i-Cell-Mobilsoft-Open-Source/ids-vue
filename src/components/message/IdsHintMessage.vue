<script setup lang="ts">
import { Size, SizeType } from '@models/size.type';
import { AllVariants, AllVariantsType } from '@models/variants';
import { ComponentInternalInstance, computed, getCurrentInstance, reactive } from 'vue';
  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-hint-message';
  const parent: ComponentInternalInstance | null | undefined = getCurrentInstance()?.parent;

  const props = withDefaults(
    defineProps<{size?: string, variant?: string, disabled?: boolean}>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const setDisabledClass = computed<string | null>(() => {
    const isDisabled = props.disabled !== undefined ? props.disabled : parent && parent.props['disabled'] ? parent.props['disabled'] as boolean : false;
    return isDisabled ? addClassPrefix('disabled') : null;
  });

  const state = reactive({
    classList: [
      componentClass,
      componentTypeClass,
      addClassPrefix(
        props.size !== undefined ? 
        props.size : parent && parent.props['size'] ? 
        parent.props['size'] as SizeType : Size.COMFORTABLE
      ),
      addClassPrefix(
        props.variant !== undefined ? 
        props.variant : parent && parent.props['variant'] ? 
        parent.props['variant'] as unknown as AllVariantsType : AllVariants.SURFACE
      ),
    ],
  })


  function addClassPrefix(className: string | null): string | null {
    return className ? `${componentClass}-${className}` : null;
  }

</script>
<template>
  <div :class="[state.classList, setDisabledClass]">
    <div class="ids-message__icon">
      <slot name="idsMessagePrefix" />
    </div>
    <div class="ids-message__text">
      <slot />
    </div>
    <div class="ids-message__counter">
      <slot name="idsMessageSuffix" />
    </div>
  </div>
</template>
<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, surface;

.ids-message {
  display: flex;
  align-items: flex-start;
  font-style: normal;

  @each $size in $sizes {
    &.ids-message-#{$size} {
      gap: var(--ids-comp-size-forms-message-size-gap-#{$size});
      padding: var(--ids-comp-size-forms-message-size-padding-y-#{$size}) var(--ids-comp-size-forms-message-size-padding-x-#{$size});
      font-family: var(--ids-comp-size-forms-message-typography-font-family-#{$size});
      font-size: var(--ids-comp-size-forms-message-typography-font-size-#{$size});
      font-weight: var(--ids-comp-size-forms-message-typography-font-weight-#{$size});
      letter-spacing: var(--ids-comp-size-forms-message-typography-letter-spacing-#{$size});
      line-height: var(--ids-comp-size-forms-message-typography-line-height-#{$size});
    }
  }

  @each $variant in $variants {
    &.ids-message-#{$variant} {
      .ids-message__icon {
        color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-enabled);
      }

      .ids-message__text {
        color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-enabled);
      }

      &.ids-message-disabled {
        .ids-message__icon {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-disabled);
        }

        .ids-message__text {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-disabled);
        }
      }

      &.ids-error-message {
        .ids-message__icon {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-error-enabled);
        }

        .ids-message__text {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-error-enabled);
        }
      }
    }
  }

  &.ids-message-success {
    .ids-message__icon {
      color: var(--ids-comp-forms-message-color-fg-icon-success-enabled);
    }

    .ids-message__text {
      color: var(--ids-comp-forms-message-color-fg-text-success-enabled);
    }
  }
}
</style>