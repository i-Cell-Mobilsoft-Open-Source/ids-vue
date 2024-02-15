<!-- eslint-disable vue/html-self-closing -->
<template>
  <nav :class="{ 'open': isMenuVisible }">
    <div
      data-cy="hamburger-menu"
      class="menu-btn hamburger-menu"
      @click="toggleMenu"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <button data-cy="button-component" @click="showComponent(Button)">
      Buttons Component
    </button>
    <button data-cy="icon-button-component" @click="showComponent(IconButton)">
      Icon Buttons Component
    </button>
    <button data-cy="tags-component" @click="showComponent(Tag)">
      Tags Component
    </button>
    <button data-cy="divider-component" @click="showComponent(Divider)">
      Divider Component
    </button>
    <button data-cy="avatar-component" @click="showComponent(Avatar)">
      Avatar Component
    </button>
    <button data-cy="action-item-button-component" @click="showComponent(ActionItemButton)">
      ActionItemButton Component
    </button>
    <button data-cy="action-item-link-component" @click="showComponent(ActionItemLink)">
      ActionItemLink Component
    </button>
    <button data-cy="action-panel-component" @click="showComponent(ActionPanel)">
      ActionPanel Component
    </button>
  </nav>
  <section>
    <component :is="currentComponent" />
  </section>
  <!-- <IdsButton size="comfortable" variant="secondary" @click="drMode" style="margin-bottom: 10px;">{{ darkText }}</IdsButton> -->
</template>

<script setup lang="ts">

import { shallowRef, ref } from "vue";
import Tag from "./DemoTag.vue";
import Avatar from "./DemoAvatar.vue";
import Button from "./DemoButton.vue";
import Divider from "./DemoDivider.vue";
import IconButton from "./DemoIconButton.vue";
import ActionPanel from "./DemoActionPanel.vue";
import ActionItemLink from "./DemoActionItemLink.vue";
import ActionItemButton from "./DemoActionItemButton.vue";

const currentComponent = shallowRef(Button);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showComponent(data: any) {
  currentComponent.value = data;
}

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
nav {
  top: 0px;
  right: -325px;
  gap: 1rem;
  display: flex;
  padding: 1rem;
  position: fixed;
  flex-direction: column;
  background-color: #334155;
  border-bottom-right-radius: 4px;
  transition: right 0.3s ease;

  &.open {
    right: 0;

    &>.hamburger-menu {
      transform: rotate(-90deg);
    }

    &>.hamburger-menu .bar:nth-child(1) {
      transform: translateY(10px) rotate(135deg);
    }

    &>.hamburger-menu .bar:nth-child(2) {
      opacity: 0;
    }

    &>.hamburger-menu .bar:nth-child(3) {
      transform: translateY(-19px) rotate(-135deg);
    }
  }
}

section {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}

.menu-btn {
  position: absolute;
  left: -60px;
  top: 0px;
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
}

.bar {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: background-color 0.3s ease;
}
</style>
