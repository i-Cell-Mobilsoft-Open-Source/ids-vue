<script setup lang="ts">

import { ref, withDefaults, onMounted, onBeforeUnmount, computed } from 'vue';
import IdsIconButton from './icon-button/IdsIconButton.vue';
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { DialogConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

const componentClass = 'ids-dialog';

defineEmits(['close']);

const props = withDefaults(defineProps<DialogConfig>(), {
  backDrop: false,
  size: Size.COMFORTABLE,
});

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, 'with-backdrop')]: props.backDrop,
}));

const dialog = ref<HTMLDialogElement | null>();

onMounted(() => {
  dialog.value?.showModal();
});

onBeforeUnmount(() => {
  dialog.value?.classList.add('closed');
});
</script>

<template>
  <dialog ref="dialog" role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialog" :class="classObject">
    <section class="ids-dialog-container">
      <header class="ids-dialog-header">
        <div v-if="$slots.customHeader" class="dialog-header__container">
          <slot name="customHeader" />
        </div>
        <div v-else class="ids-dialog-header-default-content">
          <h2
            v-if="$slots.title"
            class="ids-dialog-title"
          >
            <slot name="title" />
          </h2>
          <h3
            v-if="$slots.subTitle"
            class="ids-dialog-subtitle"
          >
            <slot name="subTitle" />
          </h3>
        </div>
        <IdsIconButton class="ids-dialog-close-button" variant="light" :icon="XMarkIcon" @click="$emit('close')" />
      </header>

      <section v-if="$slots.content" class="ids-dialog-content">
        <slot name="content" />
      </section>
      <footer v-if="$slots.action" class="ids-dialog-actions">
        <slot name="action" />
      </footer>
    </section>
  </dialog>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

.ids-dialog {
  box-sizing: border-box;
  border-style: solid;
  border-color: var(--ids-comp-dialog-container-color-border-surface-default);
  background-color: var(--ids-comp-dialog-container-color-bg-default);
  box-shadow: var(--ids-smc-reference-container-effects-shadow-horizontal-none)
    var(--ids-smc-reference-container-effects-shadow-vertical-xxl) var(--ids-smc-reference-container-effects-shadow-blur-xxxl)
    var(--ids-smc-reference-container-effects-shadow-spread-xxs) var(--ids-smc-reference-container-effects-shadow-color-dark-default);

  &::backdrop {
    background-color: transparent;
  }

  &.ids-dialog-with-backdrop::backdrop {
    opacity: var(--ids-comp-dialog-backdrop-opacity);
    background-color: var(--ids-comp-dialog-backdrop-background);
  }

  .ids-dialog-container {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
    max-height: 80vh;

    .ids-dialog-header {
      display: flex;
      align-items: stretch;

      .ids-dialog-title {
        font-style: normal;

        &.hidden {
          display: none;
        }
      }

      .ids-dialog-subtitle {
        font-style: normal;
      }

      .ids-dialog-header-default-content {
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        align-items: flex-start;
      }

      .ids-dialog-close-button {
        position: absolute;
        top: 12px;
        right: 12px;
      }
    }

    .ids-dialog-content {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      background: var(--ids-comp-dialog-content-color-bg-default);

      .ids-dialog-content-overflow {
        overflow-y: auto;
        height: 100%;
      }

      &.ids-dialog-content-scrollable {
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: var(--ids-comp-dialog-content-color-border-surface-default);
        border-bottom-color: var(--ids-comp-dialog-content-color-border-surface-default);
      }
    }

    .ids-dialog-actions {
      display: flex;
      background: var(--ids-comp-dialog-footer-color-bg-default);

      // TODO: test rules below
      justify-content: flex-end;
      align-items: flex-start;
      align-content: flex-start;
      align-self: stretch;
      flex-wrap: wrap;
    }
  }

  @each $size in $sizes {
    &.ids-dialog-#{$size} {
      border-radius: var(--ids-comp-dialog-container-size-border-radius-#{$size});
      border-width: var(--ids-comp-dialog-container-size-border-width-#{$size});

      .ids-dialog-container {
        width: var(--ids-comp-dialog-container-size-width-#{$size});
        min-height: var(--ids-comp-dialog-container-size-min-height-#{$size});
        padding: var(--ids-comp-dialog-container-size-padding-y-#{$size}) var(--ids-comp-dialog-container-size-padding-x-#{$size});
        gap: var(--ids-comp-dialog-container-size-gap-#{$size});

        .ids-dialog-header {
          .ids-dialog-title {
            font-family: var(--ids-comp-dialog-header-title-typography-font-family-#{$size});
            font-size: var(--ids-comp-dialog-header-title-typography-font-size-#{$size});
            font-weight: var(--ids-comp-dialog-header-title-typography-font-weight-#{$size});
            letter-spacing: var(--ids-comp-dialog-header-title-typography-letter-spacing-#{$size});
            line-height: var(--ids-comp-dialog-header-title-typography-line-height-#{$size});
          }

          .ids-dialog-subtitle {
            font-family: var(--ids-comp-dialog-header-subtitle-typography-font-family-#{$size});
            font-size: var(--ids-comp-dialog-header-subtitle-typography-font-size-#{$size});
            font-weight: var(--ids-comp-dialog-header-subtitle-typography-font-weight-#{$size});
            letter-spacing: var(--ids-comp-dialog-header-subtitle-typography-letter-spacing-#{$size});
            line-height: var(--ids-comp-dialog-header-subtitle-typography-line-height-#{$size});
          }

          .ids-dialog-header-default-content {
            gap: var(--ids-comp-dialog-header-size-gap-#{$size});
            padding: var(--ids-comp-dialog-header-size-padding-y-#{$size}) var(--ids-comp-dialog-header-size-padding-x-#{$size});
          }
        }

        .ids-dialog-content {
          padding: var(--ids-comp-dialog-content-fixed-size-padding-y-#{$size})
            var(--ids-comp-dialog-content-fixed-size-padding-x-#{$size});

          &.ids-dialog-content-scrollable {
            padding: var(--ids-comp-dialog-content-scrollable-size-padding-y-#{$size})
              var(--ids-comp-dialog-content-scrollable-size-padding-x-#{$size});
            border-top-width: var(--ids-comp-dialog-content-scrollable-size-border-width-#{$size});
            border-bottom-width: var(--ids-comp-dialog-content-scrollable-size-border-width-#{$size});
          }
        }

        .ids-dialog-actions {
          padding: var(--ids-comp-dialog-footer-padding-y-#{$size}) var(--ids-comp-dialog-footer-padding-x-#{$size});
        }
      }
    }
  }
}
</style>