import { CountryCodes } from "@/types/commonTypes";

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
}

export interface NewsState {
  articles: Article[];
  searchQuery: string;
  activeCategory: NewsCategory;
  country: CountryCodes;
  cache: Map<string, Article[]>;
}
