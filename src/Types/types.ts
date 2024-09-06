export interface Article {
  id: string;
  description: string | undefined;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashResponse {
  results: Article[];
  total: number;
  total_pages: number;
}
