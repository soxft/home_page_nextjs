import type { AppProps } from 'next/app'
import type { Theme } from '@mui/material'

import { useState } from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router'
import Link from 'next/link'

import GTranslateIcon from '@mui/icons-material/GTranslate';

import {
  useEffect,
  useMemo
} from 'react'

import {
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Fab,
  Menu,
  MenuItem,
} from '@mui/material'
import "@/styles/main.css"
import Script from 'next/script'
const App = ({ Component, pageProps }: AppProps) => {

  const [t] = useTranslation('desc');
  const path = useRouter().pathname;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const LangMenuOpen = Boolean(anchorEl);

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
        typography: {
          fontFamily: [
            'LXGW WenKai Screen',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <Head>
        <title>{`${t('title')} - ${t('subtitle')}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        defer
        src="https://um.cmds.run/script.js"
        data-website-id="df489e09-39ab-4efd-b39f-6529c59bde5d"
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* 切换语言 */}
      <Fab
        aria-controls="lang_menu"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        size="small"
        aria-label="change language"
        sx={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          opacity: '0.5',
        }}
      >
        <GTranslateIcon />
      </Fab>
      <Menu
        open={LangMenuOpen}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        anchorEl={anchorEl}
      >
        <Link
          href={path}
          passHref={true}
          locale="zh"
        >
          <MenuItem>简体中文</MenuItem>
        </Link>
        <Link
          href={path}
          passHref={true}
          locale="en"
        >
          <MenuItem>English</MenuItem>
        </Link>
      </Menu>
    </>
  )
}

export default appWithTranslation(App)

