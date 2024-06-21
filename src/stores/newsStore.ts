import { defineStore } from "pinia";
import { fetchArticles } from "@/services/newsService";
import { type Article, NewsCategory } from "@/types";
import picNotFound from "@/assets/images/pic-not-found.jpg"
import { CountryCode} from "@/types";

export interface NewsState {
  articles: Article[];
  params: {
    country: CountryCode;
    category: NewsCategory;
    query?: string;
  };
}

export const useNewsStore = defineStore("news", {
  state: (): NewsState => ({
    articles: [],
    params: { country: CountryCode.US, category: NewsCategory.General },
  }),
  actions: {
    async fetchArticles({
      country,
      category,
      query,
    }: NewsState["params"]): Promise<void> {
      try {
        const articles = await fetchArticles(country, category, query);
        this.articles = filterAndFormatArticles(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    setParams(params: NewsState["params"]): void {
      this.params = params;
    },
  },
  getters: {
    getArticles: (state) => state.articles,
    getParams: (state) => state.params,
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
        article.urlToImage || picNotFound,
    }));
}
