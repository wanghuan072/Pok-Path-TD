import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useWikiData() {
  const { locale } = useI18n()
  const wikiData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/wiki/${currentLang}.js`).catch(() => 
        import('../data/wiki/en.js')
      )
      
      const data = module.default || []
      wikiData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load wiki data:', err)
      error.value = err.message || 'Failed to load wiki data'
      wikiData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    wikiData,
    loading,
    error,
    loadData
  }
}
