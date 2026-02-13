<template>
  <div class="home-view">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-banner">
          <div class="hero-banner-badge">{{ $t('HomePage.hero.updated') }}</div>
        </div>
        <div class="hero-content">
          <div class="hero-main">
            <h1 class="hero-title">{{ $t('HomePage.hero.title') }}</h1>

            <p class="hero-subtitle" v-html="$t('HomePage.hero.subtitle')"></p>

            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-value">100+</div>
                <div class="stat-label">{{ $t('HomePage.hero.stats.pokemon') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">9</div>
                <div class="stat-label">{{ $t('HomePage.hero.stats.routes') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">18</div>
                <div class="stat-label">{{ $t('HomePage.hero.stats.types') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">TD</div>
                <div class="stat-label">{{ $t('HomePage.hero.stats.gameMode') }}</div>
              </div>
            </div>

            <div class="hero-actions">
              <a :href="localePath('/all-pokemon')" class="btn-primary">
                <span>{{ $t('HomePage.hero.actions.explore') }}</span>
                <span class="btn-arrow">→</span>
              </a>
              <a :href="localePath('/tools')" class="btn-secondary">
                <span>{{ $t('HomePage.hero.actions.tools') }}</span>
              </a>
            </div>

            <div class="hero-game-versions">
              <div class="section-title-wrapper">
                <div class="section-title-line"></div>
                <h2 class="section-title">{{ $t('HomePage.hero.versions.title') }}</h2>
                <div class="section-title-line"></div>
              </div>
              <div class="game-versions-buttons">
                <button
                  v-for="game in games"
                  :key="game.id"
                  class="game-version-btn"
                  @click="loadGame(game.addressBar)"
                >
                  <span class="version-btn-icon">🎮</span>
                  <span class="version-btn-text">{{ game.name }}</span>
                  <span class="version-btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Introduction Section -->
    <section class="home-section game-intro-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">{{ $t('HomePage.intro.title') }}</h2>
            <div class="section-title-line"></div>
          </div>
        </div>
        <div class="game-intro-content">
          <div class="game-intro-text">
            <p class="intro-main-text" v-html="$t('HomePage.intro.text')"></p>
            <div class="game-mechanics-grid">
              <div class="mechanic-item">
                <div class="mechanic-icon">⚔️</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">{{ $t('HomePage.intro.mechanics.power.title') }}</h4>
                  <p class="mechanic-desc">{{ $t('HomePage.intro.mechanics.power.desc') }}</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">⏱️</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">
                    {{ $t('HomePage.intro.mechanics.recharge.title') }}
                  </h4>
                  <p class="mechanic-desc">{{ $t('HomePage.intro.mechanics.recharge.desc') }}</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">💥</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">
                    {{ $t('HomePage.intro.mechanics.critical.title') }}
                  </h4>
                  <p class="mechanic-desc">{{ $t('HomePage.intro.mechanics.critical.desc') }}</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">📏</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">{{ $t('HomePage.intro.mechanics.range.title') }}</h4>
                  <p class="mechanic-desc">{{ $t('HomePage.intro.mechanics.range.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Database Section (All Pokemon + Enemy Database) -->
    <section class="home-section database-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">{{ $t('HomePage.database.title') }}</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">{{ $t('HomePage.database.description') }}</p>
        </div>
        <div class="database-grid">
          <!-- All Pokemon Card -->
          <div class="database-card pokemon-db-card">
            <div class="database-card-header">
              <div class="database-icon">⚔️</div>
              <h3 class="database-title">{{ $t('HomePage.database.pokemon.title') }}</h3>
            </div>
            <p class="database-description">
              {{ $t('HomePage.database.pokemon.description') }}
            </p>
            <div class="database-preview">
              <div class="database-preview-grid">
                <div
                  class="db-preview-item"
                  v-for="preview in pokemonPreview.slice(0, 8)"
                  :key="preview.id"
                >
                  <div class="db-preview-image">
                    <img
                      v-if="preview.imageUrl"
                      :src="preview.imageUrl"
                      :alt="preview.name"
                      class="db-preview-img"
                    />
                    <div v-else class="db-preview-placeholder">{{ preview.name.charAt(0) }}</div>
                  </div>
                  <div class="db-preview-info">
                    <h4 class="db-preview-name">{{ preview.name }}</h4>
                    <div class="db-preview-stats">
                      <span class="db-preview-stat">⚔️ {{ preview.power }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="database-action">
              <a :href="localePath('/all-pokemon')" class="btn-primary">
                <span>{{ $t('HomePage.database.pokemon.action') }}</span>
                <span class="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <!-- Enemy Database Card -->
          <div class="database-card enemy-db-card">
            <div class="database-card-header">
              <div class="database-icon">👹</div>
              <h3 class="database-title">{{ $t('HomePage.database.enemy.title') }}</h3>
            </div>
            <p class="database-description">
              {{ $t('HomePage.database.enemy.description') }}
            </p>
            <div class="database-preview">
              <div class="database-preview-grid">
                <div
                  class="db-preview-item"
                  v-for="enemy in featuredEnemies.slice(0, 8)"
                  :key="enemy.id"
                >
                  <div class="db-preview-image">
                    <img
                      v-if="enemy.imageUrl"
                      :src="enemy.imageUrl"
                      :alt="enemy.name"
                      class="db-preview-img"
                    />
                    <div v-else class="db-preview-placeholder">{{ enemy.name.charAt(0) }}</div>
                  </div>
                  <div class="db-preview-info">
                    <h4 class="db-preview-name">{{ enemy.name }}</h4>
                    <span
                      class="db-enemy-threat"
                      :class="`threat-${enemy.threat.toLowerCase().replace(' ', '-')}`"
                    >
                      {{ enemy.threat }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="database-action">
              <a :href="localePath('/enemies')" class="btn-primary">
                <span>{{ $t('HomePage.database.enemy.action') }}</span>
                <span class="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Routes Section -->
    <section class="home-section routes-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">{{ $t('HomePage.routes.title') }}</h2>
            <div class="section-title-line"></div>
          </div>
          <i18n-t
            keypath="HomePage.routes.description"
            tag="p"
            class="section-description"
            scope="global"
          >
            <template #link1>
              <a :href="localePath('/map-router/how-to-beat-route-1-1-articuno')" class="inline-link">
                {{ $t('HomePage.routes.link1') }}
              </a>
            </template>
            <template #link2>
              <a
                :href="localePath('/map-router/how-to-beat-route-3-1-regirock-wave-100-guide')"
                class="inline-link"
              >
                {{ $t('HomePage.routes.link2') }}
              </a>
            </template>
          </i18n-t>
        </div>
        <div class="routes-preview-grid">
          <a
            v-for="route in featuredRoutes.slice(0, 3)"
            :key="route.id"
            :href="localePath(`/map-router/${route.id}`)"
            class="route-preview-card"
          >
            <div class="route-preview-image">
              <img
                v-if="route.mapImage"
                :src="route.mapImage"
                :alt="route.name"
                class="route-preview-img"
              />
              <div v-else class="route-preview-placeholder">
                <span class="placeholder-icon">🗺️</span>
              </div>
              <div class="route-preview-overlay">
                <div class="route-preview-number">{{ route.routeNumber }}</div>
                <div
                  class="route-preview-difficulty"
                  :style="{ backgroundColor: difficultyColors[route.difficulty] }"
                >
                  {{ route.difficulty }}
                </div>
              </div>
            </div>
            <div class="route-preview-content">
              <h3 class="route-preview-name">{{ route.name }}</h3>
              <div class="route-preview-meta">
                <span class="route-preview-star">⭐ {{ route.stars }}</span>
                <span class="route-preview-wave">🌊 {{ route.totalWaves || 100 }}</span>
              </div>
              <div class="route-preview-terrain" v-if="route.terrain && route.terrain.length > 0">
                <span
                  class="terrain-tag"
                  v-for="terrain in route.terrain.slice(0, 3)"
                  :key="terrain"
                >
                  {{ terrain }}
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="section-footer">
          <a :href="localePath('/map-router/how-to-beat-route-1-3-6')" class="btn-secondary">
            <span>{{ $t('HomePage.routes.action.guide') }}</span>
            <span class="btn-arrow">→</span>
          </a>
          <a :href="localePath('/map-router')" class="btn-secondary">
            <span>{{ $t('HomePage.routes.action.viewAll') }}</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Wiki Section -->
    <section class="home-section wiki-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">{{ $t('HomePage.wiki.title') }}</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">
            {{ $t('HomePage.wiki.description') }}
          </p>
        </div>
        <div class="wiki-preview-grid">
          <a
            v-for="article in homeWikiArticles"
            :key="article.id"
            :href="localePath(`/wiki/${article.addressBar}`)"
            class="wiki-preview-card"
          >
            <div class="wiki-card-image">
              <img
                v-if="article.imageUrl"
                :src="article.imageUrl"
                :alt="article.title"
                class="wiki-preview-img"
              />
              <div v-else class="wiki-preview-placeholder">
                <span class="placeholder-icon">📚</span>
              </div>
              <div class="wiki-card-overlay"></div>
            </div>
            <div class="wiki-card-content">
              <h3 class="wiki-preview-title">{{ article.title }}</h3>
              <p class="wiki-preview-description">{{ article.description }}</p>
              <div class="wiki-card-footer">
                <span class="wiki-read-more">{{ $t('HomePage.wiki.readMore') }}</span>
                <span class="wiki-arrow">→</span>
              </div>
            </div>
          </a>
        </div>
        <div class="section-footer">
          <a :href="localePath('/wiki')" class="btn-secondary">
            <span>{{ $t('HomePage.wiki.action') }}</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="home-section tools-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">{{ $t('HomePage.tools.title') }}</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">
            {{ $t('HomePage.tools.description') }}
          </p>
        </div>
        <div class="tools-grid">
          <a v-for="tool in toolsPreview" :key="tool.id" :href="localePath(tool.path)" class="tool-card">
            <div class="tool-icon">{{ tool.icon }}</div>
            <h3 class="tool-title">{{ $t(tool.title) }}</h3>
            <p class="tool-description">{{ $t(tool.description) }}</p>
            <div class="tool-link">
              <span>{{ $t('HomePage.tools.useTool') }}</span>
              <span class="tool-arrow">→</span>
            </div>
          </a>
        </div>
        <div class="section-footer">
          <a :href="localePath('/tools')" class="btn-secondary">
            <span>{{ $t('HomePage.tools.action') }}</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { usePokemonData } from '../composables/usePokemonData'
import { useEnemyData } from '../composables/useEnemyData'
import { useRoutesData } from '../composables/useRoutesData'
import { useGameData } from '../composables/useGameData'
import { useWikiData } from '../composables/useWikiData'

const router = useRouter()
const { locale } = useI18n()
const { pokemonData, loadData: loadPokemon } = usePokemonData()
const { enemyData, loadData: loadEnemies } = useEnemyData()
const { routesData, loadData: loadRoutes } = useRoutesData()
const { gamesData, loadData: loadGames } = useGameData()
const { wikiData, loadData: loadWiki } = useWikiData()

import { useDeviceDetection } from '@/utils/useDeviceDetection.js'
import { useLocalePath } from '@/utils/useLocalePath'

const { isMobile } = useDeviceDetection()
const { localePath } = useLocalePath()

const difficultyColors = {
  Easy: '#5cb85c',
  Medium: '#f0ad4e',
  Hard: '#d9534f',
  'Very Hard': '#8b0000',
  Extreme: '#4a148c',
}

onMounted(async () => {
  await Promise.all([loadPokemon(), loadEnemies(), loadRoutes(), loadGames(), loadWiki()])

  setTimeout(() => {
    try {
      window.AdProvider = window.AdProvider || []
      window.AdProvider.push({ serve: {} })
    } catch (e) {
      console.error('AdProvider push failed:', e)
    }
  }, 500)
})

watch(locale, async () => {
  await Promise.all([loadPokemon(), loadEnemies(), loadRoutes(), loadGames(), loadWiki()])
})

const stages = computed(() => routesData.value)

// Get games from data
const games = computed(() => gamesData.value)

const loadGame = (addressBar) => {
  router.push(localePath(`/game/${addressBar}`))
}

// Featured Routes
const featuredRoutes = computed(() => {
  const difficulties = ['Easy', 'Medium', 'Hard', 'Very Hard']
  const samples = []
  const usedDifficulties = new Set()

  for (const difficulty of difficulties) {
    if (samples.length >= 3) break
    const route = stages.value.find(
      (r) => r.difficulty === difficulty && !usedDifficulties.has(difficulty)
    )
    if (route) {
      usedDifficulties.add(difficulty)
      samples.push(route)
    }
  }

  for (const route of stages.value) {
    if (samples.length >= 3) break
    if (!samples.find((r) => r.id === route.id)) {
      samples.push(route)
    }
  }

  return samples
})

// Tools Preview Data
const toolsPreview = [
  {
    id: 1,
    icon: '⚡',
    title: 'HomePage.tools.items.dpsCalculator.title',
    description: 'HomePage.tools.items.dpsCalculator.description',
    path: '/tools/dps-calculator',
  },
  {
    id: 2,
    icon: '📋',
    title: 'HomePage.tools.items.pokemonCategories.title',
    description: 'HomePage.tools.items.pokemonCategories.description',
    path: '/tools/pokemon-categories',
  },
  {
    id: 3,
    icon: '⚔️',
    title: 'HomePage.tools.items.enemyCounter.title',
    description: 'HomePage.tools.items.enemyCounter.description',
    path: '/tools/enemy-counter',
  },
  {
    id: 4,
    icon: '🗺️',
    title: 'HomePage.tools.items.routeStrategy.title',
    description: 'HomePage.tools.items.routeStrategy.description',
    path: '/tools/route-strategy',
  },
]

// Pokemon Preview
const pokemonPreview = computed(() => {
  const categories = new Set()
  const samples = []

  for (const pokemon of pokemonData.value) {
    if (!categories.has(pokemon.category) && samples.length < 8) {
      categories.add(pokemon.category)
      samples.push({
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.imageUrl,
        power: pokemon.power,
        recharge: pokemon.recharge,
      })
    }
  }

  return samples
})

// Featured Enemies
const featuredEnemies = computed(() => {
  const samples = []
  const usedThreats = new Set()
  const threatLevels = ['Legendary', 'Elite', 'Strong', 'Normal']

  for (const threat of threatLevels) {
    if (samples.length >= 8) break
    const enemy = enemyData.value.find((e) => e.threat === threat && !usedThreats.has(threat))
    if (enemy) {
      usedThreats.add(threat)
      samples.push(enemy)
    }
  }

  for (const enemy of enemyData.value) {
    if (samples.length >= 8) break
    if (!samples.find((e) => e.id === enemy.id)) {
      samples.push(enemy)
    }
  }

  return samples
})

// Home Wiki Articles
const homeWikiArticles = computed(() => {
  return wikiData.value.filter((article) => article.isHome === true)
})
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  position: relative;
  color: #f5f8f0;
}

/* Hero Section */
.hero-section {
  padding: 50px 0 40px;
  position: relative;
  z-index: 1;
}

.hero-banner {
  text-align: center;
  margin-bottom: 24px;
}

.hero-banner-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #5cb85c 0%, #4a9a4a 100%);
  border-radius: 20px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(92, 184, 92, 0.3);
}

.hero-main {
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #f5f8f0;
  background: linear-gradient(135deg, #f5f8f0 0%, #6ba3e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(245, 248, 240, 0.85);
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-subtitle strong {
  color: #6ba3e8;
  font-weight: 700;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 16px 24px;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  min-width: 100px;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.3);
  border: none;
  cursor: pointer;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  font-size: 0.95rem;
  border: 1px solid rgba(107, 163, 232, 0.4);
  color: #6ba3e8;
  background: rgba(26, 35, 50, 0.6);
  backdrop-filter: blur(10px);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow,
.btn-secondary:hover .btn-arrow {
  transform: translateX(4px);
}

/* Sections */
.home-section {
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
  position: relative;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.section-title-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(107, 163, 232, 0.5), transparent);
  max-width: 150px;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #6ba3e8;
  line-height: 1.2;
  text-shadow: 0 0 10px rgba(107, 163, 232, 0.3);
}

.section-description {
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.95rem;
  margin: 0;
}

.section-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

/* Game Versions in Hero Section */
.hero-game-versions {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.game-versions-label {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

.game-versions-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.game-version-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 12px;
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.game-version-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.1), rgba(92, 184, 92, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-version-btn:hover {
  border-color: rgba(107, 163, 232, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(107, 163, 232, 0.3);
}

.game-version-btn:hover::before {
  opacity: 1;
}

.game-version-btn:hover .version-btn-arrow {
  transform: translateX(4px);
}

.version-btn-icon {
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
}

.version-btn-text {
  position: relative;
  z-index: 1;
}

.version-btn-arrow {
  font-size: 1.2rem;
  color: #6ba3e8;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

/* Game Introduction */
.game-intro-content {
  margin-top: 40px;
}

.game-intro-text {
  max-width: 900px;
  margin: 0 auto;
}

.intro-main-text {
  font-size: 1.15rem;
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.8;
  margin: 0 0 40px 0;
  text-align: center;
}

.intro-main-text strong {
  color: #6ba3e8;
  font-weight: 700;
}

.game-mechanics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.mechanic-item {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.mechanic-item:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.mechanic-icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
}

.mechanic-content {
  flex: 1;
}

.mechanic-title {
  font-size: 1.1rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.mechanic-desc {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0;
}

/* Database Section */
.database-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 40px;
}

.database-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pokemon-db-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.enemy-db-card:hover {
  border-color: rgba(230, 126, 34, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(230, 126, 34, 0.2);
}

.database-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.database-icon {
  font-size: 2rem;
  line-height: 1;
}

.database-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.database-description {
  font-size: 0.95rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.database-preview {
  margin: 24px 0;
  flex: 1;
}

.database-preview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.db-preview-item {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.db-preview-item:hover {
  border-color: rgba(107, 163, 232, 0.4);
  transform: translateY(-2px);
}

.db-preview-image {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.db-preview-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(107, 163, 232, 0.1);
}

.db-preview-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #6ba3e8;
}

.db-preview-info {
  text-align: center;
  width: 100%;
}

.db-preview-name {
  font-size: 0.85rem;
  color: #f5f8f0;
  font-weight: 600;
  margin: 0 0 4px 0;
  word-break: break-word;
}

.db-preview-stats {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
}

.db-enemy-threat {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.database-action {
  margin-top: auto;
  padding-top: 24px;
}

/* Routes Section */
.routes-section {
  background: linear-gradient(180deg, transparent, rgba(92, 184, 92, 0.03), transparent);
}

.routes-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.route-preview-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(92, 184, 92, 0.25);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.route-preview-card:hover {
  border-color: rgba(92, 184, 92, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(92, 184, 92, 0.2);
}

.route-preview-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.route-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.route-preview-card:hover .route-preview-img {
  transform: scale(1.05);
}

.route-preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.8);
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.4;
}

.route-preview-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.route-preview-number {
  padding: 6px 12px;
  background: rgba(26, 35, 50, 0.9);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  font-weight: 700;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.route-preview-difficulty {
  padding: 6px 12px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
}

.route-preview-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.route-preview-name {
  font-size: 1.1rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.route-preview-meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.7);
}

.route-preview-terrain {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.terrain-tag {
  padding: 4px 10px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #5cb85c;
  font-weight: 500;
}

/* Wiki Section */
.wiki-section {
  background: linear-gradient(180deg, transparent, rgba(92, 184, 92, 0.03), transparent);
}

.wiki-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.wiki-preview-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(92, 184, 92, 0.25);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.wiki-preview-card:hover {
  border-color: rgba(92, 184, 92, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(92, 184, 92, 0.2);
}

.wiki-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.wiki-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.wiki-preview-card:hover .wiki-preview-img {
  transform: scale(1.1);
}

.wiki-preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(92, 184, 92, 0.2), rgba(107, 163, 232, 0.2));
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.6;
}

.wiki-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  pointer-events: none;
}

.wiki-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.wiki-preview-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.wiki-preview-description {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.wiki-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(92, 184, 92, 0.2);
  margin-top: auto;
}

.wiki-read-more {
  font-size: 0.9rem;
  font-weight: 600;
  color: #5cb85c;
}

.wiki-arrow {
  font-size: 1.3rem;
  color: #5cb85c;
  transition: transform 0.3s ease;
}

.wiki-preview-card:hover .wiki-arrow {
  transform: translateX(6px);
}

/* Tools Section */
.tools-section {
  background: linear-gradient(180deg, transparent, rgba(107, 163, 232, 0.03), transparent);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.tool-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 16px;
  padding: 28px;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.tool-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.tool-title {
  font-size: 1.25rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.tool-description {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.tool-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
  margin-top: auto;
  font-size: 0.9rem;
  color: #6ba3e8;
  font-weight: 600;
}

.tool-arrow {
  font-size: 1.2rem;
  color: #6ba3e8;
  transition: transform 0.3s ease;
}

.tool-card:hover .tool-arrow {
  transform: translateX(4px);
}

/* Inline Links */
.inline-link {
  color: #6ba3e8;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  transition: all 0.2s ease;
}

.inline-link:hover {
  color: #5cb85c;
  border-bottom-color: rgba(92, 184, 92, 0.5);
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .hero-section {
    padding: 40px 0 32px;
  }

  .home-section {
    margin-bottom: 40px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 18px;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 28px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 0.9rem;
  }

  .hero-stats {
    gap: 20px;
    margin-bottom: 28px;
  }

  .stat-item {
    padding: 14px 20px;
    min-width: 90px;
  }

  .stat-value {
    font-size: 1.6rem;
  }

  .hero-actions {
    gap: 14px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 11px 24px;
    font-size: 0.9rem;
  }

  .hero-game-versions {
    margin-top: 40px;
    padding-top: 28px;
  }

  .game-versions-label {
    font-size: 0.85rem;
    margin-bottom: 16px;
  }

  .game-versions-buttons {
    gap: 14px;
  }

  .game-version-btn {
    padding: 12px 24px;
    font-size: 0.9rem;
    gap: 8px;
  }

  .version-btn-icon {
    font-size: 1.1rem;
  }

  .version-btn-arrow {
    font-size: 1.1rem;
  }

  .intro-main-text {
    font-size: 1.05rem;
    margin-bottom: 32px;
  }

  .game-mechanics-grid {
    gap: 20px;
  }

  .mechanic-item {
    padding: 20px;
    gap: 14px;
  }

  .mechanic-title {
    font-size: 1.05rem;
  }

  .mechanic-desc {
    font-size: 0.85rem;
  }

  .database-grid {
    gap: 28px;
    margin-top: 32px;
  }

  .database-card {
    padding: 28px;
  }

  .database-title {
    font-size: 1.4rem;
  }

  .database-description {
    font-size: 0.9rem;
  }

  .database-preview-grid {
    gap: 14px;
  }

  .db-preview-item {
    padding: 10px;
  }

  .db-preview-image {
    width: 56px;
    height: 56px;
  }

  .db-preview-name {
    font-size: 0.8rem;
  }

  .routes-preview-grid {
    gap: 20px;
    margin-top: 32px;
  }

  .route-preview-image {
    height: 160px;
  }

  .route-preview-content {
    padding: 18px;
    gap: 10px;
  }

  .route-preview-name {
    font-size: 1.05rem;
  }

  .route-preview-meta {
    font-size: 0.8rem;
    gap: 14px;
  }

  .terrain-tag {
    font-size: 0.7rem;
    padding: 3px 8px;
  }

  .wiki-preview-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 32px;
  }

  .wiki-card-image {
    height: 180px;
  }

  .wiki-card-content {
    padding: 20px;
    gap: 10px;
  }

  .wiki-preview-title {
    font-size: 1.2rem;
  }

  .wiki-preview-description {
    font-size: 0.85rem;
  }

  .tools-grid {
    gap: 20px;
    margin-top: 32px;
  }

  .tool-card {
    padding: 24px;
    gap: 14px;
  }

  .tool-icon {
    font-size: 2.2rem;
  }

  .tool-title {
    font-size: 1.2rem;
  }

  .tool-description {
    font-size: 0.85rem;
  }

  .tool-link {
    padding-top: 14px;
    font-size: 0.85rem;
  }

  .section-footer {
    margin-top: 28px;
  }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .hero-section {
    padding: 30px 0 24px;
  }

  .home-section {
    margin-bottom: 1.2rem;
  }

  .section-header {
    margin-bottom: 1.2rem;
  }

  .hero-banner {
    margin-bottom: 1.2rem;
  }

  .hero-banner-badge {
    padding: 6px 16px;
    font-size: 0.75rem;
  }

  .hero-title {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .section-description {
    font-size: 0.8rem;
  }

  .section-title-wrapper {
    gap: 16px;
    margin-bottom: 0.8rem;
  }

  .section-title-line {
    max-width: 100px;
  }

  .hero-stats {
    gap: 16px;
    margin-bottom: 1.2rem;
  }

  .stat-item {
    padding: 12px 16px;
    min-width: 80px;
  }

  .stat-value {
    font-size: 1.4rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }

  .hero-actions {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 0.85rem;
    min-width: 200px;
  }

  .hero-game-versions {
    margin-top: 1.2rem;
    padding-top: 1.2rem;
  }

  .game-versions-label {
    font-size: 0.75rem;
    margin-bottom: 0.8rem;
  }

  .game-versions-buttons {
    flex-direction: column;
    gap: 0.8rem;
    align-items: stretch;
  }

  .game-version-btn {
    padding: 12px 20px;
    font-size: 0.85rem;
    gap: 8px;
    width: 100%;
    justify-content: center;
  }

  .version-btn-icon {
    font-size: 1rem;
  }

  .version-btn-arrow {
    font-size: 1rem;
  }

  .game-intro-content {
    margin-top: 1.2rem;
  }

  .intro-main-text {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .game-mechanics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .mechanic-item {
    padding: 0.8rem;
    gap: 0.8rem;
    flex-direction: column;
    text-align: center;
  }

  .mechanic-icon {
    font-size: 1.8rem;
  }

  .mechanic-title {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  .mechanic-desc {
    font-size: 0.8rem;
  }

  .database-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .database-card {
    padding: 1.2rem;
  }

  .database-card-header {
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .database-icon {
    font-size: 1.8rem;
  }

  .database-title {
    font-size: 1.2rem;
  }

  .database-description {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .database-preview {
    margin: 1.2rem 0;
  }

  .database-preview-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .db-preview-item {
    padding: 0.8rem;
    gap: 0.4rem;
  }

  .db-preview-image {
    width: 48px;
    height: 48px;
  }

  .db-preview-name {
    font-size: 0.75rem;
  }

  .db-preview-stats {
    font-size: 0.7rem;
  }

  .db-enemy-threat {
    font-size: 0.65rem;
    padding: 1px 6px;
  }

  .database-action {
    padding-top: 1.2rem;
  }

  .routes-preview-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .route-preview-image {
    height: 200px;
  }

  .route-preview-overlay {
    top: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
  }

  .route-preview-number {
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  .route-preview-difficulty {
    padding: 4px 8px;
    font-size: 0.7rem;
  }

  .route-preview-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .route-preview-name {
    font-size: 1.2rem;
  }

  .route-preview-meta {
    font-size: 0.75rem;
    gap: 12px;
  }

  .terrain-tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }

  .wiki-preview-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .wiki-card-image {
    height: 160px;
  }

  .wiki-card-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .wiki-preview-title {
    font-size: 1.1rem;
  }

  .wiki-preview-description {
    font-size: 0.85rem;
  }

  .wiki-read-more {
    font-size: 0.85rem;
  }

  .wiki-arrow {
    font-size: 1.2rem;
  }

  .tools-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .tool-card {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .tool-icon {
    font-size: 2rem;
  }

  .tool-title {
    font-size: 1.2rem;
  }

  .tool-description {
    font-size: 0.8rem;
  }

  .tool-link {
    padding-top: 0.8rem;
    font-size: 0.8rem;
  }

  .tool-arrow {
    font-size: 1.1rem;
  }

  .section-footer {
    margin-top: 1.2rem;
  }
}
</style>
