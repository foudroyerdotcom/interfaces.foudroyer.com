export const keywords_dtos_endpoints = {
  create_keywords: "/keywords/create_keywords",
  delete_keywords: "/keywords/delete_keywords",
  get_keywords: "/keywords/get_keywords",
  get_keyword_with_position: "/keywords/get_keyword_with_position",
  create_website: "/keywords/create_website",
  delete_website: "/keywords/delete_website",
  get_websites: "/keywords/get_websites",
  get_gsc_websites: "/keywords/get_gsc_websites",
} as const;

export type keywords_dtos = {
  create_keywords: {
    url: typeof keywords_dtos_endpoints.create_keywords;
    input: {
      website_id: string;
      keywords: string[];
    };
    output: {};
  };
  detele_keywords: {
    url: typeof keywords_dtos_endpoints.delete_keywords;
    input: {
      website_id: string;
      keyword_ids: string[];
    };
    output: {};
  };
  get_keywords: {
    url: typeof keywords_dtos_endpoints.get_keywords;
    input: {
      website_id: string;
    };
    output: {
      keywords: {
        id: string;
        keyword: string;
      }[];
    };
  };
  get_keyword_with_position: {
    url: typeof keywords_dtos_endpoints.get_keyword_with_position;
    input: {
      website_id: string;
      filter?: {
        from_date?: string;
        to_date?: string;
        country?: string;
        device?: string;
        source?: string;
      };
    };
    output: {
      id: string;
      keyword: string;
      position: number;
      before_position: number;
      impressions: number;
      before_impressions: number;
      clicks: number;
      before_clicks: number;
      click_through_rate: number;
      before_click_through_rate: number;
    }[];
  };
  create_website: {
    url: typeof keywords_dtos_endpoints.create_website;
    input: {
      google_search_console_property: string;
    };
    output: {
      id: string;
      google_search_console_property: string;
    };
  };
  delete_website: {
    url: typeof keywords_dtos_endpoints.delete_website;
    input: {
      website_id: string;
    };
    output: {};
  };
  get_websites: {
    url: typeof keywords_dtos_endpoints.get_websites;
    input: {};
    output: {
      websites: {
        id: string;
        google_search_console_property: string;
      }[];
    };
  };
  get_gsc_websites: {
    url: typeof keywords_dtos_endpoints.get_gsc_websites;
    input: {};
    output: {
      websites: {
        google_search_console_property: string;
      }[];
    };
  };
};
