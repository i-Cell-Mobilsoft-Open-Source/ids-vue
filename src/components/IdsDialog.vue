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