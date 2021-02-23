import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./../components/SectionBanner";
import News from "./../components/SectionNews";
import Notice from "./../components/SectionNewsNotice";
import Ranking from "./../components/Ranking";
import Error404 from "./../components/Error404";

Vue.use(VueRouter);

export default new VueRouter({
  linkExactActiveClass: "link-active",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/news",
      alias: "/notices",
      component: News,
      name: "news",
    },
    {
      path: "/news/:idnotice",
      alias: "/noticia",
      name: "notice",
      component: Notice,
      // Local guards
      beforeEnter: (to, from, next) => {
        console.log(to, from);
        next();
      },
    },
    {
      path: "/ranking",
      alias: "/classificacao",
      name: "ranking",
      component: Ranking,
    },
    {
      path: "/admin",
      redirect: "/",
    },
    {
      path: "*",
      component: Error404,
    },
  ],
});
