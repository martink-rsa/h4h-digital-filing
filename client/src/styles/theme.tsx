import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type Padding = {
  page: number;
};

export type ThemeType = {
  color: {
    primary: string;
    secondary: string;
  };
  colorText: {
    body: string;
  };
  breakpoints: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  padding: Padding;
};

const theme: DefaultTheme = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  },
  colorText: {
    body: 'var(--color-text-body)',
  },
  breakpoints: {
    xs: 370,
    s: 600,
    m: 768,
    l: 992,
    xl: 1200,
  },
  padding: {
    page: 20,
  },
};

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
