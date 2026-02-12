<template>
  <div class="page-view">
    <AppHeader />
    
      <div class="page-content" v-if="game">
      <div class="container">
        <!-- Main Layout: Left Content + Right Sidebar -->
        <div class="main-layout">
          <!-- Left Column: Main Content -->
          <div class="main-content">
            <!-- First Section: H1 + Game Play -->
            <section class="content-section first-section">
              <h1 class="game-title">{{ game.name }}</h1>
              <div class="game-container">
                <div class="game-wrapper-large">
                  <template v-if="game.iframeSrc">
                    <div v-if="!isPlaying" class="game-overlay">
                      <div class="overlay-background" :style="{ backgroundImage: `url(${game.imageUrl})` }"></div>
                      <div class="overlay-backdrop"></div>
                      <button class="play-button" @click="isPlaying = true">
                        <span class="play-icon">▶</span>
                        <!-- <span class="play-text">PLAY GAME</span> -->
                      </button>
                    </div>
                    <iframe 
                      v-else
                      :src="game.iframeSrc" 
                      class="game-iframe-large" 
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </template>
                  <div v-else class="game-placeholder-large">
                    <div class="placeholder-content">
                      <span class="placeholder-icon">🎮</span>
                      <p>Game loading...</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Second Section: Version Switcher -->
            <section class="content-section second-section">
              <div class="version-switcher">
                <h3 class="switcher-title">Select Game Version</h3>
                <div class="version-tabs">
                  <button
                    v-for="g in allGames"
                    :key="g.id"
                    @click="switchGame(g.addressBar)"
                    :class="['version-tab', { active: g.addressBar === game.addressBar }]"
                  >
                    <span class="tab-icon">🎮</span>
                    <span class="tab-text">{{ g.name }}</span>
                  </button>
                </div>
              </div>
            </section>

            <!-- Third Section: Details HTML -->
            <section class="content-section third-section" v-if="game.detailsHtml">
              <div class="details-card">
                <div class="details-content" v-html="game.detailsHtml"></div>
              </div>
            </section>
          </div>

          <!-- Right Column: Sidebar -->
          <aside class="sidebar">
            <!-- Game Image -->
            <section class="sidebar-section" v-if="game.imageUrl">
              <div class="sidebar-image-container">
                <img 
                  :src="game.imageUrl" 
                  :alt="game.imageAlt || game.name"
                  class="sidebar-image"
                />
              </div>
            </section>

            <!-- Description -->
            <section class="sidebar-section" v-if="game.description">
              <h2 class="sidebar-title">About</h2>
              <p class="sidebar-description">{{ game.description }}</p>
            </section>

            <!-- Quick Links -->
            <section class="sidebar-section">
              <h2 class="sidebar-title">Quick Links</h2>
              <div class="sidebar-links">
                <router-link :to="localePath('/all-pokemon')" class="sidebar-link">
                  <span class="sidebar-link-icon">⚔️</span>
                  <span class="sidebar-link-text">All Pokémon Database</span>
                  <span class="sidebar-link-arrow">→</span>
                </router-link>
                <router-link :to="localePath('/map-router')" class="sidebar-link">
                  <span class="sidebar-link-icon">🗺️</span>
                  <span class="sidebar-link-text">Route Strategies</span>
                  <span class="sidebar-link-arrow">→</span>
                </router-link>
                <router-link :to="localePath('/tools')" class="sidebar-link">
                  <span class="sidebar-link-icon">🛠️</span>
                  <span class="sidebar-link-text">Strategy Tools</span>
                  <span class="sidebar-link-arrow">→</span>
                </router-link>
                <router-link :to="localePath('/wiki')" class="sidebar-link">
                  <span class="sidebar-link-icon">📖</span>
                  <span class="sidebar-link-text">Game Wiki</span>
                  <span class="sidebar-link-arrow">→</span>
                </router-link>
                <router-link :to="localePath('/tier-list')" class="sidebar-link">
                  <span class="sidebar-link-icon">📊</span>
                  <span class="sidebar-link-text">Tier List</span>
                  <span class="sidebar-link-arrow">→</span>
                </router-link>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { useGameData } from '../composables/useGameData'
import { useSEO } from '../seo/composables.js'
import { useLocalePath } from '@/utils/useLocalePath'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const { gamesData, loadData } = useGameData()
const { setSEO } = useSEO()

