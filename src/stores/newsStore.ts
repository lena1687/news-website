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
        this.articles = filterAndFormatArticles(articles);
        this.cache.set(cacheKey, articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    setActiveCategory(category: NewsCategory): void {
      if (this.activeCategory !== category) {
        this.activeCategory = category;
        this.fetchArticles();
      }
    },
    setCountry(country: CountryCodes): void {
      if (this.country !== country) {
        this.country = country;
        this.fetchArticles();
      }
    },
    initializeStore(country: CountryCodes, category: NewsCategory) {
      this.country = country;
      this.activeCategory = category;
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

function filterAndFormatArticles(articles: Article[]): Article[] {
  const removedMarker = "[Removed]";
  return articles
    .filter(
      (article: Article) =>
        article.title !== removedMarker && article.description !== removedMarker
    )
    .map((article: Article) => ({
      ...article,
      urlToImage:
        article.urlToImage || require("@/assets/images/pic-not-found.jpg"),
    }));
}
