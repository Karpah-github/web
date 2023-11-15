import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import "./assets/main.scss";
import CKEditor from "@ckeditor/ckeditor5-vue";

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(CKEditor).mount("#app");
