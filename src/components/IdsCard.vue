<template>
  <div class="ids-card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.ids-card {
  display: flex;
  width: 356px;
  padding: var(--smc-reference-spacing-none, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--smc-reference-spacing-none, 0px);
  border-radius: var(--comp-cards-size-comfortable-border-radius, 24px);
  border: 2px solid var(--comp-cards-filled-color-border-surface-pressed, #64748B);
  opacity: var(--comp-buttons-size-spacious-border, 1);
  background: var(--comp-cards-filled-color-bg-surface-pressed, #CBD5E1);
  padding: 10px;
}
</style>