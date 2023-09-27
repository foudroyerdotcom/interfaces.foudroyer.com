export enum IndexationType {
  NOT_INDEXED = 'not-indexed',
  INDEXED = 'indexed',
  NOT_PROCESSED = 'not-processed',
  INDEXING = 'indexing'
}


export enum IndexationSourceType {
  google = 'google',
  yandex = 'yandex',
  bing = 'bing',
  naver = 'naver' 
}
  
export class PageEntity {
  url: string;
  indexation_state: IndexationType;
  updated_at: Date;
  fk_website_id: string;
  request_indexing_at: Date | null;
  in_sitemap_last_modified_at:  Date | null;
}

export class PageIndexingEntity {
  id: string;
  url: string;
  created_at: Date;
  fk_website_id: string;
  source: IndexationSourceType;
}
