import { styled } from '../../../../styles/stitches.config'

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  mx: 'auto',
  borderRadius: '$radius-40',
  px: '$small',
  py: '$regular',
  transition: 'all 160ms ease-in-out',
  position: 'relative',
  background: '#fff',
  '> button, > hr': {
    width: '100%',
    mb: '$small',
  },
  '> hr': {
    height: 1,
    backgroundColor: '$neutral',
    border: 'none',
    mt: '$xx-small',
    mb: '$regular',
  },
  '&:hover': {
    boxShadow: '0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a',
    '&::before': {
      minHeight: 'calc(100% - 4px)',
      minWidth: '100%',
    },
  },

  '@small': {
    px: '$x-large',
  },

  variants: {
    variant: {
      glass: {
        backgroundImage: 'url(assets/images/glass-bg.png)',
        '&::before': {
          transition: 'all 160ms ease-in-out',
          backgroundColor: '#0000000a',
          content: '',
          minHeight: 'calc(100% - 8px)',
          minWidth: 'calc(100% - 2px)',
          position: 'absolute',
          bottom: 0,
          right: 0,
          boxShadow: '0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a',
          filter: 'blur(10px)',
        },
      },
      login: {
        boxShadow: '0px 40px 50px rgba(214, 224, 244, 0.15)',
        maxWidth: '544px',
        py: '$large',
        '@small': {
          py: '$x-large',
          px: '$x-large',
        },
      },
    },
  },
})
