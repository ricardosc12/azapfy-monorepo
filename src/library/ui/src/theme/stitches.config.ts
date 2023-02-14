import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      orange: 'green',
      orange_hover:'rgb(100,150,100)'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '30px',
    },
  },
}) as any;