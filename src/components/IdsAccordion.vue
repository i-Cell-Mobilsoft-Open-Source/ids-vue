<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const open = ref(false);
const hasOpened = ref(false);
const dropdown = ref<HTMLElement | null>(null);
const details = ref<HTMLDetailsElement | null>(null);
const handleToggle = () => {
  open.value = !open.value;
  hasOpened.value = true

  if (!open.value) {
    console.log(11, open.value);
  }
  else {
    console.log(22, open.value);
    details.value?.classList.add('closed');
    const onAnimationEnd = () => {
      details.value?.removeEventListener('animationend', onAnimationEnd);
      details.value?.classList.remove('closed');
    };

    details.value?.addEventListener('animationend', onAnimationEnd);
  }
}

const props = withDefaults(
  defineProps<{
    size?: "dense" | "compact" | "comfortable" | "spacious",
  }>(),
  {
    size: "comfortable",
  },
);

const accordionStyle = reactive({
  background: `var(--accordion-button-text-color-bg-enabled)`,
  gap: `var(--ids-comp-size-accordion-item-size-gap-${props.size})`,
  borderRadius: `var(--ids-comp-size-accordion-item-size-border-radius-${props.size})`,
  padding: `var(--accordion-item-size-padding-y, 0px) var(--accordion-item-size-padding-x, 0px)`
})

</script>

<template>
  <details class="w-full" @toggle="handleToggle" ref="details">
    <summary class="flex justify-between w-full">
      <div class="w-4/5 flex justify-start">
        <slot name="accordion-title" />
      </div>
      <div class="w-1/5 flex justify-end">
        <ChevronUpIcon v-if="!open" :class="['w-6', { 'flip': hasOpened }]" />
        <ChevronDownIcon v-else class="w-6 flip" />
      </div>
    </summary>
    <article :class="['text-left w-full']" ref="dropdown">
      <slot name="accordion-content" />
    </article>
  </details>
</template>

<style scoped>
details {
  /* fixfixifixifix */
  border-top: 1px solid gray;

  &>summary {
    cursor: pointer;
    list-style: none;
  }
}

details[open] summary~* {
  animation: enter .3s;
}

details.closed summary~* {
  animation: exit .3s;
}

@keyframes enter {
  0% {
    opacity: 0;
    transform: translateY(-5%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes exit {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5%);
    opacity: 0;
  }
}



@keyframes flip {
  0% {
    transform: scaleY(-1);
  }

  100% {
    transform: scaleY(1);
  }
}

.flip {
  animation: flip 0.3s ease-in-out;
}
</style>
