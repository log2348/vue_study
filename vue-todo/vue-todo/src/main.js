import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router/router.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

Vue.use(BootstrapVue);
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios

Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  render: (h) => h(App),
}).$mount("#app");
