import type { LinkGroup } from 'vuepress-theme-way'

export const linkGroup: LinkGroup[] = [
  {
    title: 'Test',
    children: [
      {
        url: 'http://www.baidu.com',
        avatar: 'https://www.baidu.com/favicon.ico',
        name: 'baidu',
        description: '百度一下，你就知道',
      },
      {
        url: 'http://www.baidu.com',
        avatar: 'https://www.baidu.com/favicon.ico',
        name: 'baidu11',
        description: '百度一下，你就知道',
      },
    ],
  },
  {
    title: 'Dev',
    children: [
      {
        url: 'http://www.baidu.com',
        avatar: 'https://www.baidu.com/favicon.ico',
        name: 'baidu',
        description: '百度一下，你就知道',
      },
    ],
  },
]
