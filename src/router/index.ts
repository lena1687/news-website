import HomePage from "../components/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CategoryPage from "@/components/pages/CategoryPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: CategoryPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
