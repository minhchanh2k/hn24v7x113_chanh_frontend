import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import router
import router from "./router";

// Sử dụng router cho ứng dụng
createApp(App).use(router).mount("#app");
