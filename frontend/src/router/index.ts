import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/overview",
    name: "overview",
    component: () => import("../views/OverviewScreen.vue"),
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Products/ProductsView.vue"
      ),
  },
  {
    path: "/add-product",
    name: "add-products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "add product" */ "../views/Products/AddProduct.vue"
      ),
  },
  {
    path: "/orders",
    name: "orders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders/OrdersView.vue"),
  },
  {
    path: "/orders/:id",
    name: "order detail",
    component: () =>
      import(
        /* webpackChunkName: "order detail" */ "../views/Orders/OrderDetailView.vue"
      ),
  },
  {
    path: "/store-activities",
    name: "store activity",
    component: () =>
      import(
        /* webpackChunkName: "order detail" */ "../views/Activity/ActivityView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
