<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="PokéPath TD Logo" class="logo-image">
            <span class="logo-text">PokéPath TD</span>
          </div>
          <p class="footer-text">{{ t('AppFooter.description') }}</p>
        </div>
        <div class="link-column">
          <h2>{{ t('AppFooter.navigate') }}</h2>
          <ul>
            <li><router-link :to="localePath('/')">{{ t('AppFooter.links.home') }}</router-link></li>
            <li><router-link :to="localePath('/wiki')">{{ t('AppFooter.links.wiki') }}</router-link></li>
            <li><router-link :to="localePath('/all-pokemon')">{{ t('AppFooter.links.allPokemon') }}</router-link></li>
            <li><router-link :to="localePath('/enemies')">{{ t('AppFooter.links.enemies') }}</router-link></li>
            <li><router-link :to="localePath('/map-router')">{{ t('AppFooter.links.routes') }}</router-link></li>
            <li><router-link :to="localePath('/tools')">{{ t('AppFooter.links.tools') }}</router-link></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>{{ t('AppFooter.legal') }}</h2>
          <ul>
            <li><router-link :to="localePath('/privacy-policy')" rel="noopener noreferrer nofollow">{{ t('AppFooter.links.privacyPolicy') }}</router-link></li>
            <li><router-link :to="localePath('/terms-of-service')" rel="noopener noreferrer nofollow">{{ t('AppFooter.links.termsOfService') }}</router-link></li>
            <li><router-link :to="localePath('/copyright')" rel="noopener noreferrer nofollow">{{ t('AppFooter.links.copyright') }}</router-link></li>
            <li><router-link :to="localePath('/about-us')" rel="noopener noreferrer nofollow">{{ t('AppFooter.links.aboutUs') }}</router-link></li>
            <li><router-link :to="localePath('/contact-us')" rel="noopener noreferrer nofollow">{{ t('AppFooter.links.contactUs') }}</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t('AppFooter.rights') }}</p>
        <p>{{ t('AppFooter.disclaimer') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/utils/useLocalePath'

const { t } = useI18n()
const { localePath } = useLocalePath()
</script>

<style scoped>
.site-footer {
  padding: 40px 0 20px 0;
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* 渐变颜色 - 蓝色到绿色，Pokémon主题 */
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-text {
  color: rgba(245, 248, 240, 0.7);
  margin-bottom: 16px;
  line-height: 1.6;
}

.link-column h2 {
  color: #6ba3e8;
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: rgba(245, 248, 240, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #6ba3e8;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(107, 163, 232, 0.15);
  padding-top: 20px;
  color: rgba(245, 248, 240, 0.6);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* 平板端 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

/* 移动端 */
@media (max-width: 768px) {
  .site-footer {
    padding: 30px 0 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .link-column h2 {
    font-size: 1.1rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>

