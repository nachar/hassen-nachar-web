import '@/styles/main.scss';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';

import { registerPlugins } from '@/plugins/index.js';

import App from './App.vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
