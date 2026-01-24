import messages from '@intlify/unplugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';

import { LANGUAGE, LOCAL_STORAGE_KEYS } from '@/globals/constants.js';
import LocalStorageManager from '@/globals/utils/localStorageManager.js';

const detectLocale = () => {
  const frontOfficeLang = LocalStorageManager.get(LOCAL_STORAGE_KEYS.HASSEN_NACHAR_WEB_LANGUAGE);
  const browserLang = window.navigator.language.substring(0, 2);
  const userLang = frontOfficeLang ?? browserLang;

  return LANGUAGE.AVAILABLE.includes(userLang) ? userLang : LANGUAGE.DEFAULT;
};

export default createI18n({
  locale: detectLocale(),
  fallbackLocale: LANGUAGE.DEFAULT,
  availableLocales: LANGUAGE.AVAILABLE,
  globalInjection: true,
  messages,
});
