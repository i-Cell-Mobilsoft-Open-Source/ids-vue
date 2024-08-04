<template>
  <div class="demo">
    <h1>Asd</h1>
    <IdsSegmentedControl v-model="testData" :multi-select="true">
      <IdsSegmentedControlItem value="test1" label="Test 1" />
      <IdsSegmentedControlItem value="test2" label="Test 2" />
    </IdsSegmentedControl>
    <IdsSegmentedControl v-model="testData" :multi-select="true">
      <IdsSegmentedControlItem value="test1" label="Test 1" />
      <IdsSegmentedControlItem value="test2" label="Test 2" />
    </IdsSegmentedControl>
  </div>
</template>
<script setup lang="ts">
 import IdsSegmentedControl from '../components/segmented-control/IdsSegmentedControl.vue';
 import IdsSegmentedControlItem from '../components/segmented-control/IdsSegmentedControlItem.vue';
 import { ref } from "vue";

 const testData = ref(["test1"]);
</script>
<style scoped lang="scss">
  @import "./demo-style.scss";
</style>