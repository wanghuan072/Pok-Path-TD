import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useRoutesData() {
  const { locale } = useI18n()
  const routesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/routes/${currentLang}.js`).catch(() => 
        import('../data/routes/en.js')
      )
      
      const data = module.stages || module.default || []
      routesData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load routes data:', err)
      error.value = err.message
      routesData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    routesData,
    loading,
    error,
    loadData
  }
}
