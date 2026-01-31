<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">👹</span>
            <span class="badge-text">{{ t('EnemyDatabaseView.pageBadge') }}</span>
          </div>
          <h1 class="page-title">{{ t('EnemyDatabaseView.pageTitle') }}</h1>
          <p class="page-subtitle">{{ t('EnemyDatabaseView.pageSubtitle') }}</p>
        </div>
      </section>

      <div class="container">
        <!-- Enemy Table -->
        <div class="table-wrapper">
          <table class="enemy-table">
            <thead>
              <tr>
                <th class="col-image">{{ t('EnemyDatabaseView.table.image') }}</th>
                <th class="col-name sortable" @click="sortBy('name')">
                  {{ t('EnemyDatabaseView.table.name') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'name'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-threat sortable" @click="sortBy('threat')">
                  {{ t('EnemyDatabaseView.table.threat') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'threat'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-hp sortable" @click="sortBy('hp')">
                  {{ t('EnemyDatabaseView.table.hp') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'hp'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-armor sortable" @click="sortBy('armor')">
                  {{ t('EnemyDatabaseView.table.armor') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'armor'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-speed sortable" @click="sortBy('speed')">
                  {{ t('EnemyDatabaseView.table.speed') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'speed'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-gold sortable" @click="sortBy('gold')">
                  {{ t('EnemyDatabaseView.table.gold') }}
                  <span class="sort-indicator">
                    <span v-if="sortField === 'gold'">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
                    <span v-else>↑↓</span>
                  </span>
                </th>
                <th class="col-regeneration">{{ t('EnemyDatabaseView.table.regeneration') }}</th>
                <th class="col-invisible">{{ t('EnemyDatabaseView.table.invisible') }}</th>
                <th class="col-resistances">{{ t('EnemyDatabaseView.table.resistances') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="enemy in sortedEnemies" :key="enemy.id" class="enemy-row">
                <td class="col-image">
                  <div class="enemy-image-cell">
                    <img
                      v-if="enemy.imageUrl"
                      :src="enemy.imageUrl"
                      :alt="enemy.imageAlt || enemy.name"
                      class="enemy-image"
                    />
                    <div v-else class="enemy-image-placeholder">
                      {{ enemy.name.charAt(0) }}
                    </div>
                  </div>
                </td>
                <td class="col-name">
                  <div class="enemy-name-cell">
                    <strong>{{ enemy.name }}</strong>
                    <span class="enemy-id">ID: {{ enemy.id }}</span>
                  </div>
                </td>
                <td class="col-threat">
                  <span class="threat-badge" :class="getThreatClass(enemy.threat)">
                    {{ enemy.threat }}
                  </span>
                </td>
                <td class="col-hp">{{ formatNumber(enemy.hp) }}</td>
                <td class="col-armor">
                  {{ enemy.armor === null ? '-' : formatNumber(enemy.armor) }}
                </td>
                <td class="col-speed">{{ enemy.speed }}</td>
                <td class="col-gold">{{ formatNumber(enemy.gold) }}</td>
                <td class="col-regeneration">{{ enemy.regeneration }}</td>
                <td class="col-invisible">
                  <span v-if="enemy.invisible" class="invisible-badge">{{ t('EnemyDatabaseView.table.yes') }}</span>
                  <span v-else class="no-badge">{{ t('EnemyDatabaseView.table.no') }}</span>
                </td>
                <td class="col-resistances">
                  <div
                    v-if="enemy.resistances && enemy.resistances.length > 0"
                    class="resistances-list"
                  >
                    <span
                      v-for="resistance in enemy.resistances"
                      :key="resistance"
                      class="resistance-tag"
                    >
                      {{ resistance }}
                    </span>
                  </div>
                  <span v-else class="no-resistances">{{ t('EnemyDatabaseView.table.noResistances') }}</span>
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
            <h2 class="intro-title">{{ t('EnemyDatabaseView.intro.title') }}</h2>
            <div class="intro-content">
              <p>
                {{ t('EnemyDatabaseView.intro.p1') }}
              </p>
              <div class="intro-steps">
                <div class="intro-step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>{{ t('EnemyDatabaseView.intro.steps.step1.title') }}</h4>
                    <p>{{ t('EnemyDatabaseView.intro.steps.step1.desc') }}</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>{{ t('EnemyDatabaseView.intro.steps.step2.title') }}</h4>
                    <p>
                      {{ t('EnemyDatabaseView.intro.steps.step2.desc') }}
                    </p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>{{ t('EnemyDatabaseView.intro.steps.step3.title') }}</h4>
                    <p>
                      {{ t('EnemyDatabaseView.intro.steps.step3.desc') }}
                    </p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h4>{{ t('EnemyDatabaseView.intro.steps.step4.title') }}</h4>
                    <p>
                      {{ t('EnemyDatabaseView.intro.steps.step4.desc') }}
                    </p>
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
            <h2 class="faq-title">{{ t('EnemyDatabaseView.faq.title') }}</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q1') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a1') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q2') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a2') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q3') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a3') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q4') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a4') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q5') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a5') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">{{ t('EnemyDatabaseView.faq.q6') }}</h3>
                <p class="faq-answer">
                  {{ t('EnemyDatabaseView.faq.a6') }}
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
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { useEnemyData } from '../composables/useEnemyData'

// Sorting
const sortField = ref('name')
const sortOrder = ref('asc')
const { t, locale } = useI18n()
const { enemyData, loadData } = useEnemyData()

onMounted(() => {
  loadData()
})

watch(locale, () => {
  loadData()
})

const sortBy = (field) => {
  if (sortField.value === field) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = field
    sortOrder.value = 'asc'
  }
}

// Sorted enemies
const sortedEnemies = computed(() => {
  const enemies = [...enemyData.value]

  enemies.sort((a, b) => {
    let aVal = a[sortField.value]
    let bVal = b[sortField.value]

    // Handle null values
    if (aVal === null) aVal = -1
    if (bVal === null) bVal = -1

    // Handle threat sorting (extract emoji and compare)
    if (sortField.value === 'threat') {
      const threatOrder = { '✅': 1, '⚔️': 2, '⚡': 3, '💀': 4, '🔥': 5 }
      const aEmoji = aVal.charAt(0)
      const bEmoji = bVal.charAt(0)
      aVal = threatOrder[aEmoji] || 0
      bVal = threatOrder[bEmoji] || 0
    }

    // Compare values
    if (typeof aVal === 'string') {
      return sortOrder.value === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    } else {
      return sortOrder.value === 'asc' ? aVal - bVal : bVal - aVal
    }
  })

  return enemies
})

// Format number with commas
const formatNumber = (num) => {
  if (num === null || num === undefined) return '-'
  return num.toLocaleString()
}

// Get threat info
const getThreatInfo = (threatString) => {
  if (!threatString) return { emoji: '', value: 0, key: 'normal', class: '' }
  
  // Normalize string: remove emojis if present and trim
  const clean = threatString.replace(/✅|⚔️|⚡|💀|🔥/g, '').trim()
  
  const map = {
    'Normal': { emoji: '✅', value: 1, key: 'normal', class: 'threat-normal' },
    'Strong': { emoji: '⚔️', value: 2, key: 'strong', class: 'threat-strong' },
    'Elite': { emoji: '⚡', value: 3, key: 'elite', class: 'threat-elite' },
    'Boss': { emoji: '💀', value: 4, key: 'boss', class: 'threat-boss' },
    'Legendary': { emoji: '🔥', value: 5, key: 'legendary', class: 'threat-legendary' }
  }
  
  return map[clean] || { emoji: '', value: 0, key: 'normal', class: '' }
}

// Get threat class for styling (kept for compatibility if needed, but getThreatInfo handles it now)
const getThreatClass = (threat) => {
  return getThreatInfo(threat).class
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
}

.enemy-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1200px;
}

.enemy-table thead {
  background: rgba(107, 163, 232, 0.1);
  border-bottom: 2px solid rgba(107, 163, 232, 0.3);
}

.enemy-table th {
  padding: 0.6rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.8rem;
  color: #6ba3e8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.enemy-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
  padding-right: 1.5rem;
}

.enemy-table th.sortable:hover {
  background: rgba(107, 163, 232, 0.15);
  color: #8bb5f0;
}

.sort-indicator {
  position: absolute;
  right: 0.4rem;
  font-size: 0.7rem;
  color: #6ba3e8;
}

.enemy-table td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.85rem;
}

.enemy-table tbody tr {
  transition: background 0.2s ease;
}

.enemy-table tbody tr:hover {
  background: rgba(107, 163, 232, 0.05);
}

.enemy-table tbody tr:last-child td {
  border-bottom: none;
}

/* Column widths */
.col-image {
  width: 80px;
  min-width: 80px;
}

.col-name {
  width: 180px;
  min-width: 180px;
}

.col-threat {
  width: 120px;
  min-width: 120px;
}

.col-hp,
.col-armor,
.col-speed,
.col-gold {
  width: 110px;
  min-width: 110px;
  text-align: right;
}

.col-regeneration {
  width: 130px;
  min-width: 130px;
}

.col-invisible {
  width: 100px;
  min-width: 100px;
  text-align: center;
}

.col-resistances {
  min-width: 200px;
}

/* Image cell */
.enemy-image-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
}

.enemy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.enemy-image-placeholder {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 4px;
  color: #6ba3e8;
  font-weight: 600;
  font-size: 1rem;
}

/* Name cell */
.enemy-name-cell {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.enemy-name-cell strong {
  color: #f5f8f0;
  font-size: 0.85rem;
}

.enemy-id {
  font-size: 0.7rem;
  color: rgba(245, 248, 240, 0.6);
  font-family: monospace;
}

/* Threat badge */
.threat-badge {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}

.threat-normal {
  background: rgba(92, 184, 92, 0.2);
  color: #5cb85c;
  border: 1px solid rgba(92, 184, 92, 0.3);
}

.threat-strong {
  background: rgba(240, 173, 78, 0.2);
  color: #f0ad4e;
  border: 1px solid rgba(240, 173, 78, 0.3);
}

.threat-elite {
  background: rgba(217, 83, 79, 0.2);
  color: #d9534f;
  border: 1px solid rgba(217, 83, 79, 0.3);
}

.threat-boss {
  background: rgba(153, 102, 204, 0.2);
  color: #9966cc;
  border: 1px solid rgba(153, 102, 204, 0.3);
}

.threat-legendary {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

/* Invisible badge */
.invisible-badge {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  background: rgba(107, 163, 232, 0.2);
  color: #6ba3e8;
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.no-badge {
  color: rgba(245, 248, 240, 0.5);
  font-size: 0.75rem;
}

/* Resistances */
.resistances-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.resistance-tag {
  display: inline-block;
  padding: 0.15rem 0.4rem;
  background: rgba(92, 184, 92, 0.2);
  color: #5cb85c;
  border: 1px solid rgba(92, 184, 92, 0.3);
  border-radius: 3px;
  font-size: 0.7rem;
  white-space: nowrap;
}

.no-resistances {
  color: rgba(245, 248, 240, 0.5);
  font-size: 0.75rem;
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
  padding: 2rem 0;
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
  .table-wrapper { overflow-x: auto; }
  .enemy-table { min-width: 1000px; }
  .enemy-table th { padding: 0.5rem 0.8rem; font-size: 0.75rem; }
  .enemy-table td { padding: 0.5rem 0.8rem; font-size: 0.8rem; }
  .enemy-image-cell { width: 40px; height: 40px; }
  .enemy-image-placeholder { width: 40px; height: 40px; font-size: 0.9rem; }
  .enemy-name-cell strong { font-size: 0.8rem; }
  .enemy-id { font-size: 0.65rem; }
  .threat-badge { padding: 0.15rem 0.3rem; font-size: 0.7rem; }
  .invisible-badge { padding: 0.15rem 0.3rem; font-size: 0.7rem; }
  .resistance-tag { padding: 0.1rem 0.3rem; font-size: 0.65rem; }
  .intro-section { padding: 1.8rem 0; }
  .intro-card { padding: 1.8rem; }
  .intro-title { font-size: 1.4rem; margin-bottom: 1.3rem; }
  .intro-content p { font-size: 0.95rem; margin-bottom: 1.8rem; }
  .intro-steps { gap: 1.3rem; }
  .step-number { width: 2.2rem; height: 2.2rem; font-size: 1.1rem; }
  .step-content h4 { font-size: 1.05rem; }
  .step-content p { font-size: 0.9rem; }
  .faq-section { padding: 1.8rem 0; }
  .faq-card { padding: 1.8rem; }
  .faq-title { font-size: 1.4rem; margin-bottom: 1.8rem; }
  .faq-list { gap: 1.3rem; }
  .faq-item { padding: 1.3rem; }
  .faq-question { font-size: 1.05rem; margin-bottom: 0.6rem; }
  .faq-answer { font-size: 0.9rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .table-wrapper { overflow-x: auto; margin: 0 -1.2rem; border-radius: 0; }
  .enemy-table { min-width: 800px; }
  .enemy-table th { padding: 0.4rem 0.6rem; font-size: 0.7rem; }
  .enemy-table td { padding: 0.4rem 0.6rem; font-size: 0.75rem; }
  .col-image { width: 60px; min-width: 60px; }
  .col-name { width: 140px; min-width: 140px; }
  .col-threat { width: 100px; min-width: 100px; }
  .col-hp, .col-armor, .col-speed, .col-gold { width: 80px; min-width: 80px; }
  .col-regeneration { width: 100px; min-width: 100px; }
  .col-invisible { width: 80px; min-width: 80px; }
  .col-resistances { min-width: 150px; }
  .enemy-image-cell { width: 35px; height: 35px; }
  .enemy-image-placeholder { width: 35px; height: 35px; font-size: 0.8rem; }
  .enemy-name-cell strong { font-size: 0.75rem; }
  .enemy-id { font-size: 0.6rem; }
  .threat-badge { padding: 0.1rem 0.25rem; font-size: 0.65rem; }
  .invisible-badge { padding: 0.1rem 0.25rem; font-size: 0.65rem; }
  .resistance-tag { padding: 0.05rem 0.25rem; font-size: 0.6rem; }
  .resistances-list { gap: 0.2rem; }
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

