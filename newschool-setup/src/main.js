import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "@/store/store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  store: store,
}).$mount("#app");