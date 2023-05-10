import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '~/styles'

export function Modal({ children, show, width, close, padding = true }: ModalProps) {
  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode="wait"
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {show ? (
        <Backdrop onClick={close}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={{
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
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ position: 'absolute', zIndex: 100, top: '50%', width: '100%' }}
          >
            <div
              role="dialog"
              className={cn(
                'absolute top-0 right-0 left-0 bottom-0 m-auto z-[40] h-fit bg-white dark:!bg-navy-800 rounded-xl',
                padding && 'p-6',
              )}
              style={width ? { width: '95%', maxWidth: width } : { width: '90%', maxWidth: 800 }}
            >
              {children}
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

function Backdrop({ children, onClick }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 40, height: '100%', width: '100%' }}
    >
      <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center overflow-y-hidden bg-[#0000008a]"></div>
      {children}
    </motion.div>
  )
}

type ModalProps = {
  padding?: boolean
  show: boolean
  width?: number
  children: React.ReactNode
  close?: () => void
}
