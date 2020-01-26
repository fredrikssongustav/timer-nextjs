import React from 'react';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { StyledContainer } from '../StyledContainer/StyledContainer';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#283F3B' },
  },
});

export const StyledPage = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, user-scalable=no" />
      <meta charSet="utf-8" />
      <title>A Timer</title>
    </Head>
    <style>
      {`
      body { 
        font: 11px menlo;
        color: #fff;
        margin:0;
      }
    `}
    </style>
    <ThemeProvider theme={theme}>
      <span />
      <StyledContainer>
        {children}
      </StyledContainer>
    </ThemeProvider>
  </div>
);
