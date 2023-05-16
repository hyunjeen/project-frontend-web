import { createGlobalStyle } from 'styled-components'
import { reset as resetCss } from 'styled-reset'
import { Noto_Sans_KR } from 'next/font/google'

const ns_kr = Noto_Sans_KR({ weight: ['400', '700'], subsets: ['latin'] })

export const GlobalStyle = createGlobalStyle`
  ${resetCss}
  html {
    font-family: ${ns_kr.style.fontFamily};
  }
`
