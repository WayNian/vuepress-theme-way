import type { ThemeLocaleDataRef } from '@vuepress/plugin-theme-data/lib/client'
import axios from 'axios'
import type { InjectionKey } from 'vue'
import { provide, reactive } from 'vue'
import type {
  CommentData,
  CommentItem,
  CounterData,
  CounterItem,
  WayThemeData,
} from '../../shared'
import { useThemeLocaleData } from './useThemeData'

interface ArticleDataRes {
  counterList?: CounterItem[]
  counterTotal?: number
  commentList?: CommentItem[]
  commentTotal?: number
}

const articleData = reactive<ArticleDataRes>({
  counterList: [],
  counterTotal: 0,
  commentList: [],
  commentTotal: 0,
})

const articleDataSymbol: InjectionKey<ArticleDataRes> = Symbol('articleData')

let themeLocale: ThemeLocaleDataRef<WayThemeData>

let headers = {}
// 访问相关
export const fetchCounter = (): Promise<CounterItem[]> => {
  return new Promise((resolve, reject) => {
    if (themeLocale.value.comments?.counterUrl) {
      axios({
        method: 'get',
        url: themeLocale.value.comments.counterUrl,
        headers,
      })
        .then(function ({ data }: { data: CounterData }) {
          resolve(data.results)
        })
        .catch((err) => reject(err))
    }
  })
}

// 评论相关
export const fetchComment = (): Promise<CommentItem[]> => {
  return new Promise((resolve, reject) => {
    if (themeLocale.value.comments?.commentUrl) {
      axios({
        method: 'get',
        url: themeLocale.value.comments.commentUrl,
        headers,
      })
        .then(function ({ data }: { data: CommentData }) {
          resolve(data.results)
        })
        .catch((err) => reject(err))
    }
  })
}

// 获取访问，评论相关数据
export const useArticleData = (): ArticleDataRes => {
  return articleData
}

export const setupArticleData = (): void => {
  // 先获取APP—ID和APP—KEY
  themeLocale = useThemeLocaleData()
  headers = {
    'X-LC-Id': themeLocale.value.comments?.['APP-ID'] as string,
    'X-LC-Key': themeLocale.value.comments?.['APP-KEY'] as string,
    'Content-Type': 'application/json',
  }

  fetchCounter().then((res) => {
    articleData.counterList = res
    articleData.counterTotal = res.reduce(
      (preVal, currVal) => preVal + currVal.time,
      0
    )
  })
  fetchComment().then((res) => {
    articleData.commentList = res
    articleData.commentTotal = res.length
  })
  provide(articleDataSymbol, articleData)
}
