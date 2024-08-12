<script setup lang="ts">
import { computed, getCurrentInstance, ref } from 'vue';
import { IdsPaginatorProps } from '@components/paginator/models/IdsPaginatorProps.interface';
import { PaginatorPageButtonAppearance } from '@components/paginator/models/IdsPaginatorAppearance.type';
import { Size } from '@models/size.type';
import { PaginatorVariant } from '@components/paginator/models/IdsPaginatorVariant.type';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { isNumberEven } from '@core/utils/EvenOdd';
import { IdsPaginationEvents } from '@components/paginator/models/IdsPaginatorEvents.interface';
import idsIcon from '@components/icon/IdsIcon.vue';
import ChevronDoubleLeftIcon from '@mdi/svg/svg/chevron-double-left.svg?component';
import ChevronDoubleRightIcon from '@mdi/svg/svg/chevron-double-right.svg?component';
import ChevronLeftIcon from '@mdi/svg/svg/chevron-left.svg?component';
import ChevronRightIcon from '@mdi/svg/svg/chevron-right.svg?component';
import DotsHorizontalIcon from '@mdi/svg/svg/dots-horizontal.svg?component';

const componentClass = 'ids-paginator';

const instance = getCurrentInstance();
const uid = ref(instance?.uid);
const paginatorRef = ref<HTMLInputElement | null>(null);
const _pageIndex = ref(0);
const $emit = defineEmits<IdsPaginationEvents>();

