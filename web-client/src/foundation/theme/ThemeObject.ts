import { IThemeOptions } from './ITheme';

export const ThemeObject: IThemeOptions = {
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    h1: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontSize: 44,
      fontWeight: 700,
    },
    h2: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontSize: 34,
      fontWeight: 700,
    },
    h3: {
      fontFamily: `'Ubuntu', sans-serif`,
      fontSize: 28,
      fontWeight: 700,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.4,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 300,
    },
  },
  variables: {
    colors: {
      black: '#000',
      white: '#fff',
      border: '#EFEFEF',
      borderDark: '#7491AA',
      text: '#222222',
      action: '#34836C',
      link: '#455D73',
      right: '#7EB356',
      wrong: '#F81215',
    },
    shadows: {
      button: '0px 4px 20px rgba(52, 131, 108, 0.5)',
      insight: '0px 0px 6px 0px rgba(54, 72, 89, 0.25)',
      widget: '0px 0px 8px 0px rgba(54, 72, 89, 0.25)',
    },
    borders: {
      content: 6,
      large: 12,
    },
    fonts: {
      size: { s: 14, m: 18, l: 24, xl: 44 },
      weight: { light: 300, regular: 400, bold: 600, dark: 700 },
    },
    layout: {
      sidebarWidth: 200,
    },
    effectsSpeed: {
      fast: '0.1s ease-in-out',
      medium: '0.3s ease-in-out',
      slow: '0.6s ease-in-out',
    },
  },
  overrides: {
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
      },
    },
  },
};
