import { CountryCode } from "@/types/commonTypes";

export enum NewsCategory {
  General = "general",
  Business = "business",
  Entertainment = "entertainment",
  Health = "health",
  Science = "science",
  Sports = "sports",
  Technology = "technology",
}

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface NewsState {
  articles: Article[];
  params: {
    country: CountryCode;
    category: NewsCategory;
    query?: string;
  };
}
