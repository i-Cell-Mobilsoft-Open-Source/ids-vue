<template>
  <div class="demo">
    <h2>Action Panel</h2>
    <IdsActionPanel
      v-for="(option, index) in allOptions" :id="`${option.appearance}-${option.size}-button`" :key="index"
      :size="option.size" :appearance="option.mode"
    >
      <IdsActionItem
        v-for="(item, i) in repeatedItems" :key="i" :leading-icon="ClockIcon" appearance="filled"
        :trailing-icon="ChevronRightIcon"
      >
        {{ item + ' ' + i }}
      </IdsActionItem>
    </IdsActionPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ClockIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsActionPanel from "../components/action-panel/IdsActionPanel.vue";
import IdsActionItem from "../components/action-item/IdsActionItem.vue";
type ButtonOptions = {
  mode?: "filled" | "outlined" | "elevated";
  size?: "compact";
};

const allModes: Array<ButtonOptions["mode"]> = ["filled", "outlined", "elevated"];
const allSizes: Array<ButtonOptions["size"]> = [
  "compact",
];

const allOptions: ButtonOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    const options: ButtonOptions = { mode, size };
    allOptions.push(options);
  }
}

const repeatedItem = ref('Menu Item Label');
const repeatedItems = Array.from({ length: 8 }, () => repeatedItem.value);
</script>

<style scoped>
@import "./demo-style.scss";
</style>
