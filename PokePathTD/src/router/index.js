import { createRouter, createWebHistory } from 'vue-router'
import i18n, { localeCodes } from '../i18n'
import HomeView from '../views/HomeView.vue'
import AllPokemonView from '../views/AllPokemonView.vue'
import RoutesView from '../views/RoutesView.vue'
import EnemyDatabaseView from '../views/EnemyDatabaseView.vue'
import ItemsView from '../views/ItemsView.vue'
import ToolsView from '../views/tools/ToolsView.vue'
import DpsCalculatorView from '../views/tools/DpsCalculatorView.vue'
import PokemonCategoriesView from '../views/tools/PokemonCategoriesView.vue'
import EnemyCounterView from '../views/tools/EnemyCounterView.vue'
import RouteStrategyView from '../views/tools/RouteStrategyView.vue'
import RouteDetailView from '../views/RouteDetailView.vue'
import TierListView from '../views/TierListView.vue'
import WikiView from '../views/WikiView.vue'
import WikiDetailView from '../views/WikiDetailView.vue'
import GameDetailView from '../views/GameDetailView.vue'

// Legal Pages
import AboutUsView from '../views/legal/AboutUsView.vue'
import ContactUsView from '../views/legal/ContactUsView.vue'
import CopyrightView from '../views/legal/CopyrightView.vue'
import PrivacyPolicyView from '../views/legal/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/legal/TermsOfServiceView.vue'

// 支持的语言（英文无前缀，其他语言有前缀如 /de/）
const supportedLocales = localeCodes
const prefixedLocales = localeCodes.filter((l) => l !== 'en')

// 生成路由路径：英文无前缀，其他语言加前缀
const createRoutePath = (path, locale = 'en') => {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Meta.home.title', description: 'Meta.home.description', keywords: 'Meta.home.keywords', image: '/images/logo.webp' } },
  { path: '/all-pokemon', name: 'all-pokemon', component: AllPokemonView, meta: { title: 'Meta.allPokemon.title', description: 'Meta.allPokemon.description', keywords: 'Meta.allPokemon.keywords', image: '/images/logo.webp' } },
  { path: '/map-router', name: 'map-router', component: RoutesView, meta: { title: 'Meta.mapRouter.title', description: 'Meta.mapRouter.description', keywords: 'Meta.mapRouter.keywords', image: '/images/logo.webp' } },
  { path: '/map-router/:id', name: 'route-detail', component: RouteDetailView, meta: { title: 'Meta.routeDetail.title', description: 'Meta.routeDetail.description', keywords: 'Meta.routeDetail.keywords', image: '/images/logo.webp' } },
  { path: '/enemies', name: 'enemies', component: EnemyDatabaseView, meta: { title: 'Meta.enemies.title', description: 'Meta.enemies.description', keywords: 'Meta.enemies.keywords', image: '/images/logo.webp' } },
  { path: '/items', name: 'items', component: ItemsView, meta: { title: 'Meta.items.title', description: 'Meta.items.description', keywords: 'Meta.items.keywords', image: '/images/logo.webp' } },
  { path: '/tools', name: 'tools', component: ToolsView, meta: { title: 'Meta.tools.title', description: 'Meta.tools.description', keywords: 'Meta.tools.keywords', image: '/images/logo.webp' } },
  { path: '/tools/dps-calculator', name: 'dps-calculator', component: DpsCalculatorView, meta: { title: 'Meta.dpsCalculator.title', description: 'Meta.dpsCalculator.description', keywords: 'Meta.dpsCalculator.keywords', image: '/images/logo.webp' } },
  { path: '/tools/pokemon-categories', name: 'pokemon-categories', component: PokemonCategoriesView, meta: { title: 'Meta.pokemonCategories.title', description: 'Meta.pokemonCategories.description', keywords: 'Meta.pokemonCategories.keywords', image: '/images/logo.webp' } },
  { path: '/tools/enemy-counter', name: 'enemy-counter', component: EnemyCounterView, meta: { title: 'Meta.enemyCounter.title', description: 'Meta.enemyCounter.description', keywords: 'Meta.enemyCounter.keywords', image: '/images/logo.webp' } },
  { path: '/tools/route-strategy', name: 'route-strategy', component: RouteStrategyView, meta: { title: 'Meta.routeStrategy.title', description: 'Meta.routeStrategy.description', keywords: 'Meta.routeStrategy.keywords', image: '/images/logo.webp' } },
  { path: '/tier-list', name: 'tier-list', component: TierListView, meta: { title: 'Meta.tierList.title', description: 'Meta.tierList.description', keywords: 'Meta.tierList.keywords', image: '/images/logo.webp' } },
  { path: '/wiki', name: 'wiki', component: WikiView, meta: { title: 'Meta.wiki.title', description: 'Meta.wiki.description', keywords: 'Meta.wiki.keywords', image: '/images/logo.webp' } },
  { path: '/wiki/:addressBar', name: 'wiki-detail', component: WikiDetailView, meta: { title: 'Meta.wikiDetail.title', description: 'Meta.wikiDetail.description', keywords: 'Meta.wikiDetail.keywords', image: '/images/logo.webp' } },
  { path: '/game/:addressBar', name: 'game-detail', component: GameDetailView, meta: { title: 'Meta.gameDetail.title', description: 'Meta.gameDetail.description', keywords: 'Meta.gameDetail.keywords', image: '/images/logo.webp' } },
  { path: '/about-us', name: 'about-us', component: AboutUsView, meta: { title: 'Meta.aboutUs.title', description: 'Meta.aboutUs.description', keywords: 'Meta.aboutUs.keywords' } },
  { path: '/contact-us', name: 'contact-us', component: ContactUsView, meta: { title: 'Meta.contactUs.title', description: 'Meta.contactUs.description', keywords: 'Meta.contactUs.keywords' } },
  { path: '/copyright', name: 'copyright', component: CopyrightView, meta: { title: 'Meta.copyright.title', description: 'Meta.copyright.description', keywords: 'Meta.copyright.keywords' } },
  { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicyView, meta: { title: 'Meta.privacyPolicy.title', description: 'Meta.privacyPolicy.description', keywords: 'Meta.privacyPolicy.keywords' } },
  { path: '/terms-of-service', name: 'terms-of-service', component: TermsOfServiceView, meta: { title: 'Meta.termsOfService.title', description: 'Meta.termsOfService.description', keywords: 'Meta.termsOfService.keywords' } }
]

// 生成所有语言的路由（扁平结构，无嵌套、无 catch-all）
const routes = []
baseRoutes.forEach((route) => {
  routes.push({
    ...route,
    path: route.path,
    meta: { ...route.meta, locale: 'en' }
  })
  prefixedLocales.forEach((locale) => {
    routes.push({
      ...route,
      path: createRoutePath(route.path, locale),
      name: `${route.name}-${locale}`,
      meta: { ...route.meta, locale }
    })
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫：从 URL 提取语言并设置 i18n
router.beforeEach((to, from, next) => {
  const pathSegments = to.path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  const locale = (firstSegment && supportedLocales.includes(firstSegment)) ? firstSegment : 'en'

  i18n.global.locale.value = locale
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale)
  }

  const title = to.meta?.title
  if (title) {
    document.title = title.startsWith('Meta.') ? i18n.global.t(title) : title
  } else {
    document.title = 'PokéPath TD Strategy Guide'
  }

  next()
})

export default router
