import type { InjectionKey } from 'vue'
import { provide, reactive } from 'vue'
import type {
  CommentData,
  CommentItem,
  CounterData,
  CounterItem,
} from '../../shared'

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

// 访问相关
export const fetchCounter = (): Promise<CounterItem[]> => {
  return new Promise((resolve, reject) => {
    fetch('https://qsddby5s.api.lncldglobal.com/1.1/classes/Counter', {
      method: 'GET',
      headers: {
        'X-LC-Id': 'qSDDby5SpgWVXHs0TmqooRx6-MdYXbMMI',
        'X-LC-Key': 'u9A20eaXONKJb37zjVopq6mV',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: CounterData) => {
        resolve(data.results)
      })
      .catch((err) => reject(err))
  })
}

// 评论相关
export const fetchComment = (): Promise<CommentItem[]> => {
  return new Promise((resolve, reject) => {
    fetch('https://qsddby5s.api.lncldglobal.com/1.1/classes/Comment', {
      method: 'GET',
      headers: {
        'X-LC-Id': 'qSDDby5SpgWVXHs0TmqooRx6-MdYXbMMI',
        'X-LC-Key': 'u9A20eaXONKJb37zjVopq6mV',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: CommentData) => {
        resolve(data.results)
      })
      .catch((err) => reject(err))
  })
}

// 获取访问，评论相关数据
export const useArticleData = (): ArticleDataRes => {
  return articleData
}

export const setupArticleData = (): void => {
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
