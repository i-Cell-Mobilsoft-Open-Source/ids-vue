<template>
  <div class="demo">
    <h2>ActionItemButtons</h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
      :mode="option.mode"
    >
      {{ option.mode + " " + option.size }} button
    </IdsActionItem>

    <!-- Active Buttons -->
    <h2 class="pt-2">
      Active ActionItemButtons
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
      :mode="option.mode"
      :is-active="true"
    >
      {{ option.mode + " " + option.size }} button
    </IdsActionItem>

    <!-- Disabled Buttons -->
    <h2 class="pt-2">
      Disabled ActionItemButtons
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-button`"
      :key="index"
      :is-disabled="true"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
    >
      {{ option.mode + " " + option.size }} button
    </IdsActionItem>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/solid";
import IdsActionItem from "../components/IdsActionItem.vue";
type ButtonOptions = {
  mode?: "filled" | "text";
  size?: "compact" | "comfortable" | "spacious";
};

const allModes: Array<ButtonOptions["mode"]> = ["filled", "text"];
const allSizes: Array<ButtonOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];

const allOptions: ButtonOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    const options: ButtonOptions = { mode, size };
    allOptions.push(options);
  }
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>
