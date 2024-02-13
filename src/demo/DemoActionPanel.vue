<template>
  <div class="demo">
    <h2>Action Panel</h2>
    <IdsActionPanel
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-button`"
      :key="index"
      :size="option.size"
      :mode="option.mode"
    >
      <IdsActionItem
        v-for="(item, i) in repeatedItems"
        :key="i"
        :leading-icon="ClockIcon"
        :trailing-icon="ChevronRightIcon"
      >
        {{ item + ' ' + i }}
      </IdsActionItem>
    </IdsActionPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ClockIcon } from "@heroicons/vue/24/solid";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsActionPanel from "../components/IdsActionPanel.vue";
import IdsActionItem from "../components/IdsActionItem.vue";
type ButtonOptions = {
  mode?: "filled" | "outlined" | "elevated";
  size?: "compact" | "comfortable" | "spacious";
};

const allModes: Array<ButtonOptions["mode"]> = ["filled", "outlined", "elevated"];
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

// Az ismételendő elem
const repeatedItem = ref('Menu Item Label');

// Az ismételendő elemek tömbje
const repeatedItems = Array.from({ length: 8 }, () => repeatedItem.value);
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
