import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function useGameData() {
  const { locale } = useI18n()
  const gamesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/games/${currentLang}.js`).catch(() => 
        import('../data/games/en.js')
      )
      
      const data = module.default || []
      gamesData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load games data:', err)
      error.value = err.message || 'Failed to load games data'
      gamesData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    gamesData,
    loading,
    error,
    loadData
  }
}
