<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import { AccordionAppearance } from "@models/appearances";
import { AccordionConfig } from "@models/interfaces";
import { Size } from "@models/size.type";
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import IdsIcon from "@components/icon/IdsIcon.vue";

const componentClass = 'ids-accordion';

const open = ref(false);
const clicked = ref(false);
const detailsRef = ref<HTMLDetailsElement  | null>(null);
const handleToggle = () =>  {
  open.value = !open.value;
  if (!clicked.value) {
    clicked.value = true;    
  }
};

const props = withDefaults(
  defineProps<AccordionConfig>(),
  {
    isExpanded: false,
    isDisabled: false,
    size: Size.COMPACT,
    appearance: AccordionAppearance.FILLED,
  },
);

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, 'disabled')]: props.isDisabled,
}));

onMounted(() => {
  if (props.isExpanded) {
    if (detailsRef.value) {
      open.value = true;
      detailsRef.value.open = true;
    }
  }  
});
</script>

<template>
  <details ref="detailsRef" :class="classObject">
    <summary class="ids-accordion-summary" :tabindex="props.isDisabled ? -1 : 0" @click="handleToggle">
      <span class="ids-accordion-title">
        <slot name="accordion-title" />
      </span>
      <IdsIcon :icon="open ? ChevronUpIcon : ChevronDownIcon" />
    </summary>
    <article class="ids-accordion-content">
      <slot />
    </article>
  </details>
</template>
