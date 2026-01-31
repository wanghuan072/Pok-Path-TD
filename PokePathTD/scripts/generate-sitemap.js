// Generate sitemap for PokéPath TD Strategy Guide
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import wikiData from '../src/data/wiki/en.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 多语言配置
const locales = [
  { code: 'en', prefix: '', isDefault: true }
  // { code: 'zh', prefix: '/zh', isDefault: false },
  // { code: 'es', prefix: '/es', isDefault: false }
]

// 所有路线详情页 ID（已更新为新的 SEO 友好 ID）
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
  'pokepath-td-1.3.6'
]

// 所有 Wiki 详情页 addressBar
const wikiAddressBars = wikiData
  .filter(item => item.addressBar)
  .map(item => item.addressBar)

// 站点配置
const config = {
  baseUrl: 'https://pokepathgame.org', // 替换为实际域名
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  routes: [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/all-pokemon', priority: '0.9', changefreq: 'weekly' },
    { path: '/map-router', priority: '0.8', changefreq: 'weekly' },
    // 添加所有路线详情页
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
    // 添加所有 Wiki 详情页
    ...wikiAddressBars.map(addressBar => ({
      path: `/wiki/${addressBar}`,
      priority: '0.7',
      changefreq: 'monthly'
    })),
    // 添加所有游戏详情页
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

// 生成sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString()

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  config.routes.forEach(route => {
    locales.forEach(locale => {
      // 构建当前语言的 URL
      // 如果是默认语言且没有前缀，直接使用 base + path
      // 如果有前缀，base + prefix + path
      const prefix = locale.prefix || ''
      // 处理 path 为 '/' 的特殊情况，避免出现 //
      const routePath = route.path === '/' ? '' : route.path
      const url = `${config.baseUrl}${prefix}${routePath}` || `${config.baseUrl}/`

      sitemap += '  <url>\n'
      sitemap += `    <loc>${url}</loc>\n`
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`
      sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
      sitemap += `    <priority>${route.priority}</priority>\n`

      // 生成其他语言的 alternate 链接
      locales.forEach(altLocale => {
        // 如果我们有多个语言，需要互相引用
        // 目前只有一个语言，这个循环实际上不会生成有意义的 alternate（除了自身，但通常不需要引用自身为 alternate，或者引用自身也是可以的 x-default）
        // 标准做法：列出所有语言版本，包括当前版本
        const altPrefix = altLocale.prefix || ''
        const altRoutePath = route.path === '/' ? '' : route.path
        const altUrl = `${config.baseUrl}${altPrefix}${altRoutePath}` || `${config.baseUrl}/`
        
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale.code}" href="${altUrl}"/>\n`
      })

      sitemap += '  </url>\n'
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
  } catch (error) {
    console.error('❌ Error writing sitemap:', error)
    throw error
  }
}

// 执行生成
writeSitemap()
