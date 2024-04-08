<script setup lang="ts">

import { ref, reactive, withDefaults, onMounted, onBeforeUnmount } from 'vue';
import IdsIconButton from './IdsIconButton.vue';
import { XMarkIcon } from "@heroicons/vue/24/solid";

const props = withDefaults(defineProps<{
  backDrop?: boolean
  size?: "dense" | "compact" | "comfortable" | "spacious",
}>(), {
  backDrop: false,
  size: "comfortable",
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
  gap: `var(--ids-comp-size-modal-container-size-gap-${props.size})`,
  width: `var(--ids-comp-size-modal-container-size-width-${props.size})`,
  background: props.backDrop ? '#000000' : 'transparent',
  minHeight: `var(--ids-comp-size-modal-container-size-min-height-${props.size}, 256px)`,
  borderRadius: `var(--ids-comp-size-modal-container-size-border-radius-${props.size}, 32px)`,
  padding: `var(--ids-comp-size-modal-backdrop-size-padding-y-${props.size}, 24px) var( --ids-comp-size-modal-backdrop-size-padding-x-${props.size}, 24px)`,
});

onMounted(() => {
  dialog.value?.showModal();
});

onBeforeUnmount(() => {
  dialog.value?.classList.add('closed');
  dialog.value?.addEventListener('animationend', animationEndHandler);
});

defineEmits(['close']);
</script>

<template>
  <dialog role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialog" ref="dialog" class="">
    <section class="dialog-container">
      <header class="flex justify-between w-full">
        <div class="flex grow flex-col items-start gap-2">
          <p v-if="$slots.title"
            class="text-3xl font-bold tracking-[.5px] text-[--ids-ids-smc-reference-container-color-fg-suface-darker-95]">
            <slot name="title" />
          </p>
          <p v-if="$slots.subTitle"
            class="text-base font-normal tracking-[.5px] text-[--ids-ids-smc-reference-container-color-fg-suface-darker-95]">
            <slot name="subTitle" />
          </p>
        </div>
        <IdsIconButton class="p-0" variant="light" :icon="XMarkIcon" @click="$emit('close')" />
      </header>

      <section v-if="$slots.content">
        <div class="max-h-[70vh]">
          <slot name="content" />
        </div>
      </section>

      <footer class="flex flex-row items-center justify-between w-full">
        <div v-if="$slots.label">
          <slot name="label" />
        </div>
        <div v-if="$slots.action" class="flex gap-2">
          <slot name="action" />
        </div>
      </footer>
    </section>
  </dialog>
</template>

<style scoped lang="scss">
.dialog-container {

  gap: v-bind("dialogStyle.gap");
  width: v-bind("dialogStyle.width");
  padding: v-bind("dialogStyle.padding");
  min-height: v-bind("dialogStyle.minHeight");
  border-radius: v-bind("dialogStyle.borderRadius");
  background: var(--ids-comp-modal-container-color-bg-enabled);
  border: var(--ids-comp-modal-container-size-border-width, 0px) solid var(--ids-comp-modal-container-color-border-surface-default, rgba(255, 255, 255, 0.00));
  box-shadow: var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none, 0px) var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl, 25px) var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl, 50px) var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs, -12px) var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker, rgba(0, 0, 0, 0.25));

  section {
    @apply flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

::backdrop {
  opacity: 0.25;
  transition: v-bind("dialogStyle.background") 0.5s ease;
}

dialog[open] {
  animation: bounce-in 0.3s;
}

dialog.closed {
  animation: bounce-out 0.3s;
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