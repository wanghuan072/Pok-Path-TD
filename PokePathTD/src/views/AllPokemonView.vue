<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">⚡</span>
            <span class="badge-text">{{ t('AllPokemonView.pageBadge') }}</span>
          </div>
          <h1 class="page-title">{{ t('AllPokemonView.pageTitle') }}</h1>
          <p class="page-subtitle">
            {{ t('AllPokemonView.pageSubtitle') }}
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Main Content Area -->
        <div class="content-area">
          <h2 class="section-main-title">{{ t('AllPokemonView.sectionMainTitle') }}</h2>
          <p class="section-main-description">
            {{ t('AllPokemonView.sectionMainDescription') }}
          </p>
          
          <!-- Pokemon Categories -->
          <div class="pokemon-categories">
            <div v-for="category in categoryGroups" :key="category.name" class="category-group">
              <div class="category-header">
                <h3 class="category-name">{{ category.name.toUpperCase() }}</h3>
                <div class="category-divider"></div>
              </div>
              <div class="category-pokemons">
                <div 
                  v-for="pokemon in category.pokemons" 
                  :key="pokemon.id" 
                  class="pokemon-card"
                  @click="openPokemonModal(pokemon, category.pokemons)"
                >
                  <div class="pokemon-card-border-left"></div>
                  <div class="pokemon-card-content">
                    <div class="pokemon-image">
                      <img
                        v-if="pokemon.imageUrl"
                        :src="pokemon.imageUrl"
                        :alt="pokemon.imageAlt || pokemon.name"
                        class="pokemon-img"
                      />
                      <div v-else class="image-placeholder">
                        {{ pokemon.name.charAt(0) }}
                      </div>
                    </div>
                    <div class="pokemon-info">
                      <h3 class="pokemon-name">
                        {{ pokemon.name }}{{ pokemon.level ? ` [${pokemon.level}]` : '' }}
                      </h3>
                      <div class="pokemon-stats-grid">
                        <div class="stat-box">
                          <div class="stat-icon">⚔️</div>
                          <div class="stat-content">
                            <span class="stat-label">Power</span>
                            <span class="stat-value">{{ pokemon.property?.power ?? pokemon.power }}</span>
                          </div>
                        </div>
                        <div class="stat-box">
                          <div class="stat-icon">⏱️</div>
                          <div class="stat-content">
                            <span class="stat-label">Recharge</span>
                            <span class="stat-value">{{ pokemon.property?.recharge ?? pokemon.recharge }}s</span>
                          </div>
                        </div>
                        <div class="stat-box">
                          <div class="stat-icon">💥</div>
                          <div class="stat-content">
                            <span class="stat-label">Critical</span>
                            <span class="stat-value">{{ pokemon.property?.critical ?? pokemon.critical }}</span>
                          </div>
                        </div>
                        <div class="stat-box">
                          <div class="stat-icon">📏</div>
                          <div class="stat-content">
                            <span class="stat-label">Range</span>
                            <span class="stat-value">{{ pokemon.property?.range ?? pokemon.range }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="pokemon-meta">
                        <div class="pokemon-meta-state">
                          <div class="meta-row">
                            <div class="meta-item">
                              <span class="meta-label">Shape:</span>
                              <span class="meta-value">{{ pokemon.state?.shape ?? pokemon.shape }}</span>
                            </div>
                            <div class="meta-item">
                              <span class="meta-label">Target:</span>
                              <span class="meta-value">{{ pokemon.state?.target ?? pokemon.target }}</span>
                            </div>
                          </div>
                          <div class="meta-row" v-if="pokemon.state?.acquisition || pokemon.terrain">
                            <div class="meta-item" v-if="pokemon.state?.acquisition">
                              <span class="meta-label">Acquisition:</span>
                              <span class="meta-value">{{ pokemon.state.acquisition }}</span>
                            </div>
                            <div class="meta-item" v-if="pokemon.terrain">
                              <span class="meta-label">Terrain:</span>
                              <div class="terrain-tags">
                                <span
                                  v-for="terrain in pokemon.terrain"
                                  :key="terrain"
                                  class="terrain-tag"
                                >
                                  {{ terrain }}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="meta-row" v-if="pokemon.state?.lv">
                            <div class="meta-item">
                              <span class="meta-label">Lvl 100 Cost:</span>
                              <span class="meta-value">$ {{ pokemon.state.lv }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pokemon-ability">
                        <div class="ability-header">
                          <span class="ability-label">Ability:</span>
                          <span class="ability-icon">✨</span>
                        </div>
                        <div class="ability-text">{{ pokemon.ability }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Introduction Section -->
      <section class="intro-section">
        <div class="container">
          <div class="intro-card">
            <h2 class="intro-title">{{ t('AllPokemonView.intro.title') }}</h2>
            <div class="intro-content">
              <p v-html="t('AllPokemonView.intro.p1')"></p>
              <p v-html="t('AllPokemonView.intro.p2')"></p>
              <div class="intro-steps">
                <div class="intro-step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>{{ t('AllPokemonView.intro.steps.step1.title') }}</h4>
                    <p>{{ t('AllPokemonView.intro.steps.step1.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>{{ t('AllPokemonView.intro.steps.step2.title') }}</h4>
                    <p>{{ t('AllPokemonView.intro.steps.step2.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>{{ t('AllPokemonView.intro.steps.step3.title') }}</h4>
                    <p>{{ t('AllPokemonView.intro.steps.step3.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h4>{{ t('AllPokemonView.intro.steps.step4.title') }}</h4>
                    <p>{{ t('AllPokemonView.intro.steps.step4.desc') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="faq-card">
            <h2 class="faq-title">{{ t('AllPokemonView.faq.title') }}</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q1') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a1') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q2') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a2') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q3') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a3') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q4') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a4') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q5') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a5') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q6') }}</h3>
                <p class="faq-answer" v-html="t('AllPokemonView.faq.a6')"></p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q7') }}</h3>
                <p class="faq-answer">{{ t('AllPokemonView.faq.a7') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q8') }}</h3>
                <p class="faq-answer" v-html="t('AllPokemonView.faq.a8')"></p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('AllPokemonView.faq.q9') }}</h3>
                <p class="faq-answer" v-html="t('AllPokemonView.faq.a9')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <AppFooter />

    <!-- Pokemon Detail Modal -->
    <PokemonDetailModal
      :is-open="isModalOpen"
      :pokemon="selectedPokemon"
      :evolution-family="currentEvolutionFamily"
      @close="closeModal"
      @select-pokemon="handlePokemonSelect"
    />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PokemonDetailModal from '../components/PokemonDetailModal.vue'
import { usePokemonData } from '../composables/usePokemonData'

const isModalOpen = ref(false)
const selectedPokemon = ref(null)
const currentEvolutionFamily = ref([])
const { t, locale } = useI18n()
const { pokemonData, loadData } = usePokemonData()

onMounted(() => {
  loadData()
})

watch(locale, () => {
  loadData()
})

const openPokemonModal = (pokemon, evolutionFamily) => {
  selectedPokemon.value = pokemon
  currentEvolutionFamily.value = evolutionFamily
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedPokemon.value = null
  currentEvolutionFamily.value = []
}

const handlePokemonSelect = (pokemon) => {
  selectedPokemon.value = pokemon
}

// 按 category 分组
const categoryGroups = computed(() => {
  const categoryMap = new Map()

  // 按 category 分组
  pokemonData.value.forEach((pokemon) => {
    if (!categoryMap.has(pokemon.category)) {
      categoryMap.set(pokemon.category, [])
    }
    categoryMap.get(pokemon.category).push(pokemon)
  })

  // 转换为数组，保持数据在原始文件中的顺序
  const categories = []
  categoryMap.forEach((categoryPokemons, category) => {
    categories.push({
      name: category,
      pokemons: categoryPokemons,
    })
  })

  return categories
})
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Header styles are now in main.css */

/* 内容区域 */
.content-area {
  min-height: 400px;
}

/* Section Main Title */
.section-main-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 12px 0;
  text-align: center;
  background: linear-gradient(135deg, #f5f8f0 0%, #6ba3e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-main-description {
  font-size: 1rem;
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  text-align: center;
  margin: 0 0 32px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Pokemon Categories */
.pokemon-categories {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.category-groups {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.category-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.category-header {
  margin-bottom: 6px;
}

.category-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 6px 0;
}

.category-divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(107, 163, 232, 0.3), transparent);
}

.category-pokemons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
}

/* Pokemon Card */
.pokemon-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.2s ease;
  cursor: pointer;
}

.pokemon-card:hover {
  border-color: #6ba3e8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.pokemon-card-border-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #6ba3e8, #5cb85c);
}

.pokemon-card-content {
  display: flex;
  gap: 10px;
  padding: 12px;
}

.pokemon-image {
  flex-shrink: 0;
}

.pokemon-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(107, 163, 232, 0.1);
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.image-placeholder {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #6ba3e8;
}

.pokemon-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.pokemon-name {
  font-size: 0.95rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
}

.pokemon-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.stat-box {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 6px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 5px;
}

.stat-icon {
  font-size: 0.9rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
}

.stat-label {
  font-size: 0.65rem;
  color: rgba(245, 248, 240, 0.6);
  font-weight: 500;
}

.stat-value {
  font-size: 0.85rem;
  color: #6ba3e8;
  font-weight: 700;
}

/* Pokemon Meta Tags */
.pokemon-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid rgba(107, 163, 232, 0.15);
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.7);
  flex-shrink: 0;
}

.meta-value {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(245, 248, 240, 0.85);
}

.pokemon-meta-state {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid rgba(107, 163, 232, 0.15);
}

.terrain-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  flex: 1;
}

.terrain-tag {
  display: inline-block;
  padding: 2px 8px;
  background: rgba(92, 184, 92, 0.1);
  border: 1px solid rgba(92, 184, 92, 0.25);
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 600;
  color: #5cb85c;
}

/* Pokemon Ability */
.pokemon-ability {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: rgba(15, 20, 30, 0.4);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 6px;
  border-left: 3px solid #6ba3e8;
  margin-top: 4px;
}

.ability-header {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ability-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.7);
}

.ability-icon {
  font-size: 0.8rem;
  line-height: 1;
}

.ability-text {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.4;
}

.loading-state {
  text-align: center;
  padding: 60px 20px;
}

.loading-text {
  color: rgba(245, 248, 240, 0.7);
  font-size: 1rem;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.no-results-icon {
  font-size: 3rem;
  opacity: 0.5;
}

.no-results-text {
  color: rgba(245, 248, 240, 0.7);
  font-size: 1.125rem;
}

/* Introduction Section */
.intro-section {
  padding: 2rem 0;
}

.intro-card {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.intro-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  margin: 0 0 1.5rem 0;
}

.intro-content p {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.intro-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.intro-step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 2px solid rgba(107, 163, 232, 0.5);
  border-radius: 50%;
  color: #6ba3e8;
  font-weight: 700;
  font-size: 1.2rem;
}

.step-content h4 {
  color: #f5f8f0;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.step-content p {
  color: rgba(245, 248, 240, 0.7);
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-section {
  padding: 3rem 0;
}

.faq-card {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.faq-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  margin: 0 0 2rem 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  padding: 1.5rem;
  background: rgba(26, 35, 50, 0.5);
  border-radius: 8px;
  border-left: 3px solid #6ba3e8;
}

.faq-question {
  color: #6ba3e8;
  font-size: 1.1rem;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
}

.faq-answer {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .section-main-title { font-size: 1.6rem; margin-bottom: 10px; }
  .section-main-description { font-size: 0.95rem; margin-bottom: 28px; }
  .pokemon-categories { gap: 28px; }
  .category-group { gap: 10px; }
  .category-name { font-size: 1.05rem; }
  .category-pokemons { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px; }
  .pokemon-card-content { gap: 8px; padding: 10px; }
  .pokemon-img, .image-placeholder { width: 45px; height: 45px; }
  .pokemon-name { font-size: 0.9rem; }
  .pokemon-stats-grid { gap: 4px; }
  .stat-box { padding: 4px 5px; }
  .stat-icon { width: 18px; height: 18px; font-size: 0.85rem; }
  .stat-label { font-size: 0.6rem; }
  .stat-value { font-size: 0.8rem; }
  .pokemon-meta { gap: 5px; padding-top: 6px; }
  .meta-row { gap: 6px; }
  .meta-label { font-size: 0.65rem; }
  .meta-value { padding: 2px 6px; font-size: 0.65rem; }
  .terrain-tag { padding: 2px 6px; font-size: 0.6rem; }
  .pokemon-ability { padding: 6px; gap: 4px; }
  .ability-label { font-size: 0.65rem; }
  .ability-text { font-size: 0.7rem; }
  .intro-section { padding: 1.8rem 0; }
  .intro-card { padding: 1.8rem; }
  .intro-title { font-size: 1.4rem; margin-bottom: 1.3rem; }
  .intro-content p { font-size: 0.95rem; margin-bottom: 1.8rem; }
  .intro-steps { gap: 1.3rem; }
  .step-number { width: 2.2rem; height: 2.2rem; font-size: 1.1rem; }
  .step-content h4 { font-size: 1.05rem; }
  .step-content p { font-size: 0.9rem; }
  .faq-section { padding: 2.5rem 0; }
  .faq-card { padding: 1.8rem; }
  .faq-title { font-size: 1.4rem; margin-bottom: 1.8rem; }
  .faq-list { gap: 1.3rem; }
  .faq-item { padding: 1.3rem; }
  .faq-question { font-size: 1.05rem; margin-bottom: 0.6rem; }
  .faq-answer { font-size: 0.9rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .section-main-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .section-main-description { font-size: 0.8rem; margin-bottom: 1.2rem; }
  .pokemon-categories { gap: 1.2rem; }
  .category-group { gap: 0.8rem; }
  .category-name { font-size: 1.2rem; margin-bottom: 0.4rem; }
  .category-pokemons { grid-template-columns: 1fr; gap: 0.8rem; }
  .pokemon-card-content { gap: 0.8rem; padding: 0.8rem; }
  .pokemon-img, .image-placeholder { width: 40px; height: 40px; font-size: 1.1rem; }
  .pokemon-name { font-size: 1rem; }
  .pokemon-stats-grid { gap: 0.3rem; }
  .stat-box { padding: 0.3rem 0.4rem; }
  .stat-icon { width: 16px; height: 16px; font-size: 0.8rem; }
  .stat-label { font-size: 0.55rem; }
  .stat-value { font-size: 0.75rem; }
  .pokemon-meta { gap: 0.4rem; padding-top: 0.5rem; }
  .meta-row { gap: 0.5rem; }
  .meta-label { font-size: 0.6rem; }
  .meta-value { padding: 1px 5px; font-size: 0.6rem; }
  .terrain-tag { padding: 1px 5px; font-size: 0.55rem; }
  .pokemon-ability { padding: 0.5rem; gap: 0.3rem; margin-top: 0.3rem; }
  .ability-label { font-size: 0.6rem; }
  .ability-text { font-size: 0.65rem; }
  .intro-section { padding: 1.2rem 0; }
  .intro-card { padding: 1.2rem; }
  .intro-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .intro-content p { font-size: 0.8rem; margin-bottom: 1.2rem; }
  .intro-steps { gap: 0.8rem; }
  .intro-step { gap: 0.8rem; }
  .step-number { width: 2rem; height: 2rem; font-size: 1rem; }
  .step-content h4 { font-size: 1rem; margin-bottom: 0.3rem; }
  .step-content p { font-size: 0.8rem; }
  .faq-section { padding: 1.2rem 0; }
  .faq-card { padding: 1.2rem; }
  .faq-title { font-size: 1.4rem; margin-bottom: 1.2rem; }
  .faq-list { gap: 0.8rem; }
  .faq-item { padding: 0.8rem; }
  .faq-question { font-size: 1.2rem; margin-bottom: 0.4rem; }
  .faq-answer { font-size: 0.8rem; }
}
</style>
