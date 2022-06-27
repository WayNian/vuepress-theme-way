export interface WalineOptions {
  'serverURL': string
  'APP-ID': string
  'APP-KEY': string
  'counterUrl': string
  'commentUrl': string
}

export interface CommentItem {
  objectId: string
  comment: string
  link: string
  nick: string
  url: string
  updateAt: string
}
export interface CommentData {
  results: CommentItem[]
}
