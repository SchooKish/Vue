import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Paginate from "vuejs-paginate";
import router from "./router";
import modal from "./plugin/ModalWindow/index.js";

Vue.component("Paginate", Paginate);

Vue.config.productionTip = false;
Vue.use(modal);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
