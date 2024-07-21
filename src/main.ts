import { createApp } from 'vue'
import App from './App.vue'
import router from './demo/router';
// TODO change to dir version
import IdsVue from './core/config/IdsVue';
import './style.scss'

createApp(App).use(IdsVue).use(router).mount('#app');
