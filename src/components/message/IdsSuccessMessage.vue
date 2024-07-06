<script setup lang="ts">
import IdsCheckMark from '@assets/IdsCheckMark.vue';
import { Size, SizeType } from '@models/size.type';
import { MessageVariant, MessageVariantType } from '@components/message/models/IdsMessageVariant.type.ts';
import { IdsMessageProps } from '@components/message/models/IdsMessageProps.interface.ts';
import { ComponentInternalInstance, computed, getCurrentInstance, reactive } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-message-success';
  const parent: ComponentInternalInstance | null | undefined = getCurrentInstance()?.parent;

  const props = withDefaults(
    defineProps<IdsMessageProps>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const setDisabledClass = computed<string | null>(() => {
    const isDisabled = props.disabled !== undefined ? props.disabled : parent && parent.props['disabled'] ? parent.props['disabled'] as boolean : false;
    return isDisabled ? addClassPrefix(componentClass, 'disabled') : null;
  });

  const state = reactive({
    classList: [
      componentClass,
      componentTypeClass,
      addClassPrefix(
        componentClass,
        props.size !== undefined ? 
        props.size : parent && parent.props['size'] ? 
        parent.props['size'] as SizeType : Size.COMFORTABLE
      ),
      addClassPrefix(
        componentClass,
        props.variant !== undefined ? 
        props.variant : parent && parent.props['variant'] ? 
        parent.props['variant'] as unknown as MessageVariantType : MessageVariant.SURFACE
      ),
    ],
  })


</script>
<template>
  <div :class="[state.classList, setDisabledClass]">
    <div class="ids-message-content">
      <div class="ids-message__icon">
        <slot name="idsMessagePrefix">
          <IdsCheckMark />
        </slot>
      </div>
      <div class="ids-message__text">
        <slot />
      </div>
    </div>
    <div v-if="$slots.idsMessageSuffix" class="ids-message__counter">
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
  align-items: center;

  .ids-message-content {
    display: flex;
    flex: 1 0 0;

    .ids-message__icon {
      display: flex;
      flex-shrink: 0;
    }
  }

  @each $size in $sizes {
    &.ids-message-#{$size} {
      gap: var(--ids-comp-size-forms-message-size-gap-#{$size});
      padding: var(--ids-comp-size-forms-message-size-padding-y-#{$size}) var(--ids-comp-size-forms-message-size-padding-x-#{$size});
      font-family: var(--ids-comp-size-forms-message-typography-font-family-#{$size});
      font-size: var(--ids-comp-size-forms-message-typography-font-size-#{$size});
      font-weight: var(--ids-comp-size-forms-message-typography-font-weight-#{$size});
      letter-spacing: var(--ids-comp-size-forms-message-typography-letter-spacing-#{$size});
      line-height: var(--ids-comp-size-forms-message-typography-line-height-#{$size});

      .ids-message-content {
        gap: var(--ids-comp-size-forms-message-size-gap-#{$size});

        .ids-message__icon {
          width: var(--ids-comp-size-forms-message-size-icon-width-#{$size});
          height: var(--ids-comp-size-forms-message-size-icon-height-#{$size});
        }
      }
    }
  }

  @each $variant in $variants {
    &.ids-message-#{$variant} {
      .ids-message__icon {
        color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-enabled);
      }

      .ids-message__text, .ids-message__counter {
        color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-enabled);
      }

      &.ids-error-message {
        .ids-message__icon {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-error-enabled);
        }

        .ids-message__text {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-error-enabled);
        }
      }

      &.ids-message-success {
        .ids-message__icon {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-success-enabled);
        }

        .ids-message__text, .ids-message__counter {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-success-enabled);
        }
      }

      &.ids-message-disabled {
        .ids-message__icon, .ids-message__counter {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-disabled);
        }

        .ids-message__text {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-disabled);
        }
      }
    }
  }
}
</style>