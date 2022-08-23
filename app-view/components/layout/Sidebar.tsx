import { styled } from '~/app-view/styles/stitches.config'
import { useAppEngine } from '~/app-engine/index'
import { Link } from '../base/Link'

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
  const { show_sidebar, user } = useAppEngine()

  return (
    <SidebarContainer show={show_sidebar}>
      <div>
        <header>
          <h4>Account</h4>
        </header>
        <main>
          <span>image</span>
          <div>
            <p><strong>0x4ffc...bBA</strong></p>
            <p>Metamask Wallet</p>
          </div>
          <div>
            <button type="button">copy</button>
            <Link href="#">External Address</Link>
          </div>
        </main>
        <footer>
          <a href="#">+ Connect new wallet</a>
        </footer>
      </div>
      <nav>
        <ul>
          <li><Link disabled={user ? true : false} href="/profile">Profile</Link></li>
          <li><Link disabled={user ? true : false} href="/wallet">Wallet</Link></li>
          <li><Link disabled={user ? true : false} href="/marketplace">Marketplace</Link></li>
        </ul>
      </nav>
    </SidebarContainer>
  )
}
