<template>
  <div class="demo">
    <h2>ActionItemButtons</h2>
    <IdsMenuItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
      :appearance="option.appearance"
    >
      {{ option.appearance + " " + option.size }} button
    </IdsMenuItem>

    <!-- Active Buttons -->
    <h2 class="pt-2">
      Active ActionItemButtons
    </h2>
    <IdsMenuItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
      :appearance="option.appearance"
      :is-active="true"
    >
      {{ option.appearance + " " + option.size }} button
    </IdsMenuItem>

    <!-- Disabled Buttons -->
    <h2 class="pt-2">
      Disabled ActionItemButtons
    </h2>
    <IdsMenuItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-button-disabled`"
      :key="index"
      :disabled="true"
      :size="option.size"
      :appearance="option.appearance"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
    >
      {{ option.appearance + " " + option.size }} button
    </IdsMenuItem>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/solid";
import IdsMenuItem from "../components/menu-item/IdsMenuItem.vue";
type ButtonOptions = {
  appearance?: "filled" | "text";
  size?: "compact" | "comfortable" | "spacious";
};

const allAppearance: Array<ButtonOptions["appearance"]> = ["filled", "text"];
const allSizes: Array<ButtonOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];

const allOptions: ButtonOptions[] = [];

for (const appearance of allAppearance) {
  for (const size of allSizes) {
    const options: ButtonOptions = { appearance, size };
    allOptions.push(options);
  }
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>
