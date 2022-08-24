import Image from 'next/image'
import { formatAddress } from '~/app-view/library/uiux'
import { styled } from '~/app-view/styles/stitches.config'
import { Link } from '../base/Link'

type WalletBoxProps = {
  address: string
}

const Container = styled('div', {
  background: '#fbfbfb',
  borderRadius: '$radius-18',
  p: '$small',
})

const Title = styled('h4', {
  fontSize: 18,
  my: 0,
})

const Header = styled('header', {
  borderBottom: '1px solid $neutral-100',
  pb: '$small',
  mb: '$small',
})

const Main = styled('main', {
  alignItems: 'flex-start',
  display: 'flex',

})

const PlaceholderImage = styled('div', {
  flexShrink: 0,
  mr: '$x-small'
})

export const WalletBox = ({ address }: WalletBoxProps) => {
  return (
    <Container>
      <Header>
        <Title>Account</Title>
      </Header>
      <Main>
        <PlaceholderImage>
          <Image
            src="/wallet-placeholder.jpg"
            alt="Wallet Placeholder Image"
            width={21}
            height={21}
          />
        </PlaceholderImage>
        <div>
          <p><strong>{formatAddress(address)}</strong></p>
          <p>Metamask Wallet</p>
        </div>
        <div>
          <button type="button">copy</button>
          <Link href="#">External Address</Link>
        </div>
      </Main>
      <footer>
        <a href="#">+ Connect new wallet</a>
      </footer>
    </Container>
  )
}
