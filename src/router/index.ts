import HomePage from "../components/pages/HomePage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import { NewsCategory } from "@/types/newsTypes";
import { CountryCodes } from "@/types/commonTypes";

interface RouteParams {
  country: CountryCodes;
  category?: NewsCategory;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: `/:country(${Object.values(CountryCodes).join("|")})/`,
    name: "home",
    component: HomePage,
    props: (route) => ({ country: route.params.country as CountryCodes }),
  },
  {
    path: `/:country(${Object.values(CountryCodes).join(
      "|"
    )})/category/:category(${Object.values(NewsCategory).join("|")})`,
    name: "category",
    component: CategoryPage,
    props: (route) => ({
      country: route.params.country as CountryCodes,
      category: route.params.category as NewsCategory,
    }),
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: `/${CountryCodes.US}/`,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
