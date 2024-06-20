import HomePage from "../components/pages/HomePage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import { NewsCategory } from "@/types/newsTypes";
import { CountryCode } from "@/types/commonTypes";
import { useNewsStore } from "@/stores/newsStore";

interface RouteParams {
  country: CountryCode;
  category?: NewsCategory;
}

const countryPath = `:country(${Object.values(CountryCode).join("|")})`;
const categoryPath = `:category(${Object.values(NewsCategory).join("|")})`;
const defaultPath = `${CountryCode.US}/${NewsCategory.General}`;

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${countryPath}/:category(${NewsCategory.General})`,
    name: "home",
    component: HomePage,
  },
  {
    path: `/${countryPath}/${categoryPath}`,
    name: "category",
    component: CategoryPage,
  },

  {
    path: "/",
    redirect: `/${defaultPath}`,
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
