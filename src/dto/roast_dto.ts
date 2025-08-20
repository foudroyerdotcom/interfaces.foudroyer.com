export const roast_dtos_endpoints = {
  roast: "/roast",
  fetch_websites: "/roast/fetch_websites",
} as const;

export type roast_dtos = {
  roast: {
    url: typeof roast_dtos_endpoints.roast;
    input: {
      id: string;
    };
    output: {
      id: string;
      fk_user_id: string;
      google_search_console_domain: string;
      favicon: string | null;
      robots: Array<unknown>;
      server: Array<unknown>;
      sitemap: Array<unknown>;
      synced_at: Date | null;
      created_at: Date;
      updated_at: Date;
    };
  };
  fetch_websites: {
    url: typeof roast_dtos_endpoints.fetch_websites;
    input: {};
    output: {
      id: string;
      fk_user_id: string;
      google_search_console_domain: string;
      favicon: string | null;
      robots: Array<unknown>;
      server: Array<unknown>;
      sitemap: Array<unknown>;
      synced_at: Date | null;
      created_at: Date;
      updated_at: Date;
    }[];
  };
};
