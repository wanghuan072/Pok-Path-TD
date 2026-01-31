<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content" v-if="article">
      <div class="container">
        <!-- Main Layout: Left Content + Right Sidebar -->
        <div class="main-layout">
          <!-- Left Column: Main Content -->
          <div class="main-content">
            <!-- Title and Date Section -->
            <section class="content-section title-section">
              <h1 class="article-title">{{ article.title }}</h1>
              <div class="article-meta" v-if="article.publishDate">
                <span class="meta-date">
                  <span class="meta-icon">📅</span>
                  {{ formatDate(article.publishDate) }}
                </span>
              </div>
            </section>

            <!-- Content Section -->
            <section class="content-section content-section-main" v-if="article.detailsHtml">
              <div class="article-content">
                <div class="details-content" v-html="article.detailsHtml"></div>
              </div>
            </section>
          </div>

          <!-- Right Column: Sidebar -->
          <aside class="sidebar">
            <!-- Article Image -->
            <section class="sidebar-section" v-if="article.imageUrl">
              <div class="sidebar-image-container">
                <img 
                  :src="article.imageUrl" 
                  :alt="article.imageAlt || article.title"
                  class="sidebar-image"
                />
              </div>
            </section>

            <!-- Description -->
            <section class="sidebar-section" v-if="article.description">
              <h2 class="sidebar-title">About</h2>
              <p class="sidebar-description">{{ article.description }}</p>
            </section>

            <!-- Tags -->
            <section class="sidebar-section" v-if="article.tags && article.tags.length > 0">
              <h2 class="sidebar-title">Tags</h2>
              <div class="sidebar-tags">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag" 
                  class="sidebar-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </section>

            <!-- Quick Navigation -->
            <section class="sidebar-section">
              <h2 class="sidebar-title">{{ t('WikiDetailView.sidebar.quickNavigation') }}</h2>
              <div class="sidebar-links">
                <a href="/wiki" class="sidebar-link">
                  <span class="sidebar-link-icon">📚</span>
                  <span class="sidebar-link-text">{{ t('WikiDetailView.sidebar.links.allWiki') }}</span>
                  <span class="sidebar-link-arrow">→</span>
                </a>
                <a href="/all-pokemon" class="sidebar-link">
                  <span class="sidebar-link-icon">⚔️</span>
                  <span class="sidebar-link-text">{{ t('WikiDetailView.sidebar.links.allPokemon') }}</span>
                  <span class="sidebar-link-arrow">→</span>
                </a>
                <a href="/map-router" class="sidebar-link">
                  <span class="sidebar-link-icon">🗺️</span>
                  <span class="sidebar-link-text">{{ t('WikiDetailView.sidebar.links.routeStrategies') }}</span>
                  <span class="sidebar-link-arrow">→</span>
                </a>
                <a href="/tools" class="sidebar-link">
                  <span class="sidebar-link-icon">🛠️</span>
                  <span class="sidebar-link-text">{{ t('WikiDetailView.sidebar.links.strategyTools') }}</span>
                  <span class="sidebar-link-arrow">→</span>
                </a>
                <a href="/tier-list" class="sidebar-link">
                  <span class="sidebar-link-icon">⭐</span>
                  <span class="sidebar-link-text">{{ t('WikiDetailView.sidebar.links.tierList') }}</span>
                  <span class="sidebar-link-arrow">→</span>
                </a>
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
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { useSEO } from '../seo/composables.js'
import { useWikiData } from '../composables/useWikiData'

const route = useRoute()
const { t, locale } = useI18n()
const { wikiData, loadData } = useWikiData()
const article = ref(null)
const { setSEO } = useSEO()

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const loadArticle = async () => {
  if (wikiData.value.length === 0) {
    await loadData()
  }
  
  const addressBar = route.params.addressBar
  const found = wikiData.value.find(item => item.addressBar === addressBar)
  
  if (found) {
    article.value = found
    
    // Set SEO
    setSEO({
      title: found.seo?.title || found.title,
      description: found.seo?.description || found.description,
      keywords: found.seo?.keywords || '',
      canonicalUrl: `/wiki/${addressBar}`
    })
  }
}

