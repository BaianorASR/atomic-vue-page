import "@/assets/css/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

// import PhosphorVue from "phosphor-vue";
import App from "./App.vue";

const app = createApp(App);
// app.use(PhosphorVue);

app.use(createPinia());

app.mount("#app");
