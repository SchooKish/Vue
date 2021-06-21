import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Paginate from "vuejs-paginate";
import router from "./router";
// import modal from "./plugin/ModalWindow/index.js";
import context from "./plugin/ContextMenu/index";
import vuetify from "./plugin/Vuetify/index";

Vue.component("Paginate", Paginate);

Vue.config.productionTip = false;
// Vue.use(modal);
Vue.use(context);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
