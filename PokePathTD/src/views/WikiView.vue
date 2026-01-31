<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">📚</span>
            <span class="badge-text">{{ t('WikiView.pageBadge') }}</span>
          </div>
          <h1 class="page-title">{{ t('WikiView.title') }}</h1>
          <p class="page-subtitle">
            {{ t('WikiView.subtitle') }}
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Wiki Articles Grid -->
        <section class="page-section">
          <div class="wiki-grid">
            <article 
              v-for="article in wikiArticles" 
              :key="article.id" 
              class="wiki-card"
              @click="goToWikiDetail(article.addressBar)"
            >
              <div class="wiki-card-image">
                <img 
                  :src="article.imageUrl" 
                  :alt="article.imageAlt || article.title"
                  class="card-image"
                />
                <div class="card-overlay"></div>
                <div class="card-badge" v-if="article.tags && article.tags.length > 0">
                  <span class="badge-text">{{ article.tags[0] }}</span>
                </div>
              </div>
              <div class="wiki-card-content">
                <h2 class="card-title">{{ article.title }}</h2>
                <p class="card-description">{{ article.description }}</p>
                <div class="card-footer">
                  <span class="card-date" v-if="article.publishDate">
                    {{ formatDate(article.publishDate) }}
                  </span>
                  <div class="card-tags" v-if="article.tags && article.tags.length > 0">
                    <span 
                      v-for="tag in article.tags.slice(0, 3)" 
                      :key="tag" 
                      class="tag-item"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useSEO } from '@/seo/composables.js'
import { useWikiData } from '@/composables/useWikiData'

const router = useRouter()
const { locale, t } = useI18n()
const { wikiData, loadData } = useWikiData()
const { setSEO } = useSEO()

onMounted(() => {
  // SEO Configuration
  setSEO({
    title: 'PokéPath TD Wiki - Complete Game Guide & Tips',
    description: 'Your ultimate PokéPath TD wiki resource, featuring comprehensive game mechanics, advanced strategies, and expert tips to master every aspect of PokéPath TD gameplay.',
    keywords: 'PokéPath TD Wiki, Game Guide, Strategy Guide, Tips and Tricks, Game Mechanics',
    canonicalUrl: '/wiki'
  })
  
  loadData()
})

watch(locale, () => {
  loadData()
})

const wikiArticles = computed(() => wikiData.value)

const goToWikiDetail = (addressBar) => {
  router.push(`/wiki/${addressBar}`)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Section */
.page-section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

/* Wiki Grid */
.wiki-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Wiki Card */
.wiki-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.wiki-card:hover {
  border-color: #6ba3e8;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(107, 163, 232, 0.4);
}

/* Card Image Section */
.wiki-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.wiki-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
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

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
}

.badge-text {
  padding: 6px 12px;
  background: rgba(107, 163, 232, 0.9);
  border: 1px solid rgba(107, 163, 232, 1);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #f5f8f0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Card Content Section */
.wiki-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.card-date {
  font-size: 0.8rem;
  color: rgba(245, 248, 240, 0.6);
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-item {
  padding: 4px 10px;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #6ba3e8;
  font-weight: 500;
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .page-section {
    padding: 32px 0;
  }
  
  .wiki-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .wiki-card-image {
    height: 180px;
  }
  
  .wiki-card-content {
    padding: 18px;
    gap: 10px;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-description {
    font-size: 0.85rem;
  }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .page-section {
    padding: 1.2rem 0;
  }
  
  .wiki-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  
  .wiki-card-image {
    height: 160px;
  }
  
  .wiki-card-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-description {
    font-size: 0.85rem;
    -webkit-line-clamp: 2;
  }
  
  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  
  .card-tags {
    width: 100%;
  }
}
</style>
