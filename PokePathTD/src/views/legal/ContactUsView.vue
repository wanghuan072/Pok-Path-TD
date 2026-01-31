<template>
  <div class="legal-page page-container">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">{{ t('ContactUsView.title') }}</h1>
        <p class="page-date">{{ t('ContactUsView.lastUpdated') }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>{{ t('ContactUsView.sections.getInTouch.title') }}</h2>
            <p>{{ t('ContactUsView.sections.getInTouch.content') }}</p>

            <h2>{{ t('ContactUsView.sections.email.title') }}</h2>
            <i18n-t keypath="ContactUsView.sections.email.content" tag="p">
              <template #email>
                <a href="mailto:wyong@pokepathgame.org">wyong@pokepathgame.org</a>
              </template>
            </i18n-t>

            <h2>{{ t('ContactUsView.sections.help.title') }}</h2>
            <p>{{ t('ContactUsView.sections.help.intro') }}</p>
            <ul>
              <li v-for="(item, key) in tm('ContactUsView.sections.help.items')" :key="key">
                {{ item }}
              </li>
            </ul>

            <h2>{{ t('ContactUsView.sections.response.title') }}</h2>
            <p>{{ t('ContactUsView.sections.response.content') }}</p>

            <h2>{{ t('ContactUsView.sections.contribution.title') }}</h2>
            <p>{{ t('ContactUsView.sections.contribution.content') }}</p>

            <h2>{{ t('ContactUsView.sections.privacy.title') }}</h2>
            <i18n-t keypath="ContactUsView.sections.privacy.content" tag="p">
              <template #link>
                <a href="/privacy-policy">Privacy Policy</a>
              </template>
            </i18n-t>

            <h2>{{ t('ContactUsView.sections.thankYou.title') }}</h2>
            <p>{{ t('ContactUsView.sections.thankYou.content') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-header {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.4), transparent);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: #f5f8f0;
  font-weight: 700;
  text-align: center;
}

.page-date {
  text-align: center;
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: 1.8rem;
  color: #f5f8f0;
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: #6ba3e8;
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}
</style>
