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
  isPremium: boolean;
}
