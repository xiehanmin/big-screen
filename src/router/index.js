import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/data-center",
    component: () => import("@/layout/Index.vue"),
    children: [
      {
        path: "/data-center",
        component: () => import("../views/data-center/Index.vue"),
        meta: {
          title: "数据中心",
        },
      },
      {
        path: "/environmental-monitoring",
        component: () => import("../views/environmental-monitoring/Index.vue"),
        meta: {
          title: "环境监测看板",
        },
      },
      {
        path: "/energy-consumption",
        component: () => import("../views/energy-consumption/Index.vue"),
        meta: {
          title: "能耗看板",
        },
      },
    ],
  },
];
const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;
