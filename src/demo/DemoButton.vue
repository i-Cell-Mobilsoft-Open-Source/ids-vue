<template>
  <div class="demo">
    <h2>Buttons</h2>
    <IdsButton
      v-for="(option, index) in allOptions"
      :key="index"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon"
      :id="`${option.mode}-${option.variant}-${option.size}-button`"
    >
      {{ option.mode + " " + option.variant + " " + option.size }} button
    </IdsButton>

    <!-- Disabled Buttons -->
    <h2 class="pt-2">Disabled Buttons</h2>
    <IdsButton
      v-for="(option, index) in allOptions"
      :key="index"
      :isDisabled="true"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon"
      :id="`${option.mode}-${option.variant}-${option.size}-button`"
    >
      {{ option.mode + " " + option.variant + " " + option.size }} button
    </IdsButton>
  </div>
</template>

<script setup lang="ts">
import { BoltIcon } from "@heroicons/vue/24/solid";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import IdsButton from "../components/IdsButton.vue";
type ButtonOptions = {
  mode?: "filled" | "outlined" | "text";
  size?: "compact" | "comfortable" | "spacious";
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

const allModes: Array<ButtonOptions["mode"]> = ["filled", "outlined", "text"];
const allSizes: Array<ButtonOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];
const allVariants: Array<ButtonOptions["variant"]> = [
  "primary",
  "secondary",
  "brand",
  "error",
  "success",
  "warning",
  "light",
  "dark",
];

const allOptions: ButtonOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: ButtonOptions = { mode, size, variant };
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

.pt-2 {
  padding-top: 2rem;
}
</style>
