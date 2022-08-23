import { styled } from '~/app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine/index'

const SidebarContainer = styled('aside', {
  display: 'none',
  minHeight: 'auto',
  position: 'relative',
  opacity: 0,
  width: 0,
  maxWidth: '100%',
  transition: 'width 400ms, opacity 400ms',
  '@small': {
    display: 'block'
  },
  variants: {
    show: {
      true: {
        width: 300,
        opacity: 1,
      }
    }
  }
})

export const Sidebar = () => {
  const { show_sidebar } = useAppEngine()

  return (
    <SidebarContainer show={show_sidebar}>
      Sidebar Items Here
    </SidebarContainer>
  )
}