const props = withDefaults(
  defineProps<IdsPaginatorProps>(),
  {
    id: undefined,
    pageSize: 10,
    pageSizeOptions: () => [10, 20, 50, 100],
    showFirstLastButton: true,
    showPageInfo: true,
    showPageButtons: true,
    showAllPages: false,
    maxDisplayedItemCount: 7,
    length: undefined,
    pageButtonAppearance: PaginatorPageButtonAppearance.PLAIN,
    size: Size.COMFORTABLE,
    variant: PaginatorVariant.SURFACE,
    disabled: false,
    isCompact: false,
  });

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, props.size)]: !!props.size,
    [addClassPrefix(componentClass, props.variant)]: !!props.variant,
    [addClassPrefix(componentClass, 'compact')]: props.isCompact,
  }));

  const pageButtonClassObject = computed(() => 
  ({
    ['ids-paginator__page-button']: true,
    [addClassPrefix('ids-paginator__page-button', props.pageButtonAppearance)]: !!props.pageButtonAppearance,
  }));

  const navigationIcon = {
    first: ChevronDoubleLeftIcon,
    prev: ChevronLeftIcon,
    next: ChevronRightIcon,
    last: ChevronDoubleRightIcon,
    truncation: DotsHorizontalIcon,
  };

  const safePageSizeData = computed(() => getSafePageSizeData(props.pageSizeOptions, props.pageSize));

  const paginatorId = computed<string>(() => {
    return props.id !== undefined ? props.id : `${componentClass}-${uid.value}`;
  });

  const pageButtonIdPrefix = computed(() => `${paginatorId.value}__page-button-`);

  const pageIndex = computed({
    get(): number {
      return _pageIndex.value;
    },
    set(value: number) {
      _pageIndex.value = Math.max(value || 0, 0);
    }
  });

 const getNumberOfPages = computed(() => {
    if (!props.pageSize) {
      return 0;
    }
    return Math.ceil(props.length / props.pageSize);
  });

  const hasPreviousPage = computed(() =>{
    return _pageIndex.value >= 1 && props.pageSize !== 0;
  });

  const hasNextPage = computed(() => {
    const maxPageIndex = getNumberOfPages.value - 1;
    return _pageIndex.value < maxPageIndex && props.pageSize !== 0;
  });

  const isPreviousButtonDisabled = computed<boolean>(() => props.disabled || !hasPreviousPage.value);
  const isNextButtonDisabled = computed<boolean>(() => props.disabled || !hasNextPage.value);

  const showFirstLastButton = computed<boolean>(() => props.showFirstLastButton ?? true);
  const showPageButtons = computed<boolean>(() => props.showPageButtons ?? true);
  const showPageInfo = computed<boolean>(() => props.showPageInfo ?? true);
  
  const pageButtons = computed<string[]>(() => {
    return props.isCompact
      ? []
      : getPageButtons(_pageIndex.value, getNumberOfPages.value, props.showAllPages, props.maxDisplayedItemCount);
  });

  const rangeLabel = computed(() => {
      if (props.length === 0 || safePageSizeData.value.safePageSize === 0) {
        return getRangeLabel('0', '0');
      }

      const currentPageIndex = String(_pageIndex.value + 1);
      const maxPageCount = String(Math.ceil(props.length / safePageSizeData.value.safePageSize));
      return getRangeLabel(currentPageIndex, maxPageCount);
  });

  function getSafePageSizeData(pageSizeOptions: number[], pageSize: number): { safePageSizeOptions: number[], safePageSize: number } {
    if (!pageSize || pageSize < 0) {
      throw new Error('Paginator: invalid pageSize value. Must be a number and greater than 0');
    }

    const safePageSizeOptions = pageSizeOptions.slice();
    if (!safePageSizeOptions.includes(pageSize)) {
      throw new Error('Paginator: invalid pageSize. pageSizeOptions not includes pageSize. Use an item from pageSizeOptions.');
    }

    safePageSizeOptions.sort((a, b) => a - b);
    const safePageSize: number = safePageSizeOptions.length !== 0 ? safePageSizeOptions[0] : props.pageSize;

    return {
      safePageSize,
      safePageSizeOptions,
    };
  }

  function getPageButtons(pageIndex: number, numberOfPages: number, showAllPages: boolean, maxDisplayedItemCount: number): string[] {
    const allPages = [...Array(numberOfPages).keys()].map((item) => (item + 1).toString());
    return showAllPages ? allPages : getTruncatedPages(allPages, pageIndex, maxDisplayedItemCount);
  }

  function getTruncatedPages(allPages: string[], pageIndex: number, maxDisplayedItemCount: number): string[] {
    if (isNumberEven(maxDisplayedItemCount)) {
      throw new Error('Paginator: maxDisplayedItemCount should be an odd number');
    }

    const center = Math.ceil(maxDisplayedItemCount / 2);
    const actualPage = pageIndex + 1;
    const lastPage = +(allPages.at(-1) as string);
    const isTruncatedRight = actualPage <= center;
    const isTruncatedBoth = actualPage > center && actualPage <= lastPage - center;
    const isTruncatedLeft = actualPage > lastPage - center;
    const truncation = '...';

    if (isTruncatedRight) {
      const x = maxDisplayedItemCount - 2; // 2 = 1 last page, 1 truncation
      return [
        ...allPages.slice(0, x),
        truncation,
        lastPage.toString(),
      ];
    }

    if (isTruncatedBoth) {
      const x = (maxDisplayedItemCount - 5) / 2; // 5 = 1 fist page + 1 last page + 2 truncation + 1 actual page
      return [
        '1',
        truncation,
        ...allPages.slice(pageIndex - x, pageIndex + x + 1),
        truncation,
        lastPage.toString(),
      ];
    }

    if (isTruncatedLeft) {
      const x = maxDisplayedItemCount - 2; // 2 = 1 last page, 1 truncation
      return [
        '1',
        truncation,
        ...allPages.slice(lastPage - x),
      ];
    }

    return [];
  }

  function stepNextPage(): void {
    if (!hasNextPage.value) {
      return;
    }
    stepPage(_pageIndex.value + 1);
  }

  function stepPreviousPage(): void {
    if (!hasPreviousPage.value) {
      return;
    }
    stepPage(_pageIndex.value - 1);
  }

  function stepFirstPage(): void {
    if (!hasPreviousPage.value) {
      return;
    }
    stepPage(0);
  }

  function stepLastPage(): void {
    if (!hasNextPage.value) {
      return;
    }
    stepPage(getNumberOfPages.value - 1);
  }

  function stepPage(pageIndex: number): void {
    const previousPageIndex = _pageIndex.value;
    _pageIndex.value = pageIndex;
    emitPageEvent(previousPageIndex, pageIndex);
  }

  function emitPageEvent(previousPageIndex: number, pageIndex: number): void {
    $emit('page', {
      previousPageIndex,
      pageIndex,
      pageSize: props.pageSize,
      length: props.length,
    });
  }

  function handleKeyDown(event: KeyboardEvent): void {
    event.stopPropagation();
    const navigationKeys = ['ArrowLeft', 'ArrowRight', 'PageDown', 'PageUp', 'Home', 'End'];

    switch (event.key) {
      case 'ArrowLeft':
      case 'PageDown':
        event.preventDefault();
        stepPreviousPage();
        break;
      case 'ArrowRight':
      case 'PageUp':
        event.preventDefault();
        stepNextPage();
        break;
      case 'Home':
        event.preventDefault();
        stepFirstPage();
        break;
      case 'End':
        event.preventDefault();
        stepLastPage();
        break;
      default:
        break;
    }
    if (event.key !== 'Tab' && navigationKeys.includes(event.key)) {
      const pageButtonId = `${pageButtonIdPrefix.value}${_pageIndex.value + 1}`; // after navigation pageIndex is new value now
      const button = paginatorRef.value?.querySelector<HTMLInputElement>(`button#${pageButtonId}`);
      button?.focus();
    }
  }

  function getAriaLabel(labelType: string): string | undefined {
    return instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator ? 
      instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator[labelType] : undefined;
  }

  function getAriaPageLabel(value: string): string | undefined {
    return instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator ? 
      instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator['pageLabel'].replace(/{page}/g, value) : undefined;
  }

  function getRangeLabel(value1: string, value2: string): string | undefined {
    return instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator ? 
      instance?.appContext.config.globalProperties.$idsVue.config.locale.paginator['rangeLabel'].replace(/{value1}/g, value1).replace(/{value2}/g, value2)
      : undefined;
  }

