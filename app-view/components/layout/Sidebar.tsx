import { styled } from '~/app-view/styles/stitches.config'

export const Sidebar = styled('aside', {
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  maxWidth: 480,
  borderRight: '$neutral-100 1px solid',
  bg: 'red',

  '@medium': {
    minHeight: 'calc(100vh - 82px)',
  },
})
