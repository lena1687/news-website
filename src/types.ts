export enum CountryCode {
  NL = "nl",
  GB = "gb",
  US = "us",
}

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


