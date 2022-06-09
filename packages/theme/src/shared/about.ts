interface PersonLinks {
  type: string
  link: string
}

export interface PersonInfo {
  name: string
  avatar: string
  description: string
  tags?: string[]
  links?: PersonLinks[]
}
