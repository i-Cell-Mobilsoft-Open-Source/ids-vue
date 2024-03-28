<script setup lang="ts">

import { ref, reactive, Transition, watchEffect } from 'vue';
import IdsIconButton from './IdsIconButton.vue';
import { XMarkIcon } from "@heroicons/vue/24/solid";
const props = withDefaults(defineProps<{
  show?: boolean,
  backDrop?: boolean
  isClosable?: boolean,
  size?: "dense" | "compact" | "comfortable" | "spacious",
}>(), {
  show: false,
  backDrop: false,
  isClosable: true,
  size: "comfortable",
});

const emits = defineEmits(['close']);
const showContent = ref(false);
const emitClose = () => {
  emits('close');
};

watchEffect(() => {
  if (!props.show) {
    showContent.value = false;
  }
})

const modalStyle = reactive({
  gap: `var(--ids-comp-size-modal-container-size-gap-${props.size})`,
  width: `var(--ids-comp-size-modal-container-size-width-${props.size})`,
  minHeight: `var(--ids-comp-size-modal-container-size-min-height-${props.size}, 256px)`,
  borderRadius: `var(--ids-comp-size-modal-container-size-border-radius-${props.size}, 32px)`,
  padding: `var(--ids-comp-size-modal-backdrop-size-padding-y-${props.size}, 24px) var( --ids-comp-size-modal-backdrop-size-padding-x-${props.size}, 24px)`,
});

</script>

<template>
  <transition name="fade" @after-enter="showContent = true">
    <div class="fixed top-0 left-0 w-full h-full z-50" v-if="props.show">
      <div :class="['absolute top-0 left-0 w-full h-full flex items-center justify-center',
    props.backDrop ? 'bg-black/25' : 'bg-transparent']">

        <Transition name="dialog-bounce">

          <dialog v-if="showContent" class="ids-modal static" role="dialog" aria-labelledby="dialogTitle"
            aria-describedby="dialog">
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
              <IdsIconButton class="p-0" variant="light" :icon="XMarkIcon" @click="emitClose" />
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
          </dialog>
        </Transition>
      </div>
    </div>
  </Transition>
</template>


<style scoped lang="scss">
.ids-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: v-bind("modalStyle.gap");
  width: v-bind("modalStyle.width");
  padding: v-bind("modalStyle.padding");
  min-height: v-bind("modalStyle.minHeight");
  border-radius: v-bind("modalStyle.borderRadius");
  background: var(--ids-comp-modal-container-color-bg-enabled);
  border: var(--ids-comp-modal-container-size-border-width, 0px) solid var(--ids-comp-modal-container-color-border-surface-default, rgba(255, 255, 255, 0.00));
  box-shadow: var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none, 0px) var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl, 25px) var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl, 50px) var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs, -12px) var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker, rgba(0, 0, 0, 0.25));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dialog-bounce-enter-active {
  animation: bounce-in .3s;
}

.dialog-bounce-leave-active {
  animation: bounce-in .3s reverse;
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
</style>