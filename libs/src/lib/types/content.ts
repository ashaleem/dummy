export interface ArticleMetadata {
  slug: string;
  title: string;
  publicationDate: string;
  section: string;
  description?: string;
  authors?: Author[];
  tags?: string[];
  featuredImage?: string;
  featuredImageAltText?: string;
  featuredImageCaption?: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

export interface Author {
  slug: string;
  name: string;
  bio?: string;
}