</script>
<template>
  <div ref="paginatorRef" :class="classObject" @keydown="handleKeyDown($event)">
    <nav class="ids-paginator__navigation-container" role="navigation">
      <button
        v-if="showFirstLastButton"
        type="button"
        class="ids-paginator__page-button-arrow first"
        :class="pageButtonClassObject"
        :disabled="isPreviousButtonDisabled"
        :aria-label="getAriaLabel('firstPageLabel')"
        @click="stepFirstPage()"
      >
        <idsIcon :icon="navigationIcon.first" />
      </button>

      <button
        type="button"
        class="ids-paginator__page-button-arrow previous"
        :class="pageButtonClassObject"
        :disabled="isPreviousButtonDisabled"
        :aria-label="getAriaLabel('previousPageLabel')"
        @click="stepPreviousPage()"
      >
        <idsIcon :icon="navigationIcon.prev" />
      </button>
      <ul v-if="showPageButtons" class="ids-paginator__page-button-container">
        <li v-for="pageButton in pageButtons" :key="pageButton">
          <div v-if="pageButton === '...'" class="ids-paginator__page-button-truncation">
            <idsIcon :icon="navigationIcon.truncation" />
          </div>
          <button
            v-else
            :id="pageButtonIdPrefix + pageButton"
            ref="pageButtonElement"
            type="button"
            class="ids-paginator__page-button"
            :class="[pageButtonClassObject, +pageButton === pageIndex + 1 ? 'active' : '']"
            :aria-label="getAriaPageLabel(pageButton)"
            :aria-current="+pageButton === pageIndex + 1 ? 'page' : undefined"
            @click="stepPage(+pageButton - 1)"
          >
            <span>{{ pageButton }}</span>
          </button>
        </li>
      </ul>
      <button
        type="button"
        class="ids-paginator__page-button-arrow next"
        :class="pageButtonClassObject"
        :disabled="isNextButtonDisabled"
        :aria-label="getAriaLabel('nextPageLabel')"
        @click="stepNextPage()"
      >
        <idsIcon :icon="navigationIcon.next" />
      </button>

      <button
        v-if="showFirstLastButton"
        type="button"
        class="ids-paginator__page-button-arrow last"
        :class="pageButtonClassObject"
        :disabled="isNextButtonDisabled"
        :aria-label="getAriaLabel('lastPageLabel')"
        @click="stepLastPage()"
      >
        <idsIcon :icon="navigationIcon.last" />
      </button>
      <span v-if="showPageInfo" class="ids-paginator__help-text">
        {{ rangeLabel }}
      </span>
    </nav>
  </div>
</template>
<style scoped lang="scss">
$pageButtonAppearances: plain;
$sizes: compact, comfortable, spacious, dense;
$variants: primary, secondary, light, surface;

