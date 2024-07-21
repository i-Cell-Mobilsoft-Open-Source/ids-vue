<script setup lang="ts">
import { getCurrentInstance } from 'vue';

  const instance = getCurrentInstance();

  //  function getAriaLabel(labelType: string): string | undefined {
  //     return this.$idsVue.config.locale.aria ? this.$idsVue.config.locale.aria[labelType] : undefined;
  //  }

 function asd(): void {
  console.log(instance?.appContext.config.globalProperties.$idsVue.config.locale['nextPageLabel']);
 }

 function asd2(): void {
  console.log(instance?.appContext.config.globalProperties.$idsVue.config.locale['firstPageLabel']);
 }
</script>
<template>
  <div class="ids-paginator">
    <div class="ids-paginator__navigation-container">
      <button
        type="button"
        class="ids-paginator__page-button ids-paginator__page-button__arrow first"
        @click="asd()"
      >
        1
      <!-- <ids-icon [icon]="navigationIcon.first" [size]="size()" /> -->
      </button>

      <button
        type="button"
        class="ids-paginator__page-button ids-paginator__page-button__arrow previous"
        @click="asd2()"
      >
        2
      <!-- <ids-icon [icon]="navigationIcon.prev" [size]="size()" /> -->
      </button>

      <div class="ids-paginator__page-button-container">
        <!-- @for (pageButton of pageButtons(); track $index) {
      @if (pageButton === "...") {
      <ids-icon class="ids-paginator__page-button__dots" [icon]="navigationIcon.dots" [size]="size()" />
      } @else {
      <button
        type="button"
        class="ids-paginator__page-button"
        [class.active]="+pageButton === pageIndex + 1"
        (click)="stepPage(+pageButton - 1)"
      >
        <span>{{ pageButton }}</span>
      </button>
      }
      } -->
        <button
          type="button"
          class="ids-paginator__page-button"
        >
          <span>3</span>
        </button>
      </div>

      <button
        type="button"
        class="ids-paginator__page-button ids-paginator__page-button__arrow next"
      >
        4
      </button>

      <button
        type="button"
        class="ids-paginator__page-button ids-paginator__page-button__arrow last"
      >
        6
      </button>
    </div>
    <span class="ids-paginator__help-text">15/15</span>
  </div>
</template>
<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: primary, secondary, light, surface;

.ids-paginator {
  display: inline-flex;
  justify-content: space-between;

  .ids-paginator__navigation-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    .ids-paginator__page-button-container {
      display: flex;
      align-items: center;
    }

    .ids-paginator__page-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;

      :focus {
        outline-width: var(--ids-comp-paginator-page-links-focused-outline-size-outline);
      }
    }
  }

  .ids-paginator__help-text {
    display: flex;
    justify-content: center;
    align-items: center;
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
      .ids-paginator__navigation-container {
        .ids-paginator__page-button {
          background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-default);
          color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-default);

          &.active:not(:disabled) {
            background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-active);
            color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-active);
          }
          &:focus {
            background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-focused);
            color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-focused);
          }
          &:hover {
            background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-hovered);
            color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-hovered);
          }
          &:active {
            background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-pressed);
            color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-pressed);
          }
          &:disabled {
            background: var(--ids-comp-paginator-page-links-plain-color-bg-#{$variant}-disabled);
            color: var(--ids-comp-paginator-page-links-plain-color-fg-label-#{$variant}-disabled);
          }

          &.ids-paginator__page-button__arrow:not(:disabled) {
            color: var(--ids-comp-paginator-page-links-plain-color-fg-icon-#{$variant}-default);
          }
        }

        .ids-paginator__page-button__dots {
          color: var(--ids-comp-paginator-page-links-plain-color-fg-icon-#{$variant}-disabled);
        }
      }

      .ids-paginator__help-text {
        color: var(--ids-comp-paginator-help-text-color-fg-#{$variant}-default);
      }
    }
  }
}
</style>