import { computed, inject, provide } from 'vue'
import type { ComputedRef, InjectionKey } from 'vue'
import type { BlogCategoryData } from 'vuepress-plugin-blog2'
import { useBlogCategory } from 'vuepress-plugin-blog2/lib/client'
import type { WayThemePostData, WayThemePostInfo } from '../../shared'

export type TagMapRef = ComputedRef<BlogCategoryData<WayThemePostInfo>>

export const tagMapSymbol: InjectionKey<TagMapRef> = Symbol.for('tags')

export const useTagMap = (): TagMapRef => {
  const tagMap = inject(tagMapSymbol)

  if (!tagMap) {
    throw new Error('useTagMap() is called without provider.')
  }

  return tagMap
}

export const setupTags = (): void => {
  const tagMap = useBlogCategory<WayThemePostInfo>('tag')
  provide(tagMapSymbol, tagMap)
}

export interface TagType {
  name: string
  path: string
  pages: Array<WayThemePostData>
}

export const useTags = (): ComputedRef<TagType[]> => {
  const tagMap = useTagMap()
  const tags = computed(() => {
    const tags = [] as TagType[]
    for (const tag in tagMap.value.map) {
      tags.push({
        name: tag,
        pages: tagMap.value.map[tag].items,
        path: tagMap.value.map[tag].path,
      })
    }
    return tags
  })

  return tags
}
