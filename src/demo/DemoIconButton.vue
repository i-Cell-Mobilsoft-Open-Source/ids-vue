<template>
  <div class="demo">
    <h2>Icon Buttons</h2>
    <IdsIconButton
      v-for="(option, index) in allOptions"
      :id="`${option.mode}-${option.variant}-${option.size}-icon-button`" 
      :key="index"
      :icon="BeakerIcon"
      :size="option.size"
      :mode="option.mode" 
      :variant="option.variant"
    />

    <!-- Disabled Buttons -->
    <h2 class="pt-2">
      Disabled Buttons
    </h2>
    <IdsIconButton
      v-for="(option, index) in disabledOptions"
      :id="`${option.mode}-${option.variant}-${option.size}-disabled-icon-button`" 
      :key="index"
      :icon="BeakerIcon"
      :size="option.size"
      :is-disabled="true"
      :mode="option.mode" 
      :variant="option.variant"
    />
  </div>
</template>
 
 <script setup lang="ts">
  import { BeakerIcon } from '@heroicons/vue/24/solid'
 import IdsIconButton  from '../components/IdsIconButton.vue';
     type IconButtonOptions = {
   mode?: "filled" | "outlined" | "standard",
   size?: "compact" | "comfortable" | "spacious",
   variant?: "primary" | "secondary" | "brand" | "error" | "success" | "warning" | "light" | "dark" | "surface",
   };
   type ModifiedButtonOptions = Omit<IconButtonOptions, 'variant'> & { variant: AllowedVariants };
  type AllowedVariants = "primary" | "secondary" | "brand" | "error" | "success" | "warning" | "light" | "dark" | "surface" | undefined;
 
   const allModes: Array<IconButtonOptions["mode"]> = ["filled", "outlined", "standard"];
   const allSizes: Array<IconButtonOptions["size"]> = ["compact", "comfortable", "spacious"];
   const allVariants: Array<IconButtonOptions["variant"]> = ["primary", "secondary", "brand", "error", "success", "warning", "light", "dark", "surface"];
 
 const allOptions: IconButtonOptions[] = [];
 
 for (const mode of allModes) {
   for (const size of allSizes) {
     for (const variant of allVariants) {
       const options: IconButtonOptions = { mode, size, variant };
       allOptions.push(options);
     }
   }
 }

 const colorsToKeep: AllowedVariants[] = allVariants.filter((color) => !["error", "success", "warning"].includes(color as string));
const disabledOptions: ModifiedButtonOptions[] = [];

for (const mode of allModes) {
  for (const size of allSizes) {
    for (const variant of colorsToKeep) {
      const options: ModifiedButtonOptions = { mode, size, variant };
      disabledOptions.push(options);
    }
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
 </style>