import React from 'react'
import { useThemeContext } from '@/utils/useThemeContext'
import { themeLight, themeDark } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import LoadingBar from '@/components/LoadingBar'
import Header from '@/components/Header'

import { AppProps } from 'next/app'
import GtagRoutes from '@/lib/GtagRoutes'


const App = ({ Component, pageProps }: AppProps) => {

  const [theme, toggleTheme] = useThemeContext()
  const themeMode = theme === 'light' ? themeLight : themeDark

  GtagRoutes()

  return (
    <React.StrictMode>
      <ThemeProvider theme={themeMode}>
        <LoadingBar />
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App