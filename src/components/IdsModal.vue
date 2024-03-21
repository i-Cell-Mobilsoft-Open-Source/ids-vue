

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { defineEmits, reactive } from 'vue';
import { XMarkIcon } from  "@heroicons/vue/24/solid";
import IdsIconButton from './IdsIconButton.vue';

const emits = defineEmits(['close']);

const emitClose = () => {
  emits('close');
};

const props = withDefaults(defineProps<{
  isOpen?: boolean,
  backDrop?: boolean
  isClosable?: boolean,
  size?: "compact" | "comfortable" | "spacious",
}>(), {
  isOpen: true,
  backDrop: false,
  isClosable: true,
  size: "comfortable",
});
const modalStyle = reactive({
  width: `var(--ids-comp-modal-container-size-width, 600px)`,//doesn't exist 
  minHeight: `var(--modal-container-size-min-height, 256px)`, //doesn't exist 
});

</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div :class="['fixed inset-0', {'bg-black/25': props.backDrop}]" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="ids-modal transform transition-all"
            >
              <DialogTitle
                as="h3"
              >
                <div class="flex justify-between ">
                  <div class="flex flex-col gap-2">
                    <p v-if="$slots.title" class="text-3xl font-bold tracking-[.5px] text-[--ids-ids-smc-reference-container-color-fg-suface-darker-95]">
                      <slot name="title" />
                    </p>
                    <p v-if="$slots.subTitle" class="text-base font-normal tracking-[.5px] text-[--ids-ids-smc-reference-container-color-fg-suface-darker-95]">
                      <slot name="subTitle" />
                    </p>
                  </div>
                  
                  <IdsIconButton class="p-0" variant="light" :icon="XMarkIcon" @click="emitClose" />
                </div>
              </DialogTitle>
              <div v-if="$slots.content" class="py-6 max-h-[70vh]">
                <div class="max-h-[70vh]">
                  <slot name="content" />
                </div>
              </div>

              <div class="flex flex-row items-center justify-between">
                <div v-if="$slots.label">
                  <slot name="label" />
                </div>
                <div v-if="$slots.action" class="flex gap-2">
                  <slot name="action" />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped lang="scss">
.ids-modal {
  align-items: flex-start;
  width: v-bind("modalStyle.width"); 
  min-height: v-bind("modalStyle.minHeight");


  gap: var(--ids-comp-modal-container-size-gap);
  background: var(--ids-comp-modal-container-color-bg-enabled);
  border-radius: var(--ids-comp-modal-container-size-border-radius, 32px);
  padding: var(--ids-comp-modal-container-size-padding-y) var(--ids-comp-modal-container-size-padding-x);
  padding: var(--modal-backdrop-size-padding-y, 24px) var(--modal-backdrop-size-padding-x, 24px);
  border: var(--ids-comp-modal-container-size-border-width, 0px) solid var(--ids-comp-modal-container-color-border-surface-default, rgba(255, 255, 255, 0.00));
  box-shadow: var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none, 0px) var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl, 25px) var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl, 50px) var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs, -12px) var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker, rgba(0, 0, 0, 0.25));
}
</style>


<!--  gap: v-bind("modalStyle.gap");
 background: v-bind("modalStyle.background");
 border-radius: v-bind("modalStyle.borderRadius");
 padding: v-bind("modalStyle.padding");
 border: v-bind("modalStyle.border");
 box-shadow: v-bind("modalStyle.boxShadow"); -->

<!-- display: flex;
width: var(--modal-container-size-width, 600px);
min-height: var(--modal-container-size-min-height, 256px);
padding: var(--modal-container-size-padding-y, 24px) var(--modal-container-size-padding-x, 0px);
flex-direction: column;
align-items: flex-start;
gap: var(--modal-container-size-gap, 24px);
flex: 1 0 0; -->

<!-- 
border-radius: var(--modal-container-size-border-radius, 32px);
border: var(--modal-container-size-border-width, 0px) solid var(--modal-container-color-border-surface-default, rgba(255, 255, 255, 0.00));
background: var(--modal-container-color-bg-enabled, #FFF);

/* ids/elevation/shadow-2xl */
box-shadow: var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none, 0px) var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl, 25px) var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl, 50px) var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs, -12px) var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker, rgba(0, 0, 0, 0.25)); -->