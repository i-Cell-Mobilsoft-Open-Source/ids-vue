<template>
  <div class="demo">
    <h2>Tags</h2>
    <IdsTag
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.variant}-${option.size}-Tag`"
      :key="index"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon"
    >
      {{ option.mode + " " + option.variant + " " + option.size }} Tag
    </IdsTag>
  </div>
</template>

<script setup lang="ts">
import { BoltIcon,BeakerIcon } from "@heroicons/vue/24/solid";
import IdsTag from "../components/IdsTag.vue";
type TagOptions = {
  mode?: "filled" | "outlined";
  size?: "compact" | "comfortable";
  variant?:
    | "primary"
    | "secondary"
    | "brand"
    | "error"
    | "success"
    | "warning"
    | "light"
    | "dark";
};

const allModes: Array<TagOptions["mode"]> = ["filled", "outlined"];
const allSizes: Array<TagOptions["size"]> = ["compact", "comfortable"];
const allVariants: Array<TagOptions["variant"]> = [
  "primary",
  "secondary",
  "brand",
  "error",
  "success",
  "warning",
  "light",
  "dark",
];

const allOptions: TagOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: TagOptions = { mode, size, variant };
      allOptions.push(options);
    }
  }
}
</script>

<style scoped>
.demo {
  gap: 1rem;
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  flex-direction: column;
}

p {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
