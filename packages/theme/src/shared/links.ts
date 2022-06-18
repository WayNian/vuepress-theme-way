export interface LinkItem {
  url: string
  avatar: string
  name: string
  description: string
}

export interface LinkGroup {
  name: string
  children: LinkItem[]
}
