import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { GlobalStyle } from '@/styles/global'
import '@/styles/constants.css'
import MainLayout from '@/components/layout/MainLayout'
axios.defaults.baseURL = 'http://localhost:4001'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SWRConfig>
  )
}
