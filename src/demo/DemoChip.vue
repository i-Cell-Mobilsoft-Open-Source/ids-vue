<template>
  <div class="demo">
    <h2>Chips</h2>
    <IdsChip
      v-for="(option, index) in allOptions"
      :key="index"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon"
      :id="`${option.mode}-${option.variant}-${option.size}-chip`"
    >
      {{ option.mode + " " + option.variant + " " + option.size }} chip
    </IdsChip>
  </div>
</template>

<script setup lang="ts">
import { BoltIcon } from "@heroicons/vue/24/solid";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import IdsChip from "../components/IdsChip.vue";
type ChipOptions = {
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

const allModes: Array<ChipOptions["mode"]> = ["filled", "outlined"];
const allSizes: Array<ChipOptions["size"]> = ["compact", "comfortable"];
const allVariants: Array<ChipOptions["variant"]> = [
  "primary",
  "secondary",
  "brand",
  "error",
  "success",
  "warning",
  "light",
  "dark",
];

const allOptions: ChipOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: ChipOptions = { mode, size, variant };
      allOptions.push(options);
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
</style>
