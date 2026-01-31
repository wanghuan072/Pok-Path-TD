<template>
  <div class="legal-page page-container">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">{{ t('TermsOfServiceView.title') }}</h1>
        <p class="page-date">{{ t('TermsOfServiceView.lastUpdated') }}</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>{{ t('TermsOfServiceView.sections.agreement.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.agreement.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.use.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.use.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.intellectualProperty.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.intellectualProperty.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.userContent.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.userContent.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.disclaimer.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.disclaimer.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.liability.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.liability.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.changes.title') }}</h2>
            <p>{{ t('TermsOfServiceView.sections.changes.content') }}</p>

            <h2>{{ t('TermsOfServiceView.sections.contact.title') }}</h2>
            <i18n-t keypath="TermsOfServiceView.sections.contact.content" tag="p">
              <template #email>
                <a href="mailto:wyong@pokepathgame.org">wyong@pokepathgame.org</a>
              </template>
            </i18n-t>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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