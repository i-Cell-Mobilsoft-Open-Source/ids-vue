<template>
  <div class="demo">
    <h1>Paginator</h1>
    <section v-for="(variant, index) in variants" :key="index" :class="variant">
      <h2>{{ variant.toUpperCase() }}</h2>
      <section v-for="(size, index2) in sizes" :key="index2">
        <h3>{{ size }}</h3>
        <div class="paginator-demo-container">
          <IdsPaginator :length="length" :size="size" :variant="variant" />
        </div>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
import IdsPaginator from "../components/paginator/IdsPaginator.vue";
import { Size, SizeType } from "../models/size.type";
import { PaginatorVariant, PaginatorVariantType } from "../components/paginator/models/IdsPaginatorVariant.type";

  const sizes: SizeType[] = [
    Size.DENSE,
    Size.COMPACT,
    Size.COMFORTABLE,
    Size.SPACIOUS,
  ];

  const variants: PaginatorVariantType[] = [
    PaginatorVariant.PRIMARY,
    PaginatorVariant.SECONDARY,
    PaginatorVariant.LIGHT,
    PaginatorVariant.SURFACE,
  ];

  const length = 120;
</script>
<style scoped lang="scss">
@import "./demo-style.scss";

section {
  padding: 32px;

  &.dark,
  &.surface {
    background-color: transparent;
  }
  &.light {
    background-color: #252526;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
    }
  }

  h3 {
    padding-top: 24px;
  }
}

.paginator-demo-container {
  .ids-paginator {
    min-width: 50%;
  }

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>