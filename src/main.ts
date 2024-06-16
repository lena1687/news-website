import { createApp } from 'vue';
import App from './App.vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import router from './router';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PiniaVuePlugin);

app.mount('#app');
