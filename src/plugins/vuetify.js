import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const hassenNacharWeb = {
  dark: false,
  colors: {
    // Base
    background: '#F8FAFC',
    surface: '#FFFFFF',
    'surface-light': '#F1F5F9',
    'surface-variant': '#E2E8F0',

    // Brand
    primary: '#2563EB',
    'primary-darken-1': '#1E40AF',

    secondary: '#64748B',
    'secondary-darken-1': '#475569',

    // States
    error: '#EF4444',
    info: '#38BDF8',
    success: '#22C55E',
    warning: '#F59E0B',

    // Neutrals
    'gray-light': '#CBD5E1',
    'gray-medium': '#94A3B8',
    'gray-dark': '#1E293B',
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'hassenNacharWeb',
    themes: {
      hassenNacharWeb,
    },
  },
});
