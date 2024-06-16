import { createApp } from 'vue';
import App from './App.vue';
import { createPinia, PiniaVuePlugin } from 'pinia';
import router from './router';
import FontAwesomeIcon from './plugins/fontAwesome';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PiniaVuePlugin);

app.mount('#app');
