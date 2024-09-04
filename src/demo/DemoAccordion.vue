<template>
  <div class="demo accordion-container">
    <h2>Accordion</h2>
    <IdsAccordion :is-expanded="true">
      <template #accordion-title>
        Accordion item 1
      </template>
      <template #default>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book....
      </template>
    </IdsAccordion>
    <IdsAccordion>
      <template #accordion-title>
        Accordion item 2
      </template>
      <template #default>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </template>
    </IdsAccordion>
    <IdsAccordion>
      <template #accordion-title>
        Accordion item 3
      </template>
      <template #default>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </template>
    </IdsAccordion>
  </div>
</template>

<script setup lang="ts">
import IdsAccordion from "../components/IdsAccordion.vue";
</script>

<style scoped>
@import "./demo-style.scss";

.accordion-container {
  width: 100%;
}
</style>