import Vue from "vue";
import VueRouter from "vue-router";
import Detail from "../views/Detail";
import Main from "../views/Main";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Main,
    },
    {
      name: "detail",
      path: "/detail",
      component: Detail,
    },
  ],
});

export default router;
