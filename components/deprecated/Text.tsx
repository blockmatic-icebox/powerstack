import { styled } from '../../styles/stitches.config'

export const Text = styled('p', {
  fontFamily: '$semi-bold',
  fontSize: '$body',
  lineHeight: '1.2',
  variants: {
    variant: {
      h1: {
        rt: 'center',
        fontFamily: '$extra-bold',
        fontSize: '$h-1',
      },
      h2: {
        rt: 'center',
        fontFamily: '$extra-bold',
        fontSize: '$h-2',
      },
      h3: {
        rt: 'center',
        fontFamily: '$extra-bold',
        fontSize: '$h-3',
      },
      h4: {
        rt: 'center',
        fontFamily: '$extra-bold',
        fontSize: '$h-4',
      },
    },
  },
})
