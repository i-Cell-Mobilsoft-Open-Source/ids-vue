<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <div>
      <div class="container">
        <IdsButton @click="showModal = true">
          Show Modal
        </IdsButton>
        <transition name="modal">
          <div v-if="showModal">
            <IdsModal :is-open="showModal" :is-closable="true" @close="showModal = false">
              <template #title>
                Title
              </template>
              <template #subTitle>
                subTitle
              </template>
              <template #content>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book.
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
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IdsButton from '../components/IdsButton.vue';
import IdsModal from '../components/IdsModal.vue';

const showModal = ref(true);

</script>

<style scoped>
@import "./demo-style.scss";
</style>