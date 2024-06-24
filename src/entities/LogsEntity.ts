type LogsBaseEntity = {
  id: string
  fk_website_id: string

  title: string
  description: string

  log_date: Date

  created_at: Date
  updated_at: Date

  clicks: number | null
  previous_clicks: number | null
  
  impressions: number | null
  previous_impressions: number | null
  
  position: number | null
  previous_position: number | null

  synced_at: Date
}

type LogQueryEntity = {
  type: "query"
  query: string
  page: null
}

type LogGlobalEntity = {
  type: "global"
  query: null
  page: null
}

type LogPageEntity = {
  type: "page"
  query: null
  page: string
}

export type LogsEntity = LogsBaseEntity &
  (LogGlobalEntity | LogPageEntity | LogQueryEntity)
