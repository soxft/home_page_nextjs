import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'

import type { Theme } from '@mui/material'

import {
  useEffect,
  useMemo
} from 'react'

import {
  useMediaQuery,
  createTheme,
  ThemeProvider
} from '@mui/material'
import "@/styles/main.css"

const App = ({ Component, pageProps }: AppProps) => {

  // 处理暗黑模式
  const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    window.document.body.style.backgroundColor = prefersDarkMode ? '#303030' : '#fafafa';
  }, [prefersDarkMode]);

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          background: {
            default: prefersDarkMode ? '#303030' : '#fafafa',
            paper: prefersDarkMode ? '#424242' : '#fff',
          },
          text: {
            primary: !prefersDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.85)',
            secondary: !prefersDarkMode ? 'rgba(0, 0, 0, 0.55)' : 'rgba(255, 255, 255, 0.7)',
            disabled: !prefersDarkMode ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)',
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)
