import { MORE_INFO_KEYS } from '@/globals/constants.js';

export const formatResponse = (response) => {
  let customKey = '';
  let language = '';
  let text = response;

  for (const key of MORE_INFO_KEYS) {
    if (text.includes(key)) {
      text = text.replace(key, '');

      const [currentKey, currentLanguage] = key.replaceAll('*', '').split('-');
      customKey = currentKey;
      language = currentLanguage;
    }
  }

  return { text, customKey, language };
};
