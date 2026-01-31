import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function usePokemonData() {
  const { locale } = useI18n()
  const pokemonData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/pokemon/${currentLang}.js`).catch(() => 
        import('../data/pokemon/en.js')
      )
      
      const data = module.default || []
      pokemonData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load pokemon data:', err)
      error.value = err.message
      pokemonData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    pokemonData,
    loading,
    error,
    loadData
  }
}
