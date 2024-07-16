<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <IdsButton @click="showDialog = true">
      Show dialog
    </IdsButton>
    <IdsDialog v-if="showDialog" ref="dialogRef" size="comfortable" @close="showDialog = false"> 
      <template #title>
        Title
      </template>
      <template #subTitle>
        subTitle
      </template>
      <template #content>
        <div class="dialog-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </template>
      <template #action>
        <div class="dialog-action-btn-container">
          <IdsButton mode="text">
            Label
          </IdsButton>
     
          <div class="dialog-action-btn-container__end">
            <IdsButton mode="outlined" @click="showDialog = false">
              Cancel
            </IdsButton>
            <IdsButton @click="showDialog = false">
              Save
            </IdsButton>
          </div>
        </div>
      </template>
    </IdsDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IdsButton from '../components/IdsButton.vue';
import IdsDialog from '../components/IdsDialog.vue';

const showDialog = ref(false);

</script>

<style scoped lang="scss">
@import "./demo-style.scss";


.dialog-content {
  text-align: left;
  font-size: 14px;
  line-height: 20px; 
}

.dialog-action-btn-container {
  display: flex;
  justify-content: space-between;

  &__end {
    display: flex;
    gap: 8px;
  }
}
</style>