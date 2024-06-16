import HomePage from "../components/pages/HomePage.vue";
import ArticlePage from "../components/pages/ArticlePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import CategoryPage from "@/components/pages/CategoryPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/category/:id",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/article/:id",
    name: "ArticlePage",
    component: ArticlePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
