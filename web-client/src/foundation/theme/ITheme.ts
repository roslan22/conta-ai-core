/* eslint-disable @typescript-eslint/naming-convention */
import type { ThemeOptions } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    variables: {
      colors: {
        black: string;
        white: string;
        border: string;
        borderDark: string;
        text: string;
        action: string;
        link: string;
        right: string;
        wrong: string;
      };
      shadows: {
        button: string;
        insight: string;
        widget: string;
      };
      borders: {
        content: number;
        large: number;
      };
      fonts: {
        size: { s: number; m: number; l: number; xl: number };
        weight: { light: number; regular: number; bold: number; dark: number };
      };
      layout: {
        sidebarWidth: number;
      };
      effectsSpeed: {
        fast: string;
        medium: string;
        slow: string;
      };
    };
  }
}

export interface IThemeOptions extends ThemeOptions {
  variables: {
    colors: {
      black: string;
      white: string;
      border: string;
      borderDark: string;
      text: string;
      action: string;
      link: string;
      right: string;
      wrong: string;
    };
    shadows: {
      button: string;
      insight: string;
      widget: string;
    };
    borders: {
      content: number;
      large: number;
    };
    fonts: {
      size: { s: number; m: number; l: number; xl: number };
      weight: { light: number; regular: number; bold: number; dark: number };
    };
    layout: {
      sidebarWidth: number;
    };
    effectsSpeed: {
      fast: string;
      medium: string;
      slow: string;
    };
  };
}
