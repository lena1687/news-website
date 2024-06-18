import { CountryCodes } from "@/types/commonTypes";

export enum NewsCategory {
  General = "General",
  Business = "Business",
  Entertainment = "Entertainment",
  Health = "Health",
  Science = "Science",
  Sports = "Sports",
  Technology = "Technology",
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
