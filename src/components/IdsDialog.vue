<script setup lang="ts">

import { ref, reactive, withDefaults, onMounted, onBeforeUnmount } from 'vue';
import IdsIconButton from './icon-button/IdsIconButton.vue';
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { DialogConfig } from '@models/interfaces';
import { Size } from '@models/size.type';

defineEmits(['close']);

const props = withDefaults(defineProps<DialogConfig>(), {
  backDrop: false,
  size: Size.COMFORTABLE,
});

const dialog = ref<HTMLDialogElement | null>();

const animationEndHandler = () => {
  if (dialog.value) {
    dialog.value.classList.remove('closed');
    dialog.value.close();
    dialog.value.removeEventListener('animationend', animationEndHandler);
  }
}

const dialogStyle = reactive({
  gap: `var(--ids-comp-dialog-container-size-gap-${props.size})`,
  width: `var(--ids-comp-dialog-container-size-width-${props.size})`,
  background: props.backDrop ? '#000000' : 'transparent',
  minHeight: `var(--ids-comp-dialog-container-size-min-height-${props.size})`,
  border: `var(--ids-comp-dialog-container-size-border-width-${props.size}) 
  solid var(--ids-comp-dialog-container-color-border-surface-default)`,
  borderRadius: `var(--ids-comp-dialog-container-size-border-radius-${props.size})`,
  padding: `var(--ids-comp-dialog-container-size-padding-y-${props.size}) var(--ids-comp-dialog-container-size-padding-x-${props.size})`,
 
  boxShadow: `var(--ids-smc-reference-container-effects-shadow-horizontal-none)
   var(--ids-smc-reference-container-effects-shadow-vertical-xxl) 
   var(--ids-smc-reference-container-effects-shadow-blur-xxxl) 
   var(--ids-smc-reference-container-effects-shadow-spread-xxs) 
   var(--ids-smc-reference-container-effects-shadow-color-dark-default)`,
});

onMounted(() => {
  dialog.value?.showModal();
});

onBeforeUnmount(() => {
  dialog.value?.classList.add('closed');
  dialog.value?.addEventListener('animationend', animationEndHandler);
});
</script>

<template>
  <dialog ref="dialog" role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialog" class="">
    <section class="dialog-container">
      <header class="dialog-header">
        <div v-if="$slots.customHeader" class="dialog-header__container">
          <slot name="customHeader" />
        </div>
        <div v-else class="dialog-header__container">
          <p
            v-if="$slots.title"
            class="dialog-header__container--title"
          >
            <slot name="title" />
          </p>
          <p
            v-if="$slots.subTitle"
            class="dialog-header__container--subTitle"
          >
            <slot name="subTitle" />
          </p>
        </div>
        <IdsIconButton class="p-0" variant="light" :icon="XMarkIcon" @click="$emit('close')" />
      </header>

      <section v-if="$slots.content">
        <div class="dialog-content">
          <slot name="content" />
        </div>
      </section>
      <footer class="dialog-actions">
        <div v-if="$slots.action" class="dialog-actions__content">
          <slot name="action" />
        </div>
      </footer>
    </section>
  </dialog>
</template>

<style scoped lang="scss">
dialog {
  box-shadow: v-bind("dialogStyle.boxShadow");
  min-height: v-bind("dialogStyle.minHeight");
  border-radius: v-bind("dialogStyle.borderRadius");
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  padding: 0;

  .dialog-container {
    display: flex;
    flex-direction: column;
    gap: v-bind("dialogStyle.gap");
    width: v-bind("dialogStyle.width");
    border: v-bind("dialogStyle.border");
    padding: v-bind("dialogStyle.padding");

    background: var(--ids-comp-dialog-container-color-bg-default);
    //box-shadow: v-bind("dialogStyle.boxShadow");

    section {
      @apply flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .dialog-content {
      max-height: 70vh;
    }

    .dialog-actions {
      display: flex;
      width: 100%;
      align-items: center;

      &__content {
        width: 100%;
      }
    }

    .dialog-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      &__container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-start;
        gap: 8px;

        &--title {
          font-size: 30px;
          line-height: 36px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin: 0;
        }

        &--subTitle {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0;
        }
      }
    }
  }
}

.p-0 {
  padding: 0;
}

::backdrop {
  opacity: 0.25;
  transition: v-bind("dialogStyle.background") 0.5s ease;
}

dialog {
  animation: bounce-out 0.3s;
}

dialog[open] {
  animation: bounce-in 0.3s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.03);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.03);
  }

  100% {
    transform: scale(0);
  }
}
</style>