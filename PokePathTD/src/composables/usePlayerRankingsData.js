import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function usePlayerRankingsData() {
  const { locale } = useI18n()
  const playerRankingsData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/playerRankings/${currentLang}.js`).catch(() => 
        import('../data/playerRankings/en.js')
      )
      
      const data = module.default || []
      playerRankingsData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load player rankings data:', err)
      error.value = err.message || 'Failed to load player rankings data'
      playerRankingsData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    playerRankingsData,
    loading,
    error,
    loadData
  }
}
