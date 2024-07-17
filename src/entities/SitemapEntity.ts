export enum SitemapToolErrorsEntity {
    "bad-formatted" = "bad-formatted",
    "not-xml" = "not-xml",
  }
  
  export type SitemapToolTypeEntity = "sitemap-index" | "sitemap"
  
  export type SitemapToolEntity = {
    url: string
    type: SitemapToolTypeEntity
    statusCode: number
    errors: Array<SitemapToolErrorsEntity>
    sitemaps: Array<SitemapToolEntity>
    numberTotalOfPages: number
  }