import { makeArticleSchema, makePublicationSchema } from "./scripts/schema.js";
import { injectAdInArticle } from "./scripts/ads.js";
import { prettifyDate } from "./scripts/helpers.js";
import type { Ad } from "./types/ads.js";
import type { Article, ArticleMetadata, Author } from "./types/content.js";
import type {
  NavSection,
  PublicationDetails,
  SiteSection,
} from "./types/publication.js";

export {
  makePublicationSchema,
  makeArticleSchema,
  injectAdInArticle,
  prettifyDate,
  type Ad,
  type Article,
  type ArticleMetadata,
  type Author,
  type PublicationDetails,
  type SiteSection,
  type NavSection,
};
