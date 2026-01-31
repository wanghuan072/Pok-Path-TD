import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Tools Data Composable
 * Loads tools data based on current locale
 */
export function useToolsData() {
  const { locale } = useI18n()
  const toolsData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      // Dynamic import with fallback to en
      const module = await import(`../data/tools/${currentLang}.js`).catch(() => 
        import('../data/tools/en.js')
      )
      
      const tools = module.tools || module.default || []
      toolsData.value = Array.isArray(tools) ? tools : []
    } catch (err) {
      console.error('Failed to load tools data:', err)
      error.value = err.message || 'Failed to load tools data'
      toolsData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    tools: toolsData,
    loading,
    error,
    loadData
  }
}
