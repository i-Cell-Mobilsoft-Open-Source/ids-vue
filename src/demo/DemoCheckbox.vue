
<template>
  <div class="demo">
    <h2>Checkboxes</h2>
    <h3>base</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
    />
    <h3>Disabled</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index + '-dis'" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :disabled="true"
    />
    <h3>indeterminate</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index + '-id'" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :indeterminate="true"
    />
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index + '-idn'" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :disabled="true"
      :indeterminate="true"
    />
    <h3>error</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index + '-error'" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :invalid="true"
    />
    <IdsCheckbox
      v-for="(option, index) in allOptions"
      :id="'ids-checkbox-' + index + '-iererere'" 
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :invalid="true"
      :indeterminate="true"
    />

    <div class="bg-black demo p-4">
      <h2 class="text-white">
        light mode
      </h2>
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + 'li'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :indeterminate="false"
      />
      <h3>Disabled</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + '-dilis'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :disabled="true"
      />
      <h3>indeterminate</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + '-idli'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :indeterminate="true"
      />
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + '-idnli'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :disabled="true"
        :indeterminate="true"
      />
      <h3>error</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + '-errorli'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :invalid="true"
      />
      <IdsCheckbox
        v-for="(option, index) in allSizes"
        :id="'ids-checkbox-' + index + '-iererereli'" 
        :key="index"
        :size="option"
        :variant="'light'"
        :invalid="true"
        :indeterminate="true"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
 import IdsCheckbox from "../components/IdsCheckbox.vue";
 type CheckboxOptions = {
  size?: "compact" | "comfortable" | "spacious" | "dense";
  variant?:
  | "dark"
  | "surface";
};

const allSizes: Array<CheckboxOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
  "dense"
];
const allVariants: Array<CheckboxOptions["variant"]> = [
  "dark",
  "surface"
];

const allOptions: CheckboxOptions[] = [];

 for (const size of allSizes) {
    for (const variant of allVariants) {
      const options: CheckboxOptions = { size, variant };
      allOptions.push(options);
    }
 }
</script>
<style scoped lang="scss">
    @import "./demo-style.scss";
</style>