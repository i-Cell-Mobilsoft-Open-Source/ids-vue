<template>
  <div class="demo">
    <h2>Action Menu</h2>
    <div>
      <IdsCard>
        <template #cardHeader>
          Some text
        </template>
        <template #cardMedia>
          some media
        </template>
        <template #cardContent>
          Some Content
        </template>
        <template #cardFooter>
          Some footer
        </template>
      </IdsCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import IdsCard from '../components/IdsCard.vue';

</script>

<style scoped>
@import "./demo-style.scss";
</style>