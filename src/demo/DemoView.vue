<template>
  <nav>
    <button @click="showComponent(Button)">Buttons Component</button>
    <button @click="showComponent(IconButton)">Icon Buttons Component</button>
    <button @click="showComponent(Chip)">Chips Component</button>
    <button @click="showComponent(Divider)">Divider Component</button>
    <button @click="showComponent(Avatar)">Avatar Component</button>
    <button @click="showComponent(ActionItemButton)">
      ActionItemButton Component
    </button>
  </nav>
  <section>
    <component :is="currentComponent" />
  </section>
  <!-- <IdsButton size="comfortable" variant="secondary" @click="drMode" style="margin-bottom: 10px;">{{ darkText }}</IdsButton> -->
</template>

<script setup lang="ts">
//import { ref } from 'vue';
//import IdsButton from './components/IdsButton.vue'
// import IdsChip from './components/IdsChip.vue';

// import { MoonIcon } from "@heroicons/vue/24/outline"

// const darkText = ref('lightMode');
// function drMode() {
//   if (document.documentElement.classList.contains('dark')) {
//     document.documentElement.classList.remove('dark')
//     darkText.value = 'lightMode';
//   } else {
//     document.documentElement.classList.add('dark')
//     darkText.value = 'darkMode';
//   }
// }

import { shallowRef } from "vue";
import Chip from "./DemoChip.vue";
import Avatar from "./DemoAvatar.vue";
import Button from "./DemoButton.vue";
import Divider from "./DemoDivider.vue";
import IconButton from "./DemoIconButton.vue";
import ActionItemButton from "./DemoActionItemButton.vue";

const currentComponent = shallowRef(Button);

function showComponent(data: any) {
  currentComponent.value = data;
}
</script>

<style scoped>
nav {
  top: 0px;
  left: 0px;
  gap: 1rem;
  display: flex;
  padding: 1rem;
  position: fixed;
  flex-direction: column;
  background-color: #334155;
  border-bottom-right-radius: 4px;
}

section {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}
</style>
