<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/solid";
import { AccordionAppearance } from "@models/appearances";
import { AccordionConfig } from "@models/interfaces";
import { Size } from "@models/size.type";

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

const accordionStyle = reactive({
  background: `var(--accordion-button-text-color-bg-default)`,
  gap: `var(--ids-comp-accordion-item-size-gap-${props.size})`,
  summaryGap: `var(--ids-comp-accordion-summary-size-gap-${props.size})`,
  summaryHeight: `var(--ids-comp-accordion-summary-size-height-${props.size})`,
  borderRadius: `var(--ids-comp-accordion-item-size-border-radius-${props.size})`,
  padding: `var(--ids-comp-accordion-item-size-padding-y-${props.size}) var(--ids-comp-accordion-item-size-padding-x-${props.size})`,
  borderTop: `var(--ids-comp-accordion-summary-size-border-width-${props.size}) solid var(--ids-comp-accordion-item-color-border-default)`,
  summaryPadding: `var(--ids-comp-accordion-summary-size-padding-y-${props.size}) var(--ids-comp-accordion-summary-size-padding-x-${props.size})`,
  detailsPadding: `var(--ids-comp-accordion-details-size-padding-y-${props.size}) var(--ids-comp-accordion-details-size-padding-x-${props.size})`,

  //typography
  fontSize: `var(--ids-comp-accordion-summary-typography-font-size-${props.size})`,
  fontFamily: `var(--ids-comp-accordion-summary-typography-font-family-${props.size})`,
  fontWeight: `var(--ids-comp-accordion-summary-typography-font-weight-${props.size})`,
  lineHeight: `var(--ids-comp-accordion-summary-typography-line-height-${props.size})`,
  letterSpacing: `var(--ids-comp-accordion-summary-typography-letter-spacing-${props.size})`,
});

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
  <details ref="detailsRef" class="ids-accordion">
    <summary class="ids-accordion__header" @click="handleToggle">
      <div class="ids-accordion__header--title">
        <slot name="accordion-title" />
      </div>
      <div class="ids-accordion__header--icon">
        <component :is="open ? ChevronUpIcon : ChevronDownIcon" :class="['icon-size', { 'flip': clicked }]" />
      </div>
    </summary>
    <article class="ids-accordion__content">
      <slot name="accordion-content" />
    </article>
  </details>
</template>

<style scoped lang="scss">
.ids-accordion {
  width: 100%;
  padding: 10px;

  &__header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &--title {
      display: flex;
      width: 80%;
      justify-content: flex-start;
    }

    &--icon {
      display: flex;
      width: 20%;
      justify-content: flex-end;
    }
  }

  &__content {
    text-align: left;
    width: 100%;
  }
}

details {
  border-top: v-bind('accordionStyle.borderTop');
  &>summary {
    cursor: pointer;
    list-style: none;
    transition: margin 1.5s ease-out;
    gap: v-bind('accordionStyle.summaryGap');
    font-size: v-bind('accordionStyle.fontSize');
    height: v-bind('accordionStyle.summaryHeight');
    line-height: v-bind('accordionStyle.lineHeight');
    font-family: v-bind('accordionStyle.fontFamily');
    font-weight: v-bind('accordionStyle.fontWeight');
    padding: v-bind('accordionStyle.summaryPadding');
    letter-spacing: v-bind('accordionStyle.letterSpacing');
  }
}

article {
  padding: v-bind('accordionStyle.detailsPadding');
}

@keyframes slideDown {
	    0% {
          opacity: 0; 
	        height: 0%;          
	    }
	    100% {
          opacity: 1; 
	        height: 100%;
	    }
	}

	details[open] > article {
      overflow:hidden;
	    animation-name: slideDown;
	    animation-duration: .5s;
	    animation-timing-function:cubic-bezier(0, 0, 1, 0);
	}

@keyframes flip {
  0% {
    transform: scaleY(-1);
  }

  100% {
    transform: scaleY(1);
  }
}

.icon-size {
  width: 24px;
}

.flip {
  animation: flip 0.3s ease-in-out;
}
</style>
