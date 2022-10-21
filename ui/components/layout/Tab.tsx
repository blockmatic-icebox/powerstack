import { styled } from '~/ui/styles/stitches.config'
import * as Tabs from '@radix-ui/react-tabs'

export const TabOptions = styled(Tabs.List, {
  display: 'flex',
  overflowX: 'auto',
  '& button': {
    bg: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontSize: 16,
    transition: 'border 400ms',
    '&[data-state="active"]': {
      borderBottomColor: '$primary-blue',
      color: '$primary-blue',
    },
  },
})
