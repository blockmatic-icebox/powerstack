import { styled } from '~/app-view/styles/stitches.config'

export const Main = styled('main', {
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  bg: 'green',

  '@medium': {
    minHeight: 'calc(100vh - 82px)',
  },
})
