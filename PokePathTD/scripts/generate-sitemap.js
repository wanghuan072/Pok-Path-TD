// Generate sitemap for PokéPath TD Strategy Guide (Multi-language)
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import wikiData from '../src/data/wiki/en.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 多语言配置 - en 无前缀，其他语言加前缀如 /de/
const locales = [
  { code: 'en', prefix: '', isDefault: true },
  { code: 'de', prefix: '/de', isDefault: false },
  { code: 'fa', prefix: '/fa', isDefault: false },
  { code: 'ja', prefix: '/ja', isDefault: false },
  { code: 'ko', prefix: '/ko', isDefault: false },
  { code: 'ru', prefix: '/ru', isDefault: false }
]

// 所有路线详情页 ID（与 data/routes 保持一致）
const routeIds = [
  'how-to-beat-route-1-1-articuno',
  'how-to-beat-route-1-2-zapdos-wave-100',
  'how-to-beat-route-1-3-moltres',
  'how-to-beat-route-2-1-raikou-wave-100',
  'how-to-beat-route-2-2-entei',
  'how-to-beat-route-2-3-suicune-wave-100',
  'how-to-beat-route-3-1-regirock-wave-100-guide',
  'how-to-beat-route-3-2-regice-dewgong-strategy',
  'how-to-beat-route-3-3-registeel-wave-100-guide'
]

// 所有游戏详情页 addressBar
const gameAddressBars = [
  'pokepath-td-1.2.5',
  'pokepath-td-1.3.3',
  'pokepath-td-1.3.6',
  'pokepath-td-1.4.1'
]

// 所有 Wiki 详情页 addressBar
const wikiAddressBars = wikiData
  .filter(item => item.addressBar)
  .map(item => item.addressBar)

// 站点配置
const config = {
  baseUrl: 'https://pokepathgame.org',
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  routes: [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/all-pokemon', priority: '0.9', changefreq: 'weekly' },
    { path: '/map-router', priority: '0.8', changefreq: 'weekly' },
    ...routeIds.map(id => ({
      path: `/map-router/${id}`,
      priority: '0.8',
      changefreq: 'monthly'
    })),
    { path: '/enemies', priority: '0.8', changefreq: 'weekly' },
    { path: '/items', priority: '0.8', changefreq: 'weekly' },
    { path: '/tier-list', priority: '0.8', changefreq: 'weekly' },
    { path: '/tools', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/dps-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/pokemon-categories', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/enemy-counter', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/route-strategy', priority: '0.7', changefreq: 'monthly' },
    { path: '/wiki', priority: '0.6', changefreq: 'monthly' },
    ...wikiAddressBars.map(addressBar => ({
      path: `/wiki/${addressBar}`,
      priority: '0.7',
      changefreq: 'monthly'
    })),
    ...gameAddressBars.map(addressBar => ({
      path: `/game/${addressBar}`,
      priority: '0.8',
      changefreq: 'monthly'
    })),
    { path: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/copyright', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms-of-service', priority: '0.5', changefreq: 'monthly' }
  ]
}

// 生成本地化路径（与 vein-game 一致）
function createLocalizedPath(routePath, locale) {
  const path = routePath === '/' ? '' : routePath
  if (locale.code === 'en') {
    return path || '/'
  }
  return `${locale.prefix}${path}` || locale.prefix
}

// 生成单条 URL XML（vein-game 风格：每一条独立）
function generateUrlXml(localizedPath, lastmod, changefreq, priority) {
  const url = `${config.baseUrl}${localizedPath}`
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// 生成 sitemap：每条 URL 独立（参考 vein-game）
function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  config.routes.forEach(route => {
    locales.forEach(locale => {
      const localizedPath = createLocalizedPath(route.path, locale)
      sitemap += generateUrlXml(localizedPath, lastmod, route.changefreq, route.priority) + '\n'
    })
  })

  sitemap += '</urlset>'
  return sitemap
}

// 写入文件
function writeSitemap() {
  const sitemap = generateSitemap()

  try {
    fs.writeFileSync(config.outputPath, sitemap, 'utf8')
    console.log('✅ Sitemap generated successfully at:', config.outputPath)
    console.log('   Locales:', locales.map(l => l.code).join(', '))
  } catch (error) {
    console.error('❌ Error writing sitemap:', error)
    throw error
  }
}

writeSitemap()
