<template>
  <div class="demo flex justify-center h-[100vh]">
    {{ isMenuOpen }}
    <h2>Action Menu</h2>
    <IdsActionMenu :show="isMenuOpen" panel-mode="elevated" position="bottomLeft" @close="isMenuOpen = false">
      <template #action>
        <IdsButton :trailing-icon="icon" @click="isMenuOpen = !isMenuOpen">
          menu
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
import { computed, ref } from 'vue';
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsButton from "../components/IdsButton.vue";
import IdsActionMenu from "../components/IdsActionMenu.vue";
import IdsActionItem from "../components/IdsActionItem.vue";
const isMenuOpen = ref<boolean>(false);

const icon = computed(() => {
  return isMenuOpen.value === true ? ChevronUpIcon : ChevronDownIcon;
})

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
@import "./demo-style.scss";
</style>
