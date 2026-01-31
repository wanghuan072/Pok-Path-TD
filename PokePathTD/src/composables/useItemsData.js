import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useItemsData() {
  const { locale } = useI18n()
  const itemsData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/items/${currentLang}.js`).catch(() => 
        import('../data/items/en.js')
      )
      
      const data = module.default || []
      itemsData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load items data:', err)
      error.value = err.message || 'Failed to load items data'
      itemsData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    itemsData,
    loading,
    error,
    loadData
  }
}
