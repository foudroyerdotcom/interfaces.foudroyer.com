export enum IndexationType {
  NOT_INDEXED = "not-indexed",
  INDEXED = "indexed",
  NOT_PROCESSED = "not-processed",
  INDEXING = "indexing",
  SUBMITTED = "submitted",
  "first-check-done-but-not-indexed" = "first-check-done-but-not-indexed",
  "error-unknown" = "error-unknown",

  "indexation/error/google/inspect/permission-denied" = "indexation/error/google/inspect/permission-denied",
  "indexation/error/google/cloud/api-key/permission-denied" = "indexation/error/google/cloud/api-key/permission-denied",
  "indexation/error/google/auth/scope-not-found" = "indexation/error/google/auth/scope-not-found",
  "indexation/error/google/cloud/api-key/account-not-found" = "indexation/error/google/cloud/api-key/account-not-found",
  "indexation/error/credentials/not-found" = "indexation/error/credentials/not-found",
 
  "server-error-5xx" = "server-error-5xx",
  "url-unknown" = "url-unknown",
  "redirect-error" = "redirect-error",
  "url-blocked-by-robots.txt" = "url-blocked-by-robots.txt",
  "url-marked-noindex" = "url-marked-noindex",
  "soft-404" = "soft-404",
  "blocked-due-to-unauthorized-request-401" = "blocked-due-to-unauthorized-request-401",
  "not-found-404" = "not-found-404",
  "blocked-due-to-access-forbidden-403" = "blocked-due-to-access-forbidden-403",
  "url-blocked-due-to-other-4xx-issue" = "url-blocked-due-to-other-4xx-issue",
  "blocked-by-page-removal-tool" = "blocked-by-page-removal-tool",
  "crawled-currently-not-indexed" = "crawled-currently-not-indexed",
  "discovered-currently-not-indexed" = "discovered-currently-not-indexed",
  "alternate-page-with-proper-canonical-tag" = "alternate-page-with-proper-canonical-tag",
  "duplicate-without-user-selected-canonical" = "duplicate-without-user-selected-canonical",
  "duplicate-google-chose-different-canonical-than-user" = "duplicate-google-chose-different-canonical-than-user",
  "page-with-redirect" = "page-with-redirect",
  "blocked-other-4xx-issue" = "blocked-other-4xx-issue",
  "blocked-401" = "blocked-401"
}

export enum IndexationSourceType {
  google = "google",
  yandex = "yandex",
  bing = "bing",
  naver = "naver",
}

export class PageEntity {
  url: string;
  indexation_state: IndexationType;
  updated_at: Date;
  fk_website_id: string;
  submitted_at: Date | null;
  request_indexing_at: Date | null;
  in_sitemap_last_modified_at: Date | null;
  inspection_google_page: string | null;
}

export class PageAddedManuallyEntity {
  url: string;
  created_at: Date;
  fk_website_id: string;
}

export class PageIndexingEntity {
  id: string;
  url: string;
  created_at: Date;
  fk_website_id: string;
  source: IndexationSourceType;
}
