<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">🎒</span>
            <span class="badge-text">{{ t('ItemsView.pageBadge') }}</span>
          </div>
          <h1 class="page-title">{{ t('ItemsView.pageTitle') }}</h1>
          <p class="page-subtitle">
            {{ t('ItemsView.pageSubtitle') }}
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Items Table -->
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
                <th class="col-image">{{ t('ItemsView.table.image') }}</th>
                <th class="col-name sortable" @click="sortBy('name')">
                  {{ t('ItemsView.table.name') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'name'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else-if="sortField === null">↑↓</span>
                  </span>
                </th>
                <th class="col-price sortable" @click="sortBy('price')">
                  {{ t('ItemsView.table.price') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'price'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else-if="sortField === null">↑↓</span>
                  </span>
                </th>
                <th class="col-description">{{ t('ItemsView.table.description') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in sortedItems" :key="item.id" class="item-row">
                <td class="col-image">
                  <div class="item-image-cell">
                    <img
                      v-if="item.imageUrl"
                      :src="item.imageUrl"
                      :alt="item.imageAlt || item.name"
                      class="item-image"
                    />
                    <div v-else class="item-image-placeholder">
                      {{ item.name.charAt(0) }}
                    </div>
                  </div>
                </td>
                <td class="col-name">
                  <div class="item-name-cell">
                    <strong>{{ item.name }}</strong>
                  </div>
                </td>
                <td class="col-price">
                  <span class="price-value">${{ formatNumber(item.price) }}</span>
                </td>
                <td class="col-description">
                  <p class="item-description">{{ item.description }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Introduction Section -->
      <section class="intro-section">
        <div class="container">
          <div class="intro-card">
            <h2 class="intro-title">{{ t('ItemsView.intro.title') }}</h2>
            <div class="intro-content">
              <p>
                {{ t('ItemsView.intro.p1') }}
              </p>
              <div class="intro-steps">
                <div class="intro-step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>{{ t('ItemsView.intro.steps.step1.title') }}</h4>
                    <p>{{ t('ItemsView.intro.steps.step1.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>{{ t('ItemsView.intro.steps.step2.title') }}</h4>
                    <p>{{ t('ItemsView.intro.steps.step2.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>{{ t('ItemsView.intro.steps.step3.title') }}</h4>
                    <p>{{ t('ItemsView.intro.steps.step3.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h4>{{ t('ItemsView.intro.steps.step4.title') }}</h4>
                    <p>{{ t('ItemsView.intro.steps.step4.desc') }}</p>
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
            <h2 class="faq-title">{{ t('ItemsView.faq.title') }}</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q1') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a1') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q2') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a2') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q3') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a3') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q4') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a4') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q5') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a5') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('ItemsView.faq.q6') }}</h3>
                <p class="faq-answer">
                  {{ t('ItemsView.faq.a6') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
import { useItemsData } from '../composables/useItemsData'
import { useSEO } from '../seo/composables.js'

const route = useRoute()
const { locale, t } = useI18n()
const { itemsData, loadData } = useItemsData()
const { setSEO } = useSEO()

// Set SEO from route meta
onMounted(() => {
  loadData()
  if (route.meta?.title) {
    setSEO({
      title: route.meta.title,
      description: route.meta.description || 'Complete PokéPath TD items database with detailed effects and strategic usage guides.',
      keywords: route.meta.keywords || 'Items Database, Held Items, Item Effects, Equipment Guide',
      canonical: `${window.location.origin}/items`
    })
  }
})

watch(locale, () => {
  loadData()
})

// Sorting
const sortField = ref(null)
const sortOrder = ref('asc')

const sortBy = (field) => {
  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortOrder.value = 'asc'
  }
}

// Sorted items
const sortedItems = computed(() => {
  const items = [...itemsData.value]

  // If no sort field is selected, return items in original order
  if (!sortField.value) {
    return items
  }

  items.sort((a, b) => {
    let aVal = a[sortField.value]
    let bVal = b[sortField.value]

    // Handle null values
    if (aVal === null) aVal = -1
    if (bVal === null) bVal = -1

    // Compare values
    if (typeof aVal === 'string') {
      return sortOrder.value === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    } else {
      return sortOrder.value === 'asc' ? aVal - bVal : bVal - aVal
    }
  })

  return items
})

// Format number with commas
const formatNumber = (num) => {
  if (num === null || num === undefined) return '0'
  return num.toLocaleString()
}
</script>

<style scoped>
/* Page View and Content styles are now in main.css */
/* Page Header styles are now in main.css */

.table-wrapper {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(107, 163, 232, 0.2);
  backdrop-filter: blur(10px);
  overflow-x: auto;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
}

.items-table thead {
  background: rgba(107, 163, 232, 0.1);
  border-bottom: 2px solid rgba(107, 163, 232, 0.3);
}

.items-table th {
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.85rem;
  color: #6ba3e8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.items-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
  padding-right: 1.5rem;
}

.items-table th.sortable:hover {
  background: rgba(107, 163, 232, 0.15);
  color: #8bb5f0;
}

.sort-indicator {
  position: absolute;
  right: 0.4rem;
  font-size: 0.7rem;
  color: #6ba3e8;
}

.items-table td {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.9rem;
  vertical-align: middle;
}

.items-table tbody tr {
  transition: background 0.2s ease;
}

.items-table tbody tr:hover {
  background: rgba(107, 163, 232, 0.05);
}

.items-table tbody tr:last-child td {
  border-bottom: none;
}

/* Column widths */
.col-image {
  width: 100px;
  min-width: 100px;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 2rem;
}

.col-name {
  width: 220px;
  min-width: 220px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.col-price {
  width: 140px;
  min-width: 140px;
  text-align: right;
  padding-left: 2rem;
  padding-right: 2rem;
}

.col-description {
  min-width: 500px;
  padding-left: 2rem;
  padding-right: 1.5rem;
}

/* Ensure table header and body cells align */
.items-table th.col-image,
.items-table td.col-image {
  text-align: center;
}

.items-table th.col-price,
.items-table td.col-price {
  text-align: right;
}

/* Image cell */
.item-image-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.item-image-placeholder {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #6ba3e8;
}

/* Name cell */
.item-name-cell {
  display: flex;
  align-items: center;
}

.item-name-cell strong {
  color: #f5f8f0;
  font-size: 0.95rem;
  font-weight: 600;
}

/* Price cell */
.price-value {
  color: #5cb85c;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Description cell */
.item-description {
  margin: 0;
  line-height: 1.5;
  color: rgba(245, 248, 240, 0.8);
}


/* Introduction Section */
.intro-section {
  padding: 3rem 0;
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

/* Responsive */
@media (max-width: 768px) {
  .table-wrapper {
    overflow-x: scroll;
  }

  .items-table {
    min-width: 800px;
  }

  .intro-card,
  .faq-card {
    padding: 1.5rem;
  }

  .intro-title,
  .faq-title {
    font-size: 1.3rem;
  }

  .intro-steps {
    gap: 1.2rem;
  }

  .step-number {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.1rem;
  }

  .faq-list {
    gap: 1.2rem;
  }

  .faq-item {
    padding: 1.2rem;
  }
}
</style>
