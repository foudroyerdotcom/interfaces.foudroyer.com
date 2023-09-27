export type IndexationSettingsEntity = {
  pfk_website_id: string;
  indexation_auto_activated: boolean;
  sources: Array<"google" | "yandex" | "naver" | "bing">
}

export enum IndexationQueueStatus {
    queue = "queue",
    done = "done"
}

export type IndexationQueueEntity = {
  id: string;
  fk_website_id: string;
  page: string;
  status: IndexationQueueStatus;
  sources: Array<"google" | "yandex" | "naver" | "bing">
  created_at: Date;
  indexed_at: Date | null;
  page_updated_at: Date;
  is_indexed: boolean;
  inspection_google_page: string | null;
  checked_indexation_state_at: Date | null;
}
