<script setup lang="ts">
import IdsAlertIcon from '@assets/IdsAlertIcon.vue';
import { IdsMessageProps } from '@components/message/models/IdsMessageProps.interface.ts';
import { useMessage } from '@components/message/composables/useMessage';
import { toRef } from 'vue';
import { IdsMessageSlots } from '@components/message/models/IdsMessageSlots.interface';

  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-error-message';
  defineSlots<IdsMessageSlots>();

  const props = withDefaults(
    defineProps<IdsMessageProps>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const { classObject } = useMessage(
    toRef(() => props.size),
    toRef(() => props.variant),
    toRef(() => props.disabled),
    componentClass, 
    componentTypeClass
  );

</script>
<template>
  <div :class="classObject">
    <div class="ids-message__prefix">
      <slot name="idsMessagePrefix">
        <IdsAlertIcon />
      </slot>
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

  .ids-message__prefix, .ids-message__suffix {
    display: flex;
    align-items: center;
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