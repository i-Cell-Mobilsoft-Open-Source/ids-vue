<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";

const open = ref(false);
const hasOpened = ref(false);
const dropdown = ref<HTMLElement | null>(null);
const details = ref<HTMLDetailsElement | null>(null);
const handleToggle = () => {
  open.value = !open.value;
  hasOpened.value = true
}

const props = withDefaults(
  defineProps<{
    isOpen?: boolean,
    size?: "dense" | "compact" | "comfortable" | "spacious",
  }>(),
  {
    isOpen: false,
    size: "compact",
  },
);

const accordionStyle = reactive({
  background: `var(--accordion-button-text-color-bg-enabled)`,
  gap: `var(--ids-comp-size-accordion-item-size-gap-${props.size})`,
  borderRadius: `var(--ids-comp-size-accordion-item-size-border-radius-${props.size})`,
  padding: `var(--ids-comp-size-accordion-item-size-padding-y) var(--ids-comp-size-accordion-item-size-padding-x)`,
  borderTop: `var(--ids-comp-size-accordion-summary-size-border-width-${props.size}) solid var(--ids-comp-accordion-item-color-border-enabled)`,
  summaryGap: `var(--ids-comp-size-accordion-summary-size-gap-${props.size})`,
  summaryHeight: `var(--ids-comp-size-accordion-summary-size-height-${props.size})`,
  summaryPadding: `var(--ids-comp-size-accordion-summary-size-padding-y-${props.size}) var(--ids-comp-size-accordion-summary-size-padding-x-${props.size})`,
  detailsPadding: `var(--ids-comp-size-accordion-details-size-padding-y-${props.size}) var(--ids-comp-size-accordion-details-size-padding-x-${props.size})`,
  //padding: var(--accordion-summary-size-padding-y, 2px) var(--accordion-summary-size-padding-x, 2px);
});

onMounted(() => {
  // Open the accordion if the index matches the defaultOpenIndex
  if (props.isOpen) {
    hasOpened.value = true;
    if (details.value) {
      details.value.open = true;
    }
  }
});

</script>

<template>
  <details ref="details" class="w-full" @toggle="handleToggle">
    <summary class="flex justify-between w-full">
      <div class="w-4/5 flex justify-start">
        <slot name="accordion-title" />
      </div>
      <div class="w-1/5 flex justify-end">
        <ChevronDownIcon v-if="!open" :class="['w-6', { 'flip': hasOpened }]" />
        <ChevronUpIcon v-else class="w-6 flip" />
      </div>
    </summary>
    <article ref="dropdown" :class="['text-left w-full', [open ? 'enter' : '']]">
      <slot name="accordion-content" />
    </article>
  </details>
</template>

<style scoped>
details {
  border-top: v-bind('accordionStyle.borderTop');
  &>summary {
    cursor: pointer;
    list-style: none;
    gap: v-bind('accordionStyle.summaryGap');
    height: v-bind('accordionStyle.summaryHeight');
    padding: v-bind('accordionStyle.summaryPadding');
  }
}

article {
  padding: v-bind('accordionStyle.detailsPadding');
}

/* details[open] summary~* {
  animation: enter .4s ease-in-out;
} */

@keyframes enter {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }

  50% {
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leave {
  0% {
    transform: translateY(-0%);
    opacity: 1;
  }

  50% {
    transform: translateY(-20%);
  }

  100% {
    opacity: 0;
  }
}

.enter {
  animation: enter .4s ease-in-out;
}

.leave {
  animation: leave .4s ease-in-out;
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
