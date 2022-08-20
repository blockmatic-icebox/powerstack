import { styled } from '~/app-view/styles/stitches.config'
import { BlockmaticIcon } from '~/app-view/components/icons/index'
import { Link } from '../base/Link'

const SidebarContainer = styled('aside', {
  display: 'none',
  minHeight: 'auto',
  position: 'relative',
  width: '100%',
  maxWidth: 300,
  borderRight: 'grey 1px solid',
  '@small': {
    display: 'block'
  }
})

const Logo = styled(BlockmaticIcon, {
  height: '21px',
  width: 'max-content',
  '@small': {
    height: '36px',
  },
})

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link href="/">
        <Logo />
      </Link>
      Sidebar Items Here
    </SidebarContainer>
  )
}
