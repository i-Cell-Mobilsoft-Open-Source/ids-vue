<!-- eslint-disable vue/html-self-closing -->
<template>
  <nav :class="{ 'open': isMenuVisible }">
    <div data-cy="hamburger-menu" class="menu-btn hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <router-link data-cy="router-link-component" to="/components/button" @click="isMenuVisible = false">
      Button Component
    </router-link>
    <router-link data-cy="icon-router-link-component" to="/components/icon-button" @click="isMenuVisible = false">
      Icon Button Component
    </router-link>
    <router-link data-cy="tags-component" to="/components/tags" @click="isMenuVisible = false">
      Tags Component
    </router-link>
    <router-link data-cy="divider-component" to="/components/divider" @click="isMenuVisible = false">
      Divider Component
    </router-link>
    <router-link data-cy="avatar-component" to="/components/avatar" @click="isMenuVisible = false">
      Avatar Component
    </router-link>
    <router-link
      data-cy="action-item-router-link-component" to="/components/action-item-button"
      @click="isMenuVisible = false"
    >
      ActionItem Button Component
    </router-link>
    <router-link data-cy="action-item-link-component" to="/components/action-item-link" @click="isMenuVisible = false">
      ActionItem Link Component
    </router-link>
    <router-link data-cy="action-panel-component" to="/components/action-panel" @click="isMenuVisible = false">
      ActionPanel Component
    </router-link>
    <router-link data-cy="action-menu-component" to="/components/action-menu" @click="isMenuVisible = false">
      ActionMenu Component
    </router-link>
    <router-link data-cy="dialog-component" to="/components/dialog" @click="isMenuVisible = false">
      Dialog Component
    </router-link>
    <!-- <router-link data-cy="card-component" to="/components/card" @click="isMenuVisible = false">
      Card Component
    </router-link> -->
    <router-link data-cy="accordion-component" to="/components/accordion" @click="isMenuVisible = false">
      Accordion Component
    </router-link>
    <router-link data-cy="checkbox-component" to="/components/checkbox" @click="isMenuVisible = false">
      Checkbox Component
    </router-link>
    <router-link data-cy="paginator-component" to="/components/paginator" @click="isMenuVisible = false">
      Paginator Component
    </router-link>
    <router-link data-cy="segmented-control-component" to="/components/segmented-control" @click="isMenuVisible = false">
      Segmented Control
    </router-link>
    <router-link data-cy="segmented-control-component-toggle" to="/components/segmented-control-toggle" @click="isMenuVisible = false">
      Segmented Control Toggle
    </router-link>
    <router-link data-cy="radio-component-toggle" to="/components/radio" @click="isMenuVisible = false">
      Radio Component
    </router-link>
  </nav>
  <section>
    <router-view />
  </section>
  <!-- <Idsrouter-link size="comfortable" variant="secondary" @click="drMode" style="margin-bottom: 10px;">{{ darkText }}</Idsrouter-link> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

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
  z-index: 1;

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
  left: -80px;
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
