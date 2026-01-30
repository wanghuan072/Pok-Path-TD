<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <button class="modal-close" @click="closeModal" aria-label="Close">×</button>
      
      <div class="modal-content" v-if="selectedPokemon">
        <!-- Evolution Chain -->
        <div class="evolution-chain">
          <div 
            v-for="pokemon in evolutionFamily" 
            :key="pokemon.id"
            class="evolution-card"
            :class="{ active: pokemon.id === selectedPokemon.id }"
            @click="selectPokemon(pokemon)"
          >
            <div class="evolution-image">
              <img 
                v-if="pokemon.imageUrl" 
                :src="pokemon.imageUrl" 
                :alt="pokemon.name"
                class="evolution-img"
              />
              <div v-else class="evolution-placeholder">
                {{ pokemon.name.charAt(0) }}
              </div>
            </div>
            <div class="evolution-name">{{ pokemon.name }}</div>
            <div class="evolution-level">
              <span v-if="pokemon.level">{{ pokemon.level === 100 && pokemon.name.startsWith('M-') ? 'MEGA' : `LVL ${pokemon.level}` }}</span>
              <span v-else-if="pokemon.name.startsWith('M-')">MEGA</span>
              <span v-else>-</span>
            </div>
          </div>
        </div>

        <!-- Main Content: Left Stats + Right Info -->
        <div class="modal-main-content">
          <!-- Left: Ability & Core Stats -->
          <div class="modal-left">
            <!-- Ability Section -->
            <div class="ability-section">
              <h3 class="ability-title">Ability</h3>
              <div class="ability-name">{{ getAbilityName(selectedPokemon.ability) }}</div>
              <p class="ability-description">{{ selectedPokemon.ability }}</p>
            </div>

            <!-- Core Stats -->
            <div class="core-stats-section">
              <h3 class="stats-title">Core Stats</h3>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-icon">⚔️</div>
                  <div class="stat-info">
                    <div class="stat-label">Power</div>
                    <div class="stat-value">{{ selectedPokemon.property?.power ?? selectedPokemon.power }}</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">⏱️</div>
                  <div class="stat-info">
                    <div class="stat-label">Recharge</div>
                    <div class="stat-value">{{ selectedPokemon.property?.recharge ?? selectedPokemon.recharge }}s</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">📏</div>
                  <div class="stat-info">
                    <div class="stat-label">Range</div>
                    <div class="stat-value">{{ selectedPokemon.property?.range ?? selectedPokemon.range }}</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">💥</div>
                  <div class="stat-info">
                    <div class="stat-label">Critical</div>
                    <div class="stat-value">{{ formatCritical(selectedPokemon.property?.critical ?? selectedPokemon.critical) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: State Info -->
          <div class="modal-right">
            <div class="state-section">
              <div class="state-item">
                <div class="state-label">Shape:</div>
                <div class="state-value">{{ selectedPokemon.state?.shape ?? selectedPokemon.shape }}</div>
              </div>
              <div class="state-item">
                <div class="state-label">Acquisition:</div>
                <div class="state-value">
                  <span class="acquisition-badge">{{ selectedPokemon.state?.acquisition ?? 'Shop' }}</span>
                </div>
              </div>
              <div class="state-item">
                <div class="state-label">Target:</div>
                <div class="state-value">{{ selectedPokemon.state?.target ?? selectedPokemon.target }}</div>
              </div>
              <div class="state-item" v-if="selectedPokemon.state?.lv">
                <div class="state-label">Lvl 100 Cost:</div>
                <div class="state-value">$ {{ selectedPokemon.state.lv }}</div>
              </div>
            </div>

            <!-- Terrain -->
            <div class="terrain-section" v-if="selectedPokemon.terrain && selectedPokemon.terrain.length > 0">
              <div class="state-label">Terrain:</div>
              <div class="terrain-tags">
                <span 
                  v-for="terrain in selectedPokemon.terrain" 
                  :key="terrain"
                  class="terrain-tag"
                >
                  {{ terrain }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  pokemon: {
    type: Object,
    default: null
  },
  evolutionFamily: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close', 'select-pokemon'])

const selectedPokemon = ref(null)

watch(() => props.pokemon, (newPokemon) => {
  if (newPokemon) {
    selectedPokemon.value = newPokemon
  }
}, { immediate: true })

const selectPokemon = (pokemon) => {
  selectedPokemon.value = pokemon
  emit('select-pokemon', pokemon)
}

const closeModal = () => {
  emit('close')
}

const formatCritical = (value) => {
  if (value === null || value === undefined) return '0%'
  if (typeof value === 'number') {
    if (value < 1) {
      return `${(value * 100).toFixed(1)}%`
    }
    return `${value.toFixed(1)}%`
  }
  if (typeof value === 'string') {
    // 如果已经是百分比格式，直接返回
    if (value.includes('%')) return value
    // 尝试转换为数字
    const num = parseFloat(value)
    if (!isNaN(num)) {
      return num < 1 ? `${(num * 100).toFixed(1)}%` : `${num.toFixed(1)}%`
    }
  }
  return String(value)
}

const getAbilityName = (ability) => {
  if (!ability) return 'None'
  // 提取能力名称（通常是冒号前的部分或第一个句子）
  const match = ability.match(/^([^:\.]+)/)
  if (match) {
    return match[1].trim()
  }
  return ability.substring(0, 30) + '...'
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-container {
  position: relative;
  background: rgba(26, 35, 50, 0.95);
  border: 2px solid rgba(107, 163, 232, 0.3);
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 50%;
  color: #6ba3e8;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
  transform: rotate(90deg);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Evolution Chain */
.evolution-chain {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: rgba(15, 20, 30, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(107, 163, 232, 0.2);
  flex-wrap: wrap;
}

.evolution-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: rgba(26, 35, 50, 0.7);
  border: 2px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  position: relative;
}

.evolution-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  background: rgba(26, 35, 50, 0.9);
}

.evolution-card.active {
  background: rgba(92, 184, 92, 0.2);
  border-color: #5cb85c;
  box-shadow: 0 4px 16px rgba(92, 184, 92, 0.3);
}

.evolution-image {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.evolution-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.evolution-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #6ba3e8;
}

.evolution-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f5f8f0;
  text-align: center;
}

.evolution-level {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  text-align: center;
}

/* Main Content */
.modal-main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Left: Ability & Stats */
.modal-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ability-section {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.ability-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 12px 0;
}

.ability-name {
  font-size: 1rem;
  font-weight: 600;
  color: #f5f8f0;
  margin-bottom: 8px;
}

.ability-description {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin: 0;
}

.core-stats-section {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.stats-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 16px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 8px;
}

.stat-icon {
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  font-weight: 500;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6ba3e8;
}

/* Right: State Info */
.modal-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.state-section {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.state-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
}

.state-item:last-child {
  border-bottom: none;
}

.state-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.7);
}

.state-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #f5f8f0;
}

.acquisition-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(92, 184, 92, 0.2);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  color: #5cb85c;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.terrain-section {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.terrain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.terrain-tag {
  padding: 6px 12px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.3);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #5cb85c;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .modal-container {
    padding: 20px;
    max-width: 95%;
  }

  .modal-main-content {
    grid-template-columns: 1fr;
  }

  .evolution-chain {
    gap: 8px;
    padding: 16px;
  }

  .evolution-card {
    min-width: 80px;
    padding: 12px;
  }

  .evolution-image {
    width: 48px;
    height: 48px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
