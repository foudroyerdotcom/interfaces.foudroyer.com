export class WebsiteEntity {
  id: string;
  search_console_domain: string | null;
  yandex_domain: string | null;
  bing_domain: string | null;
  image: string;
  sitemap: string | null;
  already_activated: boolean;
  index_now_key: string | null;
  index_now_installed: boolean;
  is_premium: boolean;
  is_analytics_activated: boolean;
  sitemap_updated_at: Date;
  deleted_at: Date | null;
  is_public: boolean;
}
