export enum ErrorEntity {
  SITEMAP_NOT_VALID = "sitemap/update/not-valid",
  SITEMAP_NOT_FOUND = "sitemap/not-found",
  SITEMAP_INVALID = "sitemap/invalid",
  CREDENTIALS_NOT_FOUND = "credentials/not-found",
  WEBSITE_SEARCH_CONSOLE_DOMAIN_IS_NULL = "website/search-console-domain/is-null",
  GOOGLE_CLOUD_API_KEY_BAD_FORMED = "google/cloud/api-key/bad_formed",
  GOOGLE_CLOUD_API_KEY_PERMISSION_DENIED = "google/cloud/api-key/permission-denied",
  GOOGLE_CLOUD_API_ACCOUNT_NOT_FOUND = "google/cloud/api-key/account-not-found",
  GOOGLE_AUTH_CREDENTIALS_EXPIRED = "google/auth/credentials/expired",
  GOOGLE_UNKNOWN_ERROR = "google/unknown-error",
  GOOGLE_AUTH_SCOPE_NOT_FOUND = "google/auth/scope-not-found",
  GOOGLE_AUTH_REFRESH_TOKEN_ERROR = "google/auth/refresh-token-error",
  GOOGLE_INDEXATION_QUOTA_EXCEED = "google/indexation/quota-exceed",
  WEBSITE_NOT_FOUND = "website/not-found",
  UNKNOWN_ERROR = "global/unknown-error",
  USER_NOT_FOUND = "user/not-found",
  USER_NOT_AUTHENTICATED = "user/not-authenticated",
  BUILDER_PLANS_NOT_EXISTS = "builder/plans/not-exists",
  BUILDER_PLANS_EXPIRED = "builder/plans/expired",
  BUILDER_LICENSE_EXPIRED = "builder/license/expired",
  BUILDER_LICENSE_NOT_FOUND = "builder/license/not-found",
  BUILDER_LICENSE_BAD_DOMAIN = "builder/license/bad-domain",
  BUILDER_LICENSE_BAD_THEME = "builder/license/bad-theme",
  BUILDER_UPDATE_DOMAIN_NOT_AUTHORIZED = "builder/websites/update-domain-not-authorized",
  BUILDER_UPDATE_DOMAIN_NOT_URL = "builder/websites/update-domain/no-url",
  ANALYTICS_PREMIUM_RESERVED = "analytics/premium-reserved"
}
