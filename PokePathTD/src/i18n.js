import { createI18n } from 'vue-i18n'
import en from './locales/en'
import de from './locales/de'
import fa from './locales/fa'
import ja from './locales/ja'
import ko from './locales/ko'
import ru from './locales/ru'

export const supportedLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

export const localeCodes = supportedLocales.map(l => l.code)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: {
    en,
    de,
    fa,
    ja,
    ko,
    ru
  }
})

export default i18n
