type LogsBaseEntity = {
  id: string
  fk_website_id: string

  title: string
  description: string

  log_date: Date

  created_at: Date
  updated_at: Date

  clicks: number | null
  impressions: number | null
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
