import { createStitches } from '@stitches/react'
import lightTheme from './light-theme.json'
import darkTheme from './dark-theme.json'

console.log('Light Theme for Stitches\n', lightTheme)
console.log('Dark Theme for Stitches\n', darkTheme)

const stitches = createStitches({
  theme: {
    // colors,
    colors: {
      red: '#ff6d6d',
      steel: '#363645b0',
      black: '#000',
      white: '#fff',
      grey: '#666',
    },
    space: {
      'space-1': '20px'
    }
  },
  media: {
    tabletUp: '(min-width: 768px)',
    desktopUp: '(min-width: 1024px)',
    largeDesktopUp: '(min-width: 1680px)',
  },
})

const { styled, globalCss, getCssText } = stitches

export { styled, getCssText, globalCss }
