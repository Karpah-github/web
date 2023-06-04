import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

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
    meta: { layout: DefaultLayout },
  },
  {
    path: "/products",
    name: "products",
    meta: { layout: DefaultLayout },
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
    meta: { layout: DefaultLayout },
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
    meta: { layout: DefaultLayout },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/Orders/OrdersView.vue"),
  },
  {
    path: "/orders/:id",
    name: "order detail",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "order detail" */ "../views/Orders/OrderDetailView.vue"
      ),
  },
  {
    path: "/store-activities",
    name: "store activity",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "store activities" */ "../views/Activity/ActivityView.vue"
      ),
  },
  {
    path: "/messages",
    name: "messages",
    component: () =>
      import(
        /* webpackChunkName: "store activities" */ "../views/Messages/MessagesView.vue"
      ),
  },
  {
    path: "/settings",
    name: "settings",
    meta: { layout: DefaultLayout },
    component: () =>
      import(
        /* webpackChunkName: "store activities" */ "../views/Settings/SettingsView.vue"
      ),
  },
  {
    path: "/auth/signin",
    meta: { layout: AuthLayout },
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "sigin page" */ "../views/Auth/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
