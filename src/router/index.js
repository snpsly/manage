import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),

      },
      {
        path: "/mall",
        name: "mall",
        component: () => import("@/views/mall/index.vue"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/index.vue"),
      },
      {
        path: "/page1",
        name: "page1",
        component: () => import("@/views/other/page1.vue"),
      }
      ,
      {
        path: "/page2",
        name: "page2",
        component: () => import("@/views/other/page2.vue"),
      }

    ]
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
