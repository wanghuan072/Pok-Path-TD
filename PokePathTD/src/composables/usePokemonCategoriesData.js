import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export function usePokemonCategoriesData() {
  const { locale } = useI18n()
  const categoriesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    try {
      const currentLang = lang || locale.value || 'en'
      const module = await import(`../data/pokemonCategories/${currentLang}.js`).catch(() => 
        import('../data/pokemonCategories/en.js')
      )
      
      const data = module.default || []
      categoriesData.value = Array.isArray(data) ? data : []
    } catch (err) {
      console.error('Failed to load pokemon categories data:', err)
      error.value = err.message
      categoriesData.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    categoriesData,
    loading,
    error,
    loadData
  }
}
