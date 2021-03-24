export class ResponseTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export class Article {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

class Source {
  id?: string;
  name: string;
}
