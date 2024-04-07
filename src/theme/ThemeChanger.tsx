import React, { useState } from 'react';
import { Admin, Resource, Layout, AppBar, LayoutProps } from 'react-admin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch } from '@mui/material';
import { JSX } from 'react/jsx-runtime';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeChanger = (props: JSX.IntrinsicAttributes & LayoutProps) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout {...props} appBar={(appBarProps) => (
        <AppBar {...appBarProps}>
          
        </AppBar>
      )} />
    </ThemeProvider>
  );
};