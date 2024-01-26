<template>
  <section class="divider-container">
    <div class="demo">
      <h2>Dividers Horizontal</h2>
      <IdsDivider
        v-for="(option, index) in allOptions"
        :key="index"
        :size="option.size"
        :variant="option.variant"
        width="300px"
        :id="`${option.variant}-${option.size}-horizontal-divider`"
      >
      </IdsDivider>
    </div>

    <div class="demo">
      <h2>Dividers Vetrtical</h2>
      <div class="demo2">
        <IdsDivider
          v-for="(option, index) in allOptions"
          :key="index"
          height="300px"
          type="vertical"
          :size="option.size"
          :variant="option.variant"
          :id="`${option.variant}-${option.size}-vertical-divider`"
        >
        </IdsDivider>
      </div>
    </div>
  </section>
</template>
<!-- height="300px" -->

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
.divider-container {
  display: flex;
  gap: 3rem;
}

.demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;
  & > button {
    align-self: center;
  }
}

.demo2 {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
