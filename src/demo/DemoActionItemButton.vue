<template>
  <div class="demo">
    <h2>ActionItemButtons</h2>
    <IdsActionItemButton
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :leading-icon="AdjustmentsVerticalIcon"
      :trailing-icon="ChevronDownIcon"
      :mode="option.mode"
    >
      {{ option.mode + " " + option.size }} button
    </IdsActionItemButton>

    <!-- Active Buttons -->
    <h2 class="pt-2">
      Active ActionItemButtons
    </h2>
    <IdsActionItemButton
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
    </IdsActionItemButton>

    <!-- Disabled Buttons -->
    <h2 class="pt-2">
      Disabled ActionItemButtons
    </h2>
    <IdsActionItemButton
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
    </IdsActionItemButton>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/solid";
import IdsActionItemButton from "../components/IdsActionItemButton.vue";
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
