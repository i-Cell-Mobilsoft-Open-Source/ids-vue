<template>
  <div class="demo">
    <h2>Tags</h2>
    <IdsTag
      v-for="(option, index) in allOptions" 
      :id="`${option.apperance}-${option.variant}-${option.size}-tag`"
      :key="index" 
      :size="option.size" 
      :apperance="option.apperance" 
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon" 
    >
      {{ option.apperance + " " + option.variant + " " + option.size }} Tag
    </IdsTag>
    <!-- if tag is interactive you should add -> :link="`#`" -->
    <h2>Disabled Tags</h2>
    <IdsTag
      v-for="(option, index) in disabledOptions" 
      :id="`${option.apperance}-${option.variant}-${option.size}-disabled-tag`"
      :key="index" 
      :size="option.size" 
      :apperance="option.apperance" 
      :is-disabled="true"
      :leading-icon="BoltIcon"
      :variant="option.variant"
      :trailing-icon="BeakerIcon"
    >
      {{ option.apperance + " " + option.variant + " " + option.size }} Tag
    </IdsTag>
  </div>
</template>

<script setup lang="ts">
import { BoltIcon, BeakerIcon } from "@heroicons/vue/24/solid";
import IdsTag from "../components/IdsTag.vue";

type TagOptions = {
  apperance?: "filled" | "outlined";
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

type ModifiedTagOptions = Omit<TagOptions, 'variant'> & { variant: AllowedVariants };
type AllowedVariants = "primary" | "secondary" | "brand" | "error" | "success" | "warning" | "light" | "dark" | undefined;

const allAppearance: Array<TagOptions["apperance"]> = ["filled", "outlined"];
const allSizes: Array<TagOptions["size"]> = ["compact", "comfortable"];
const allVariants: Array<TagOptions["variant"]> = ["primary", "secondary", "brand", "error", "success", "warning", "light", "dark"];

const allOptions: TagOptions[] = [];

for (const apperance of allAppearance) {
  for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: TagOptions = { apperance, size, variant };
      allOptions.push(options);
    }
  }
}

const colorsToKeep: AllowedVariants[] = allVariants.filter((color) => !["error", "success", "warning"].includes(color as string));
const disabledOptions: ModifiedTagOptions[] = [];

for (const apperance of allAppearance) {
  for (const size of allSizes) {
    for (const variant of colorsToKeep) {
      const options: ModifiedTagOptions = { apperance, size, variant };
      disabledOptions.push(options);
    }
  }
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>
