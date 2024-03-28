<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <IdsButton @click="showModal = true">
      Show Modal
    </IdsButton>

    <IdsModal :show="showModal" :is-closable="true" size="comfortable" @close="showModal = false" :back-drop="true">
      <template #title>
        Title
      </template>
      <template #subTitle>
        subTitle
      </template>
      <template #content>
        <div class="text-left text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </template>
      <template #label>
        <IdsButton mode="text">
          Label
        </IdsButton>
      </template>
      <template #action>
        <IdsButton mode="outlined" @click="showModal = false">
          Cancel
        </IdsButton>
        <IdsButton @click="showModal = false">
          Save
        </IdsButton>
      </template>
    </IdsModal>
  </div>

</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import IdsButton from '../components/IdsButton.vue';
import IdsModal from '../components/IdsModal.vue';

const showModal = ref(false);
// watchEffect(() => {
//   console.log(showModal.value);

// })
</script>

<style scoped>
@import "./demo-style.scss";
</style>