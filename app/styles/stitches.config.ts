import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react'
import { light_theme } from './themes/light-theme'
import { dark_theme } from './themes/dark-theme'

console.log('Light Theme for Stitches\n', light_theme)
console.log('Dark Theme for Stitches\n', dark_theme)

// NOTE: Light theme is default theme if Dark is available.
const getFontSizes = () => {
  let fontSizes:any = {}
  for (const property in light_theme.theme.typeStyles) {
    const tempFontSize:string = light_theme.theme.typeStyles[property as keyof object]['fontSize']
    fontSizes[property as keyof object] = tempFontSize
  }
  return fontSizes
}

export const { styled, globalCss, getCssText, config } = createStitches({
  // TODO: To redefine typeStyles... not supported
  // @ts-ignore
  theme: {
    // NOTE: Light theme is default theme if Dark is available
    ...light_theme.theme,
    sizes: {
      container: '78.5rem',
      iconSmall: '1.375rem',
      iconMedium: '2.75rem'
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    space: light_theme.space,
    fonts: light_theme.fonts,
    fontSizes: getFontSizes()
  },
  media: {
    tabletUp: '(min-width: 768px)',
    desktopUp: '(min-width: 1024px)',
    largeDesktopUp: '(min-width: 1680px)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
  }
})

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontDisplay: 'swap',
      fontFamily: 'Gilroy-Bold',
      src: 'url(/fonts/Gilroy-Bold.ttf)',
    },
    {
      fontDisplay: 'swap',
      fontFamily: '"Gilroy-ExtraBold"',
      src: 'url(/fonts/Gilroy-ExtraBold.ttf)',
    },
    {
      fontDisplay: 'swap',
      fontFamily: 'Gilroy-SemiBold',
      src: 'url(/fonts/Gilroy-SemiBold.ttf)',
    },
  ],
  body: {
    fontFamily: '$semi-bold',
    margin: 0,
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
})
