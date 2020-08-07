import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  render: (h) => h(App),
}).$mount("#app");
