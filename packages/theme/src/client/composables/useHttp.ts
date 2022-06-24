import { computed, reactive, toRefs } from 'vue'
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

const articleData = reactive<ArticleDataRes>({})

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
const fetchComment = (): Promise<CommentItem[]> => {
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
export const useArticleData = () => {
  computed(() => {
    console.log('-->>', articleData)
    return ''
  })
  return toRefs(articleData)
}

export const setupArticleData = async (): Promise<void> => {
  const counterList = await fetchCounter()
  const commentList = await fetchComment()
  const counterTotal = counterList.reduce(
    (preVal, currVal) => preVal + currVal.time,
    0
  )
  const commentTotal = commentList.length
  articleData.counterList = counterList
  articleData.commentList = commentList
  articleData.counterTotal = counterTotal
  articleData.commentTotal = commentTotal

  console.log('articleData', articleData)
}