.ids-paginator {
  display: inline-flex;

  .ids-paginator__navigation-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .ids-paginator__page-button-container {
      display: flex;
      align-items: center;

      .ids-paginator__page-button-truncation {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .ids-paginator__page-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;

      &:focus {
        outline-width: var(--ids-comp-paginator-page-links-focused-outline-size-outline);
        outline-style: solid;
      }
    }

    .ids-paginator__page-button-arrow {
      &.first,
      &.previous {
        order: 1;
      }
    }
    .ids-paginator__page-button-container {
      order: 2;
    }
    .ids-paginator__page-button-arrow {
      &.next,
      &.last {
        order: 3;
      }
    }
    .ids-paginator__help-text {
      order: 4;
    }
  }

  .ids-paginator__help-text {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  @each $size in $sizes {
    &.ids-paginator-#{$size} {
      .ids-paginator__navigation-container {
        gap: var(--ids-comp-paginator-size-gap-comfortable);

        .ids-paginator__page-button {
          height: var(--ids-comp-paginator-page-links-size-height-#{$size});
          min-width: var(--ids-comp-paginator-page-links-size-min-width-#{$size});
          padding: var(--ids-comp-paginator-page-links-size-padding-y-#{$size})
            var(--ids-comp-paginator-page-links-size-padding-x-#{$size});
          font-family: var(--ids-comp-paginator-page-links-label-typography-font-family-#{$size});
          font-size: var(--ids-comp-paginator-page-links-label-typography-font-size-#{$size});
          font-weight: var(--ids-comp-paginator-page-links-label-typography-font-weight-#{$size});
          letter-spacing: var(--ids-comp-paginator-page-links-label-typography-letter-spacing-#{$size});
          line-height: var(--ids-comp-paginator-page-links-label-typography-line-height-#{$size});
          border-radius: var(--ids-comp-paginator-page-links-page-link-size-border-radius-#{$size});
        }

        .ids-paginator__page-button-truncation {
          height: var(--ids-comp-paginator-page-links-size-height-#{$size});
          width: var(--ids-comp-paginator-page-links-size-min-width-#{$size});
        }
      }

      .ids-paginator__help-text {
        font-family: var(--ids-comp-paginator-help-text-label-typography-font-family-#{$size});
        font-size: var(--ids-comp-paginator-help-text-label-typography-font-size-#{$size});
        font-weight: var(--ids-comp-paginator-help-text-label-typography-font-weight-#{$size});
        letter-spacing: var(--ids-comp-paginator-help-text-label-typography-letter-spacing-#{$size});
        line-height: var(--ids-comp-paginator-help-text-label-typography-line-height-#{$size});
        border-radius: var(--ids-comp-paginator-help-text-size-border-radius-#{$size});
        height: var(--ids-comp-paginator-help-text-size-height-#{$size});
        padding: var(--ids-comp-paginator-help-text-size-padding-y-#{$size});
      }
    }
  }

  @each $variant in $variants {
    &.ids-paginator-#{$variant} {
      .ids-paginator__page-button:focus {
        $lightOrDark: 'dark';
        @if ($variant == 'light') {
          $lightOrDark: 'light';
        }
        outline-color: var(--ids-comp-paginator-page-links-focused-outline-color-#{$lightOrDark}-focused);
      }

      .ids-paginator__navigation-container {
        @each $pageButtonAppearance in $pageButtonAppearances {
          .ids-paginator__page-button.ids-paginator__page-button-#{$pageButtonAppearance} {
            background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-default);
            color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-default);

            &.active:not(:disabled) {
              background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-active);
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-active);
            }
            &:focus {
              background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-focused);
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-focused);
            }
            &:hover {
              background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-hovered);
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-hovered);
            }
            &:active {
              background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-pressed);
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-pressed);
            }
            &:disabled {
              background: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-bg-#{$variant}-disabled);
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-label-#{$variant}-disabled);
            }

            &.ids-paginator__page-button-arrow:not(:disabled) {
              color: var(--ids-comp-paginator-page-links-#{$pageButtonAppearance}-color-fg-icon-#{$variant}-default);
            }
          }
        }

        .ids-paginator__page-button-truncation {
          color: var(--ids-comp-paginator-page-links-plain-color-fg-icon-#{$variant}-disabled);
        }
      }

      .ids-paginator__help-text {
        color: var(--ids-comp-paginator-help-text-color-fg-#{$variant}-default);
      }
    }
  }

  &.ids-paginator-compact {
    .ids-paginator__navigation-container {
      .ids-paginator__page-button-container {
        display: none;
      }
      .ids-paginator__help-text {
        order: 2;
        margin-left: 0;
      }
    }
  }
}
</style>