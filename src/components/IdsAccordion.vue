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

<style scoped lang="scss">
$appearances: text, filled;
$sizes: compact, comfortable, spacious, dense;

.ids-accordion {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: var(--ids-comp-accordion-item-color-bg-default);

  & > .ids-accordion-summary {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    cursor: pointer;

    &:focus {
      outline-offset: 2px;
      outline-style: solid;
      outline-width: var(--ids-comp-accordion-summary-focused-outline-size-outline);
      outline-color: var(--ids-comp-accordion-summary-focused-outline-color-dark-focused);

      .ids-theme-dark & {
        outline-color: var(--ids-comp-accordion-summary-focused-outline-color-light-focused);
      }
    }

    & > .ids-accordion-title {
      flex: 1 0 0;
      overflow: hidden;
      text-overflow: ellipsis;
      font-style: normal;
    }
  }

  &.ids-accordion-disabled > .ids-accordion-summary {
    pointer-events: none;
    user-select: none;
  }

  & > .ids-accordion-content {
    display: flex;
    flex-direction: column;
    background: var(--ids-comp-accordion-details-color-bg-default);
  }

  @each $size in $sizes {
    &.ids-accordion-#{$size} {
      padding: var(--ids-comp-accordion-item-size-padding-y-#{$size}) var(--ids-comp-accordion-item-size-padding-x-#{$size});
      gap: var(--ids-comp-accordion-item-size-gap-#{$size});
      border-radius: var(--ids-comp-accordion-item-size-border-radius-#{$size});

      & > .ids-accordion-summary {
        height: var(--ids-comp-accordion-summary-size-height-#{$size});
        padding: var(--ids-comp-accordion-summary-size-padding-y-#{$size}) var(--ids-comp-accordion-summary-size-padding-x-#{$size});
        gap: var(--ids-comp-accordion-summary-size-gap-#{$size});
        border-radius: var(--ids-comp-accordion-summary-size-border-radius-#{$size});
        border-width: var(--ids-comp-accordion-summary-size-border-width-#{$size});

        & > .ids-accordion-title {
          font-family: var(--ids-comp-accordion-summary-typography-font-family-#{$size});
          font-size: var(--ids-comp-accordion-summary-typography-font-size-#{$size});
          font-weight: var(--ids-comp-accordion-summary-typography-font-weight-#{$size});
          letter-spacing: var(--ids-comp-accordion-summary-typography-letter-spacing-#{$size});
          line-height: var(--ids-comp-accordion-summary-typography-line-height-#{$size});
        }
      }

      & > .ids-accordion-content {
        padding: var(--ids-comp-accordion-details-size-padding-y-#{$size}) var(--ids-comp-accordion-details-size-padding-x-#{$size});
        gap: var(--ids-comp-accordion-details-size-gap-#{$size});
      }
    }
  }

  @each $appearance in $appearances {
    &.ids-accordion-#{$appearance} {
      & > .ids-accordion-summary {
        background: var(--ids-comp-accordion-summary-#{$appearance}-color-bg-default);
        border-color: var(--ids-comp-accordion-summary-#{$appearance}-color-border-default);
        color: var(--ids-comp-accordion-summary-#{$appearance}-color-fg-label-default);

        &:hover {
          background: var(--ids-comp-accordion-summary-#{$appearance}-color-bg-hovered);
          border-color: var(--ids-comp-accordion-summary-#{$appearance}-color-border-hovered);
          color: var(--ids-comp-accordion-summary-#{$appearance}-color-fg-label-hovered);
        }

        &:focus {
          background: var(--ids-comp-accordion-summary-#{$appearance}-color-bg-focused);
          border-color: var(--ids-comp-accordion-summary-#{$appearance}-color-border-focused);
          color: var(--ids-comp-accordion-summary-#{$appearance}-color-fg-label-focused);
        }

        &:active {
          background: var(--ids-comp-accordion-summary-#{$appearance}-color-bg-pressed);
          border-color: var(--ids-comp-accordion-summary-#{$appearance}-color-border-pressed);
          color: var(--ids-comp-accordion-summary-#{$appearance}-color-fg-label-pressed);
        }
      }

      &.ids-accordion-disabled > .ids-accordion-summary {
        background: var(--ids-comp-accordion-summary-#{$appearance}-color-bg-disabled);
        border-color: var(--ids-comp-accordion-summary-#{$appearance}-color-border-disabled);
        color: var(--ids-comp-accordion-summary-#{$appearance}-color-fg-label-disabled);
      }
    }
  }
}
</style>