onMounted(() => {
  loadArticle()
})

watch(() => route.params.addressBar, () => {
  loadArticle()
})

watch(locale, async () => {
  await loadData()
  loadArticle()
})
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Main Layout */
.main-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

@media (min-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr 320px;
    gap: 2.5rem;
  }
}

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Content Sections */
.content-section {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.title-section {
  padding: 2rem;
}

.article-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.7);
}

.meta-icon {
  font-size: 1rem;
}

.content-section-main {
  padding: 2rem;
}

.article-content {
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.8;
  font-size: 1rem;
}

.details-content {
  word-wrap: break-word;
}

.details-content :deep(h2) {
  font-size: 1.8rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 2rem 0 1rem 0;
  line-height: 1.3;
}

.details-content :deep(h2:first-child) {
  margin-top: 0;
}

.details-content :deep(h3) {
  font-size: 1.4rem;
  font-weight: 600;
  color: #f5f8f0;
  margin: 1.5rem 0 0.75rem 0;
  line-height: 1.4;
}

.details-content :deep(p) {
  margin: 0 0 1rem 0;
  color: rgba(245, 248, 240, 0.85);
  line-height: 1.8;
}

.details-content :deep(ul),
.details-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
  color: rgba(245, 248, 240, 0.85);
}

.details-content :deep(li) {
  margin: 0.5rem 0;
  line-height: 1.8;
}

.details-content :deep(strong) {
  color: #6ba3e8;
  font-weight: 600;
}

.details-content :deep(a) {
  color: #6ba3e8;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  transition: all 0.2s ease;
}

.details-content :deep(a:hover) {
  color: #5cb85c;
  border-bottom-color: rgba(92, 184, 92, 0.5);
}

.details-content :deep(img) {
  max-width: 70%;
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-section {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.sidebar-image-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.5);
}

.sidebar-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.sidebar-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 1rem 0;
}

.sidebar-description {
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sidebar-tag {
  padding: 6px 12px;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  font-size: 0.85rem;
  color: #6ba3e8;
  font-weight: 500;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 8px;
  text-decoration: none;
  color: rgba(245, 248, 240, 0.85);
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background: rgba(107, 163, 232, 0.15);
  border-color: rgba(107, 163, 232, 0.4);
  color: #6ba3e8;
  transform: translateX(4px);
}

.sidebar-link-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.sidebar-link-text {
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
}

.sidebar-link-arrow {
  font-size: 1.2rem;
  color: #6ba3e8;
  transition: transform 0.2s ease;
}

.sidebar-link:hover .sidebar-link-arrow {
  transform: translateX(4px);
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .main-layout {
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
  
  .content-section {
    padding: 1.5rem;
  }
  
  .article-title {
    font-size: 1.8rem;
  }
  
  .details-content :deep(h2) {
    font-size: 1.6rem;
  }
  
  .details-content :deep(h3) {
    font-size: 1.3rem;
  }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .main-layout {
    gap: 1.2rem;
    padding: 1.2rem 0;
  }
  
  .content-section {
    padding: 1.2rem;
  }
  
  .title-section {
    padding: 1.2rem;
  }
  
  .article-title {
    font-size: 1.6rem;
  }
  
  .article-content {
    font-size: 0.95rem;
  }
  
  .details-content :deep(h2) {
    font-size: 1.4rem;
    margin: 1.5rem 0 0.75rem 0;
  }
  
  .details-content :deep(h3) {
    font-size: 1.2rem;
    margin: 1.2rem 0 0.6rem 0;
  }
  
  .details-content :deep(p) {
    font-size: 0.95rem;
    margin: 0 0 0.8rem 0;
  }
  
  .details-content :deep(ul),
  .details-content :deep(ol) {
    padding-left: 1.5rem;
  }
  
  .sidebar-section {
    padding: 1.2rem;
  }
}
</style>
