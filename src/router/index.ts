import HomePage from "../components/pages/HomePage.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import { NewsCategory } from "@/types";
import { CountryCode } from "@/types";
import { useNewsStore } from "@/stores/newsStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: `/:country(${Object.values(CountryCode).join("|")})/:category(${NewsCategory.General})`,
    name: "home",
    component: HomePage,
  },
  {
    path: `/:country(${Object.values(CountryCode).join("|")})/:category(${Object.values(NewsCategory).join("|")})`,
    name: "category",
    component: CategoryPage,
  },

  {
    path: "/",
    redirect: `/${CountryCode.US}/${NewsCategory.General}`,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const newsStore = useNewsStore();
  const { country, category } = to.params;
  const query = to.query.search as string;
  newsStore.setParams({
    country: country as CountryCode,
    category: category as NewsCategory,
    query,
  });
});

export default router;
