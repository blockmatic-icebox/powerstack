import { styled } from '~/app-view/styles/stitches.config'
import * as Tabs from '@radix-ui/react-tabs'

export const TabOptions = styled(Tabs.List, {
  '& button': {
    bg: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontSize: 16,
    transition: 'border 400ms',
    '&[data-state="active"]': {
      borderBottomColor: '$044-bff',
      color: '$044-bff',
    }
  }
})
