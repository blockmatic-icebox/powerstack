import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react'
import lightTheme from './light-theme.json'
import darkTheme from './dark-theme.json'

console.log('Light Theme for Stitches\n', lightTheme)
console.log('Dark Theme for Stitches\n', darkTheme)

export const { styled, globalCss, getCssText, config }  = createStitches({
  theme: {
    // colors,
    colors: lightTheme.colors,
    sizes: {
      container: '78.5rem',
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    space: lightTheme.space,
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
  body: {
    margin: 0,
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
})