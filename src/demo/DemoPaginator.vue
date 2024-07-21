<template>
  <div class="demo">
    Paginator
    <IdsPaginator />
    <button @click="changeLang()">
      change
    </button>
  </div>
</template>
<script setup lang="ts">
import IdsPaginator from "../components/paginator/IdsPaginator.vue";
import { useIdsVue } from "../core/config/IdsVue.ts";
import { onMounted } from 'vue';
let lang: 'en' | 'hu' = 'en';
const idsConfig = useIdsVue()

onMounted(() => {
  if (lang === 'en')
    idsConfig.config.locale.firstPageLabel = "this is english"
  else
    idsConfig.config.locale.firstPageLabel = "ez magyar"
})

function changeLang() {
  if (lang === 'en') {
    lang = 'hu';
    idsConfig.config.locale.firstPageLabel = "ez magyar";
  }
  else {
    lang = 'en'
    idsConfig.config.locale.firstPageLabel = "this is english";
  }
}
</script>
<style scoped lang="scss">
@import "./demo-style.scss";
</style>