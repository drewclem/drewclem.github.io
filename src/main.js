import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faTwitter);
Vue.component(FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
