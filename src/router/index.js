import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    meta: {
      requireAuth: true
    },
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          requireAuth: true
        },

      },
      {
        path: "/mall",
        name: "mall",
        component: () => import("@/views/mall/index.vue"), meta: {
          requireAuth: true
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/index.vue"), meta: {
          requireAuth: true
        },
      },
      {
        path: "/page1",
        name: "page1",
        component: () => import("@/views/other/page1.vue"), meta: {
          requireAuth: true
        },
      }
      ,
      {
        path: "/page2",
        name: "page2",
        component: () => import("@/views/other/page2.vue"), meta: {
          requireAuth: true
        },
      }

    ]
  },
  {
    path: '/login',
    name: "login",
    component: () => import("@/views/login/index.vue"),
  }

];

const router = new VueRouter({
  mode: "history",
  routes,
});
//登录拦截
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {//requireAuth若为true则该路由需要判断是否登录

    if (localStorage.userName) {//判断当前的userName数据是否存在

      next();

    }
    else {
      next({//返回登录页面
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

export default router;
