import axios from "axios";
import type { Article, NewsCategory } from "@/types";
import { CountryCode } from "@/types";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = async (
  country: CountryCode,
  category: NewsCategory,
  query?: string
): Promise<Article[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        category,
        q: query,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
