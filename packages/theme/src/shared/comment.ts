export interface WalineOptions {
  serverURL: string
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
