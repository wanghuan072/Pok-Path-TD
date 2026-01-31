import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useEnemyData() {
  const { locale } = useI18n()
  const enemyData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/enemies/${currentLang}.js`).catch(() => 
        import('../data/enemies/en.js')
      )
      
      const data = module.default || []
      enemyData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load enemy data:', err)
      error.value = err.message
      enemyData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    enemyData,
    loading,
    error,
    loadData
  }
}
