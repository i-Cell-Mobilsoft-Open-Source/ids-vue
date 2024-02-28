<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <IdsActionMenu panel-mode="outlined">
      <template #action>
        <IdsButton :trailing-icon="ChevronRightIcon">
          Open
        </IdsButton>
      </template>
      <template #panel>
        <IdsActionItem v-for="(item, i) in repeatedItems" :key="i" :trailing-icon="ChevronRightIcon">
          {{ item + ' ' + i }}
        </IdsActionItem>

        <IdsActionItem>
          <IdsActionMenu panel-mode="outlined">
            <template #action>
              <IdsActionItem :trailing-icon="ChevronRightIcon">
                another menu
              </IdsActionItem>
            </template>
            <template #panel>
              <IdsActionItem v-for="(item, i) in repeatedItems" :key="i">
                {{ item + ' ' + i }}
              </IdsActionItem>
            </template>
          </IdsActionMenu>
        </IdsActionItem>
      </template>
    </IdsActionMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsButton from "../components/IdsButton.vue";
import IdsActionMenu from "../components/IdsActionMenu.vue";
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

const repeatedItem = ref('Menu Item Label');
const repeatedItems = Array.from({ length: 8 }, () => repeatedItem.value);
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
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
