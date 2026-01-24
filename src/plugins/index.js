import i18n from './i18n.js';
import vuetify from './vuetify';

export function registerPlugins(app) {
  app.use(vuetify).use(i18n);
}
