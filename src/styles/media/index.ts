import { css, CSSObject, SimpleInterpolation } from 'styled-components'

type MediaSize = 'small' | 'medium' | 'large'

const mediaSize = {
  small: 600,
  medium: 1024,
  large: 1440,
} as Readonly<Record<MediaSize, number>>

const media = Object.entries(mediaSize).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (min-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  }
}, {}) as Record<MediaSize, any>

export { media }
