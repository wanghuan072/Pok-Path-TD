import { useRoute, useRouter } from 'vue-router'
import { localeCodes } from '../i18n'

const prefixedLocales = localeCodes.filter((l) => l !== 'en')

/**
 * 获取带语言前缀的路径（与 router createRoutePath 逻辑一致）
 */
export function useLocalePath() {
  const route = useRoute()
  const router = useRouter()

  const currentLocale = () => {
    const segments = route.path.split('/').filter(Boolean)
    const firstSegment = segments[0]
    if (firstSegment && prefixedLocales.includes(firstSegment)) {
      return firstSegment
    }
    return 'en'
  }

  const localePath = (path = '', targetLocale = null) => {
    const loc = targetLocale ?? currentLocale()
    // 先移除已有的语言前缀，避免 /ja/ja/items 双重前缀
    let cleanPath = (path || '/').replace(/^\//, '') || ''
    cleanPath = cleanPath.replace(new RegExp(`^(${prefixedLocales.join('|')})(/|$)`), '$2').replace(/^\/+/, '') || ''
    const basePath = cleanPath ? `/${cleanPath}` : '/'
    if (loc === 'en') {
      return basePath
    }
    return `/${loc}${basePath}`
  }

  const switchLocale = (newLocale) => {
    if (!localeCodes.includes(newLocale)) return
    const currentPath = route.path
    const cleanPath = currentPath
      .replace(new RegExp(`^/(${prefixedLocales.join('|')})(/|$)`), '$2')
      .replace(/^\/+/, '') || ''
    const newPath = newLocale === 'en' ? (cleanPath ? `/${cleanPath}` : '/') : (cleanPath ? `/${newLocale}/${cleanPath}` : `/${newLocale}`)
    router.push(newPath || '/')
  }

  return {
    localePath,
    switchLocale,
    currentLocale
  }
}
