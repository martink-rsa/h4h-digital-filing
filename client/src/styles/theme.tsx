import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type Padding = {
  page: number;
};

type BorderRadius = {
  main: number;
};

type Animation = {
  short: string;
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
  borderRadius: BorderRadius;
  animation: Animation;
};

const theme: DefaultTheme = {
  color: {
    primary: 'var(--color-primary)',
    primaryLight: 'var(--color-primary-light)',
    primaryDark: 'var(--color-primary-dark)',
    secondary: 'var(--color-secondary)',
    secondaryLight: 'var(--color-secondary-light)',
    secondaryDark: 'var(--color-secondary-dark)',
    gray: {
      100: 'var(--color-gray-100)',
      200: 'var(--color-gray-200)',
      300: 'var(--color-gray-300)',
    },
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
  borderRadius: {
    main: 6,
  },
  animation: {
    short: '170ms',
  },
};

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
