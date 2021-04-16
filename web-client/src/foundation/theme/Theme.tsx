import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeObject } from './ThemeObject';

interface IProps {
  children: React.ReactNode;
}

export const ApplicationTheme: React.FC<IProps> = ({ children }) => {
  const theme = createMuiTheme(ThemeObject);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