const { localePath } = useLocalePath()
const game = ref(null)
const isPlaying = ref(false)
const allGames = computed(() => gamesData.value)

// Find game by addressBar
const loadGame = (addressBar) => {
  if (!gamesData.value.length) return

  const foundGame = gamesData.value.find(g => g.addressBar === addressBar)
  
  if (foundGame) {
    game.value = foundGame
    isPlaying.value = false
    
    // Set SEO
    if (foundGame.seo?.title) {
      setSEO({
        title: foundGame.seo.title,
        description: foundGame.seo.description || foundGame.description || `Play ${foundGame.name} - PokéPath TD`,
        keywords: foundGame.seo.keywords || `${foundGame.name}, PokéPath TD, Tower Defense Game`,
        canonical: `${window.location.origin}/game/${foundGame.addressBar}`
      })
    }
  } else {
    // Game not found, redirect to home
    router.push(localePath('/'))
  }
}

// Switch to another game version
const switchGame = (addressBar) => {
  router.push(localePath(`/game/${addressBar}`))
}

// Watch route changes
watch(() => route.params.addressBar, (newAddressBar) => {
  if (newAddressBar) {
    loadGame(newAddressBar)
  }
})

// Watch data changes (e.g. after initial load or locale change)
watch(gamesData, () => {
  const addressBar = route.params.addressBar
  if (addressBar) {
    loadGame(addressBar)
  }
})

// Watch locale changes to reload data
watch(locale, () => {
  loadData()
})

