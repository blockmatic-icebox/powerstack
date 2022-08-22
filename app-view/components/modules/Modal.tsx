import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { styled } from '../../styles/stitches.config'

const StyledBackdrop = styled('div', {
  backgroundColor: '#00000099',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'hidden',
  zIndex: 130,
})

const StyledModalCard = styled('div', {
  boxSizing: 'content-box',
  position: 'fixed',
  top: '50%',
  right: 0,
  left: 0,
  bottom: 0,
  height: 'fit-content',
  padding: '0 $x-small',
  borderRadius: '$regular',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 131,
  transform: 'translateY(-50%)',
  m: '0 auto',
  '@small': {
    padding: '0 $large',
  },
})

const Backdrop: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'relative', zIndex: 1040 }}
    >
      <StyledBackdrop />
      {children}
    </motion.div>
  )
}

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
}

export interface ModalProps {
  handleClose(): void
  show: boolean
  width?: number
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ handleClose, children, show, width }) => {
  useEffect(() => {
    const nav_style = document.getElementById('nav-container')?.style
    const body_style = document.body.style
    body_style.paddingRight = show ? '15px' : '0px'
    body_style.overflowY = show ? 'hidden' : 'auto'
    if (nav_style)
      nav_style.maxWidth = show
        ? 'calc(var(--sizes-breakpoint-large) + 63px)'
        : 'calc(var(--sizes-breakpoint-large) + 48px)'

    return () => {
      body_style.overflowY = 'auto'
      body_style.paddingRight = '0px'
      if (nav_style) nav_style.maxWidth = 'calc(var(--sizes-breakpoint-large) + 48px)'
    }
  }, [show])

  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {show ? (
        <Backdrop
          onClick={() => {
            handleClose()
          }}
        >
          <motion.div
            onClick={(e: React.BaseSyntheticEvent) => e.stopPropagation()}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ position: 'relative', zIndex: 1040 }}
          >
            <StyledModalCard role="dialog" css={{ maxWidth: width || '100%' }}>
              {children}
            </StyledModalCard>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}
