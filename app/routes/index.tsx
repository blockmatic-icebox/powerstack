import { Link } from '@remix-run/react'
import { Wallet } from '~/components/wallet'
import { useStore } from '~/store'
import { styled } from '~/styles/stitches.config'

const Container = styled('div', {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: 1.4,
})

export default function Index() {
  const { user, appconfig } = useStore()
  console.log('Index user value', user)
  console.log('Index appconfig value', appconfig)
  return (
    <Container>
      <h1>Welcome {user ? 'Back' : null} to PoweStack Remix</h1>
      <Wallet />
      <ul>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
        <li>
          <Link to="/jokes-error">Jokes: Error</Link>
        </li>
      </ul>
    </Container>
  )
}
