<template>
  <div class="demo">
    <h2>ActionItemLink</h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-link`"
      :key="index"
      :size="option.size"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
      :appearance="option.appearance"
      type="link"
      link="#"
    >
      {{ option.appearance + " " + option.size }} link
    </IdsActionItem>

    <!-- Active links -->
    <h2 class="pt-2">
      Active ActionItemLinks
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-link`"
      :key="index"
      :size="option.size"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
      :appearance="option.appearance"
      :is-active="true" 
      type="link"
      link="#"
    >
      {{ option.appearance + " " + option.size }} link
    </IdsActionItem>

    <!-- Disabled links -->
    <h2 class="pt-2">
      Disabled ActionItemlinks
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.appearance}-${option.size}-link`"
      :key="index"
      :disabled="true"
      :size="option.size"
      :appearance="option.appearance"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
    >
      {{ option.appearance + " " + option.size }} link
    </IdsActionItem>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from "@heroicons/vue/24/solid";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsActionItem from "../components/action-item/IdsActionItem.vue";
type LinkOptions = {
  appearance?: "filled" | "text";
  size?: "compact" | "comfortable" | "spacious";
};

const allAppearance: Array<LinkOptions["appearance"]> = ["filled", "text"];
const allSizes: Array<LinkOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];

const allOptions: LinkOptions[] = [];

for (const appearance of allAppearance) {
  for (const size of allSizes) {
    const options: LinkOptions = { appearance, size };
    allOptions.push(options);
  }
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>