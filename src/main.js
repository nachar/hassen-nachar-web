import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';

import vuetify from '@/plugins/vuetify';

import App from './App.vue';

createApp(App).use(vuetify).mount('#app');
