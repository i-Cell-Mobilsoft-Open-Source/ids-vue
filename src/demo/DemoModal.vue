<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <!-- <IdsModal :is-open="isOpen" />
    
    <div class="fixed inset-0 flex items-center justify-center">
      <idsButton
        class=""
        @click="toggleModal"
      >
        Open dialog
        {{ isOpen }}
      </idsButton>
    </div>
  </div> -->

    <div>
      <div class="container">
        <IdsButton @click="showModal = true">
          Show Modal
        </IdsButton>
        <transition name="modal">
          <div v-if="showModal">
            <IdsModal :is-open="showModal" @close="showModal = false" />
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

const showModal = ref(false);

</script>
