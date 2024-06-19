import axios from "axios";
import { Article, NewsCategory } from "@/types/newsTypes";
import { VITE_NEWS_API_KEY } from "../../environments";
import { CountryCode } from "@/types/commonTypes";

const API_KEY = VITE_NEWS_API_KEY;
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
