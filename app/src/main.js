import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/font-awesome-4.7.0/scss/font-awesome.scss";

import "@/plugins/element-ui.js";
import "@/plugins/vue-codemirror.js";
import "@/plugins/vue-clipboard2.js";

Vue.config.productionTip = false;

import "@/assets/css/global.scss";
// import "@/assets/css/base.scss";
// import "@/assets/css/reset.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
