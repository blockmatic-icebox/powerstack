import { styled } from '../../styles/stitches.config'

export const Sidebar = styled('aside', {
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  maxWidth: 480,
  borderRight: '1px solid $gray-scale-100',

  '@medium': {
    minHeight: 'calc(100vh - 82px)',
  }
})
