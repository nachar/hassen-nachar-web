import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const hassenNacharWeb = {
  dark: false,
  colors: {
    background: '#FAFAFA',
    surface: '#FFFFFF',
    'surface-light': '#F5F5F5',
    'surface-variant': '#E0E0E0',

    primary: '#556b63',
    'primary-darken-1': '#3b4c46',
    secondary: '#8d9c9b',
    'secondary-darken-1': '#6e7a79',

    error: '#FF806D',
    info: '#8BADC6',
    success: '#81C784',
    warning: '#FFCD82',

    'gray-light': '#BDBDBD',
    'gray-medium': '#9E9E9E',
    'gray-dark': '#424242',
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
