import "@/assets/css/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import AppVue from "./App.vue";

const app = createApp(AppVue);

app.use(createPinia());

app.mount("#app");
