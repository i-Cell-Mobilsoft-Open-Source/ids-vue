<template>
  <div class="demo">
     <h2>Icon Buttons</h2>
     <IdsIconButton v-for="(option, index) in allOptions" :key="index" 
     :size="option.size" :variant="option.variant" :mode="option.mode" :icon="BeakerIcon" 
     :id="`${option.mode}-${option.variant}-${option.size}-icon-button`">
     </IdsIconButton>
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