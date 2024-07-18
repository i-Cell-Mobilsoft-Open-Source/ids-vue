<template>
  <div class="demo">
    <h2>Tags</h2>
    <IdsTag
      v-for="(option, index) in allOptions" 
      :id="`${option.appearance}-${option.variant}-${option.size}-tag`"
      :key="index" 
      :size="option.size" 
      :appearance="option.appearance" 
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon" 
      :interactive="true"
      :link="`#`"
    >
      {{ option.appearance + " " + option.variant + " " + option.size }} Tag
    </IdsTag>
    <!-- if tag is interactive you should add -> :link="`#`" -->
  </div>
</template>

<script setup lang="ts">
import { BoltIcon, BeakerIcon } from "@heroicons/vue/24/solid";
import IdsTag from "../components/IdsTag.vue";

type TagOptions = {
  appearance?: "filled" | "outlined";
  size?: "compact" | "comfortable";
  variant?:
  | "primary"
  | "secondary"
  | "brand"
  | "error"
  | "success"
  | "warning"
  | "light"
  | "dark";
};

const allAppearance: Array<TagOptions["appearance"]> = ["filled", "outlined"];
const allSizes: Array<TagOptions["size"]> = ["compact", "comfortable"];
const allVariants: Array<TagOptions["variant"]> = ["primary", "secondary", "brand", "error", "success", "warning", "light", "dark"];

const allOptions: TagOptions[] = [];

for (const appearance of allAppearance) {
  for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: TagOptions = { appearance, size, variant };
      allOptions.push(options);
    }
  }
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>
