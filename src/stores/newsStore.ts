import { defineStore } from "pinia";
import { fetchArticles } from "@/services/newsService";
import { Article, NewsCategory, NewsState } from "@/types/newsTypes";
import { CountryCodes } from "@/types/commonTypes";

export const useNewsStore = defineStore("news", {
  state: (): NewsState => ({
    articles: [],
    searchQuery: "",
    activeCategory: NewsCategory.General,
    country: CountryCodes.US,
    cache: new Map<string, Article[]>(),
  }),
  actions: {
    async fetchArticles(): Promise<void> {
      const cacheKey = `${this.country}-${this.activeCategory}`;
      if (this.cache.has(cacheKey)) {
        this.articles = this.cache.get(cacheKey)!;
        return;
      }

      try {
        const articles = await fetchArticles(this.country, this.activeCategory);
        this.articles = articles;
        this.cache.set(cacheKey, articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    setActiveCategory(category: NewsCategory): void {
      this.activeCategory = category;
      this.fetchArticles();
    },
    setCountry(country: CountryCodes): void {
      this.country = country;
      this.fetchArticles();
    },
  },
  getters: {
    getArticles: (state) => state.articles,
    getSearchQuery: (state) => state.searchQuery,
    getActiveCategory: (state) => state.activeCategory,
    getCountry: (state) => state.country,
  },
});
