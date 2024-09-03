<template>
  <div class="demo menu-container">
    <h2>Action Menu</h2>
    <IdsActionMenu v-model:show="isMenuOpen" panel-mode="elevated" position="bottomLeft">
      <template #action>
        <IdsButton :trailing-icon="icon" @click="isMenuOpen = !isMenuOpen">
          menu
        </IdsButton>
      </template>
      <template #panel>
        <IdsActionPanel>
          <IdsMenuItem v-for="(item, i) in repeatedItems" :key="i" :trailing-icon="ChevronRightIcon">
            {{ item + ' ' + i }}
          </IdsMenuItem>

          <IdsMenuItem>
            <IdsActionMenu panel-mode="outlined">
              <template #action>
                <IdsMenuItem :trailing-icon="ChevronRightIcon">
                  another menu
                </IdsMenuItem>
              </template>
              <template #panel>
                <IdsActionPanel>
                  <IdsMenuItem v-for="(item, i) in repeatedItems" :key="i">
                    {{ item + ' ' + i }}
                  </IdsMenuItem>
                </IdsActionPanel>
              </template>
            </IdsActionMenu>
          </IdsMenuItem>
        </IdsActionPanel>
      </template>
    </IdsActionMenu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsButton from "../components/button/IdsButton.vue";
import IdsActionMenu from "../components/IdsActionMenu.vue";
import IdsMenuItem from "../components/menu-item/IdsMenuItem.vue";
import IdsActionPanel from "../components/action-panel/IdsActionPanel.vue";
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

.menu-container {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>