onMounted(async () => {
  await loadData()
  const addressBar = route.params.addressBar
  if (addressBar) {
    loadGame(addressBar)
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
/* Version Switcher */
.version-switcher {
  width: 100%;
}

.switcher-title {
  font-size: 1rem;
  color: rgba(245, 248, 240, 0.7);
  margin: 0 0 1rem 0;
  text-align: center;
  font-weight: 500;
}

.version-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.version-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(26, 35, 50, 0.7);
  border: 2px solid rgba(107, 163, 232, 0.2);
  border-radius: 8px;
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.version-tab:hover {
  border-color: rgba(107, 163, 232, 0.5);
  background: rgba(107, 163, 232, 0.1);
  transform: translateY(-2px);
}

.version-tab.active {
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border-color: #6ba3e8;
  color: #f5f8f0;
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.3);
}

.tab-icon {
  font-size: 1.2rem;
}

.tab-text {
  font-weight: 600;
}

/* Main Layout */
.main-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  align-items: start;
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-section {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

/* First Section: H1 + Game */
.first-section {
  padding: 0;
  background: transparent;
  border: none;
}

.game-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f5f8f0;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #f5f8f0 0%, #6ba3e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-container {
  background: rgba(20, 28, 42, 0.8);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid rgba(107, 163, 232, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.game-wrapper-large {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(15, 20, 30, 0.9);
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(107, 163, 232, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.game-iframe-large {
  width: 100%;
  height: 100%;
  border: none;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.overlay-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  transform: scale(1.1);
}

.overlay-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 20, 30, 0.6);
}

.play-button {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: rgba(107, 163, 232, 0.2);
  border: 2px solid #6ba3e8;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 30px rgba(107, 163, 232, 0.3);
}

.play-button:hover {
  transform: scale(1.1);
  background: rgba(107, 163, 232, 0.8);
  box-shadow: 0 0 50px rgba(107, 163, 232, 0.6);
}

.play-icon {
  font-size: 3rem;
  color: #f5f8f0;
  margin-left: 8px; /* Visual centering adjustment for triangle */
}

.play-text {
  font-size: 0.9rem;
  font-weight: 800;
  color: #f5f8f0;
  letter-spacing: 1px;
}

.play-button:hover .play-icon,
.play-button:hover .play-text {
  color: #fff;
}

.game-placeholder-large {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.5);
}

.placeholder-content {
  text-align: center;
  color: rgba(245, 248, 240, 0.7);
}

.placeholder-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

/* Second Section: Version Switcher */
.second-section {
  padding: 1.5rem;
}

/* Third Section: Details HTML */
.third-section {
  padding: 0;
  background: transparent;
  border: none;
}

.details-card {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.details-content {
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.8;
  font-size: 1rem;
}

/* Base Elements */
.details-content :deep(h1),
.details-content :deep(h2),
.details-content :deep(h3),
.details-content :deep(h4) {
  color: #6ba3e8;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 700;
}

.details-content :deep(h1) { 
  font-size: 2rem; 
  border-bottom: 1px solid rgba(107, 163, 232, 0.3); 
  padding-bottom: 0.5rem; 
}

.details-content :deep(h2) { 
  font-size: 1.6rem;
  color: #f5f8f0;
  border-left: 4px solid #6ba3e8;
  padding-left: 1rem;
}

.details-content :deep(h3) { 
  font-size: 1.3rem; 
  color: #8abcf5;
}

.details-content :deep(p) {
  margin-bottom: 1.2rem;
}

.details-content :deep(strong) {
  color: #6ba3e8;
  font-weight: 700;
}

.details-content :deep(em) {
  color: #e6cc80;
  font-style: italic;
}

/* Lists */
.details-content :deep(ul),
.details-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.details-content :deep(li) {
  margin-bottom: 0.5rem;
  position: relative;
}

.details-content :deep(li)::marker {
  color: #6ba3e8;
}

/* Links */
.details-content :deep(a) {
  color: #6ba3e8;
  text-decoration: none;
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  transition: all 0.2s ease;
  font-weight: 500;
}

.details-content :deep(a):hover {
  color: #f5f8f0;
  background: #6ba3e8;
  border-bottom-color: transparent;
  padding: 0 4px;
  border-radius: 4px;
}

/* Images */
.details-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 1px solid rgba(107, 163, 232, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Tables */
.details-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: rgba(26, 35, 50, 0.4);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.details-content :deep(th) {
  background: rgba(107, 163, 232, 0.2);
  color: #f5f8f0;
  font-weight: 700;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid rgba(107, 163, 232, 0.3);
}

.details-content :deep(td) {
  padding: 1rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
  color: rgba(245, 248, 240, 0.8);
}

.details-content :deep(tr):last-child td {
  border-bottom: none;
}

.details-content :deep(tr):hover td {
  background: rgba(107, 163, 232, 0.05);
  color: #f5f8f0;
}

/* Special Sections */
.details-content :deep(.hero-section),
.details-content :deep(.intro-section) {
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.15), rgba(20, 28, 42, 0.6));
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-left: 4px solid #6ba3e8;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.details-content :deep(.hero-section) p,
.details-content :deep(.intro-section) p {
  font-size: 1.1rem;
  color: #f5f8f0;
  margin-bottom: 0;
}

.details-content :deep(.faq-section) {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.details-content :deep(.faq-section) h3 {
  color: #e6cc80;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.details-content :deep(.faq-section) h3::before {
  content: "Q.";
  color: #6ba3e8;
  font-weight: 900;
  font-size: 1.4rem;
}

.details-content :deep(.faq-section) p {
  padding-left: 2rem;
  color: rgba(245, 248, 240, 0.8);
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 2rem;
}

.sidebar-section {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.sidebar-image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.sidebar-image {
  width: 100%;
  height: auto;
  display: block;
}

.sidebar-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

.sidebar-description {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem;
  background: rgba(26, 35, 50, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 8px;
  text-decoration: none;
  color: rgba(245, 248, 240, 0.9);
  transition: all 0.3s ease;
}

.sidebar-link:hover {
  border-color: #6ba3e8;
  background: rgba(107, 163, 232, 0.1);
  transform: translateX(4px);
}

.sidebar-link-icon {
  font-size: 1.3rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.1);
  border-radius: 8px;
  flex-shrink: 0;
}

.sidebar-link-text {
  flex: 1;
  font-weight: 500;
  font-size: 0.95rem;
}

.sidebar-link-arrow {
  color: #6ba3e8;
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.sidebar-link:hover .sidebar-link-arrow {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .version-tabs {
    flex-direction: column;
  }

  .version-tab {
    width: 100%;
    justify-content: center;
  }

  .game-title {
    font-size: 2rem;
  }

  .game-container {
    padding: 1.5rem;
  }

  .content-section {
    padding: 1.5rem;
  }

  .details-card {
    padding: 1.5rem;
  }

  .sidebar-section {
    padding: 1.2rem;
  }

  .details-content {
    font-size: 0.9rem;
  }
}
</style>
