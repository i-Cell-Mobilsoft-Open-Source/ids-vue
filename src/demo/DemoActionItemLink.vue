<template>
  <div class="demo">
    <h2>ActionItemLink</h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-link`"
      :key="index"
      :size="option.size"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
      :mode="option.mode"
      type="link"
      href="asdfasdfa"
    >
      {{ option.mode + " " + option.size }} link
    </IdsActionItem>

    <!-- Active links -->
    <h2 class="pt-2">
      Active ActionItemLinks
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-link`"
      :key="index"
      :size="option.size"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
      :mode="option.mode"
      :is-active="true" 
      type="link"
    >
      {{ option.mode + " " + option.size }} link
    </IdsActionItem>

    <!-- Disabled links -->
    <h2 class="pt-2">
      Disabled ActionItemlinks
    </h2>
    <IdsActionItem
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.size}-link`"
      :key="index"
      :is-disabled="true"
      :size="option.size"
      :mode="option.mode"
      :leading-icon="ClockIcon"
      :trailing-icon="ChevronRightIcon"
    >
      {{ option.mode + " " + option.size }} link
    </IdsActionItem>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from "@heroicons/vue/24/solid";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import IdsActionItem from "../components/IdsActionItem.vue";
type LinkOptions = {
  mode?: "filled" | "text";
  size?: "compact" | "comfortable" | "spacious";
};

const allModes: Array<LinkOptions["mode"]> = ["filled", "text"];
const allSizes: Array<LinkOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];

const allOptions: LinkOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    const options: LinkOptions = { mode, size };
    allOptions.push(options);
  }
}
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
