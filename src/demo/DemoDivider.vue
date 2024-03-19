<template>
  <section class="divider-container">
    <div class="demo">
      <h2>Dividers Horizontal</h2>
      <IdsDivider
        v-for="(option, index) in allOptions" :id="`${option.variant}-${option.size}-horizontal-divider`"
        :key="index" :size="option.size" :variant="option.variant"
      />
    </div>

    <div class="demo">
      <h2>Dividers Vetrtical</h2>
      <div class="demo2">
        <IdsDivider
          v-for="(option, index) in allOptions" :id="`${option.variant}-${option.size}-vertical-divider`"
          :key="index" type="vertical" :size="option.size" :variant="option.variant"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IdsDivider from "../components/IdsDivider.vue";
type DividerOptions = {
  size?: "compact" | "comfortable" | "spacious";
  variant?:
  | "surface"
  | "primary"
  | "secondary"
  | "brand"
  | "error"
  | "success"
  | "warning"
  | "light"
  | "dark";
};

const allSizes: Array<DividerOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];
const allVariants: Array<DividerOptions["variant"]> = [
  "surface",
  "primary",
  "secondary",
  "brand",
  "error",
  "success",
  "warning",
  "light",
  "dark",
];

const allOptions: DividerOptions[] = [];

for (const size of allSizes) {
  for (const variant of allVariants) {
    const options: DividerOptions = { size, variant };
    allOptions.push(options);
  }
}
</script>

<style scoped>
@import "./demo-style.scss";

.divider-container {
  display: flex;
  gap: 3rem;
}

.demo2 {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 40px;
}

</style>
