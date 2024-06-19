
<template>
  <div class="demo">
    <h2>Checkboxes</h2>
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :key="index" 
      :size="option.size"
      :variant="option.variant"
    />
  </div>
</template>
<script setup lang="ts">
 import IdsCheckbox from "../components/IdsCheckbox.vue";
 type CheckboxOptions = {
  size?: "compact" | "comfortable" | "spacious", "dense";
  variant?:
  | "error"
  | "light"
  | "dark"
  | "surface";
};

const allSizes: Array<CheckboxOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
  "dense"
];
const allVariants: Array<CheckboxOptions["variant"]> = [
  "error",
  "light",
  "dark",
  "surface"
];

const allOptions: CheckboxOptions[] = [];

 for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: CheckboxOptions = { size, variant };
      allOptions.push(options);
    }
 }
</script>
<style scoped lang="scss">
    @import "./demo-style.scss";
</style>