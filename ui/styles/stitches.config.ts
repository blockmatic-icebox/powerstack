import type * as React from 'react'
import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { light_theme } from './themes/light-theme'

// app_logger.log('Light Theme for Stitches\n', light_theme)
// app_logger.log('Dark Theme for Stitches\n', dark_theme)

export const { theme: stitches_theme, styled, globalCss, getCssText, config } = createStitches({
  theme: {
    // NOTE: Light theme is default theme if Dark is available
    ...light_theme.theme,
    sizes: {
      container: '78.5rem',
      'icon-small': '1.375rem',
      'icon-medium': '2.75rem',
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
  },
  media: {
    'x-small': '(min-width: 425px)',
    small: '(min-width: 768px)',
    medium: '(min-width: 1024px)',
    large: '(min-width: 1440px)',
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
  },
})

// Styled Icon Helper: Set sizes equally, if an icon has rectangle dimensions, use regular styled...
// ADD MORE SIZES IF REQUIRED TO THE TYPE
export const styledIcon = (
  // @ts-ignore
  component: React.ComponentType<{ color?: Stitches.Token<any, string, 'colors', ''> }>,
  size: 'small' | 'medium',
) =>
  styled(component, {
    size: `$icon-${size}`,
  })

export type CSS = Stitches.CSS<typeof config>

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
  h1: {
    fontFamily: '$h1',
    fontSize: '$h1',
    letterSpacing: '$h1',
    fontWeight: '$heading',
    lineHeight: '$h1',
  },
  h2: {
    fontFamily: '$h2',
    fontSize: '$h2',
    letterSpacing: '$h2',
    fontWeight: '$heading',
    lineHeight: '$h2',
  },
  h3: {
    fontFamily: '$h3',
    fontSize: '$h3',
    letterSpacing: '$h3',
    fontWeight: '$heading',
    lineHeight: '$h3',
  },
  h4: {
    fontFamily: '$h4',
    fontSize: '$h4',
    letterSpacing: '$h4',
    fontWeight: '$heading',
    lineHeight: '$h4',
  },
  h5: {
    fontFamily: '$h5',
    fontSize: '$h5',
    letterSpacing: '$h5',
    fontWeight: '$heading',
    lineHeight: '$h5',
  },
  p: {
    fontFamily: '$body',
    fontSize: '$body',
    letterSpacing: '$body',
    fontWeight: '$body',
    lineHeight: '$body',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    scrollBehavior: 'smooth',
    letterSpacing: '0.02em',
  },
  '::-webkit-scrollbar': {
    width: '13px',
    height: '13px',
    right: 0,
  },
  '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
    background: '$neutral-200',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$neutral-600',
    borderRadius: '18px',
    border: '3px solid $neutral-200',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '$neutral-700',
  },
})
