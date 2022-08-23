import { styled } from '~/app-view/styles/stitches.config'

const SidebarContainer = styled('aside', {
  display: 'none',
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  maxWidth: 300,
  '@small': {
    display: 'block'
  }
})

export const Sidebar = () => {
  return (
    <SidebarContainer>
      Sidebar Items Here
    </SidebarContainer>
  )
}
