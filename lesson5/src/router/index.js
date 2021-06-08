import Vue from "vue";
import Router from "vue-router";

import PageDashboard from "../page/PageDashboard";
import PageAbout from "../page/PageAbout";
import Page404 from "../page/Page404";
import Form from "../components/Form";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: PageDashboard,
    },
    {
      path: "/dashboard/:category",
      name: "form",
      component: Form,
    },
    // {
    //   path: "/dashboard/:page",
    //   name: "dashboard",
    //   component: PageDashboard,
    // },
    {
      path: "/about",
      name: "about",
      component: PageAbout,
    },
    {
      path: "*",
      name: "NotFound",
      component: Page404,
    },
  ],
});
