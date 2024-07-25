<script setup lang="ts">
import { Size, SizeType } from '@models/size.type';
import { MessageVariant, MessageVariantType } from '@components/message/models/IdsMessageVariant.type.ts';
import { IdsMessageProps } from '@components/message/models/IdsMessageProps.interface.ts';
import { ComponentInternalInstance, computed, getCurrentInstance } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-hint-message';
  const parent: ComponentInternalInstance | null | undefined = getCurrentInstance()?.parent;

  const props = withDefaults(
    defineProps<IdsMessageProps>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const disabled = computed<boolean>(() => {
    return props.disabled !== undefined ? 
      props.disabled : parent && parent.props['disabled'] ? 
      parent.props['disabled'] as boolean : false;
  });

  const variant = computed<string>(() => {
    return props.variant !== undefined ? 
      props.variant : parent && parent.props['variant'] ? 
      parent.props['variant'] as unknown as MessageVariantType : MessageVariant.SURFACE;
  });

  const size = computed<string>(() => {
    return props.size !== undefined ? 
      props.size : parent && parent.props['size'] ? 
      parent.props['size'] as SizeType : Size.COMFORTABLE;
  });

  const classObject = computed(() => ({
  [componentClass]: true,
  [componentTypeClass]: true,
  [addClassPrefix(componentClass, size.value)]: size.value,
  [addClassPrefix(componentClass, variant.value)]: variant.value,
  [addClassPrefix(componentClass, 'disabled')]: disabled.value,
}));
</script>
<template>
  <div :class="classObject">
    <div v-if="$slots.idsMessagePrefix" class="ids-message__prefix">
      <slot name="idsMessagePrefix" />
    </div>
    <div class="ids-message__text">
      <slot />
    </div>
    <div v-if="$slots.idsMessageSuffix" class="ids-message__suffix">
      <slot name="idsMessageSuffix" />
    </div>
  </div>
</template>
<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, surface;

.ids-message {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: normal;

  .ids-message__prefix {
    display: flex;
  }

  .ids-message__text {
    flex-grow: 1;
    text-align: start;
  }

  @each $size in $sizes {
    &.ids-message-#{$size} {
      gap: var(--ids-comp-forms-message-size-gap-#{$size});
      padding: var(--ids-comp-forms-message-size-padding-y-#{$size}) var(--ids-comp-forms-message-size-padding-x-#{$size});
      font-family: var(--ids-comp-forms-message-typography-font-family-#{$size});
      font-size: var(--ids-comp-forms-message-typography-font-size-#{$size});
      font-weight: var(--ids-comp-forms-message-typography-font-weight-#{$size});
      letter-spacing: var(--ids-comp-forms-message-typography-letter-spacing-#{$size});
      line-height: var(--ids-comp-forms-message-typography-line-height-#{$size});

      .ids-message__prefix {
        height: var(--ids-comp-forms-message-size-icon-height-#{$size});
        width: var(--ids-comp-forms-message-size-icon-width-#{$size});

        & > ids-icon {
          height: inherit;
          width: inherit;
        }
      }
    }
  }

  @each $variant in $variants {
    &.ids-message-#{$variant} {
      .ids-message__prefix {
        color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-default);
      }
      .ids-message__text,
      .ids-message__suffix {
        color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-default);
      }

      &.ids-message-disabled {
        .ids-message__prefix {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-disabled);
        }
        .ids-message__text,
        .ids-message__suffix {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-disabled);
        }
      }

      &.ids-error-message {
        .ids-message__prefix {
          color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-error-default);
        }
        .ids-message__text,
        .ids-message__suffix {
          color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-error-default);
        }
      }
    }

    &.ids-success-message {
      .ids-message__prefix {
        color: var(--ids-comp-forms-message-color-fg-icon-#{$variant}-success-default);
      }
      .ids-message__text,
      .ids-message__suffix {
        color: var(--ids-comp-forms-message-color-fg-text-#{$variant}-success-default);
      }
    }
  }
}


</style>