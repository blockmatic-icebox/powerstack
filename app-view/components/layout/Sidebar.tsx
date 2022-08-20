import { styled } from '~/app-view/styles/stitches.config'

export const Sidebar = styled('aside', {
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  maxWidth: 480,
  borderRight: 'grey 1px solid',

  '@medium': {
    minHeight: 'calc(100vh - 82px)',
  },
})
