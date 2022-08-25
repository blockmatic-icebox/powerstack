import { NextPage } from 'next'
import * as Tabs from '@radix-ui/react-tabs';
import { useAppEngine } from '~/app-engine'
import { styled } from '~/app-view/styles/stitches.config';

const Title = styled('h2', {
  fontSize: 24,
  mb: '$regular',
  mt: 0,
})

const TabsTrigger = styled(Tabs.Trigger, {
  borderBottom: '2px solid transparent',
  border: 'none',
  bg: 'transparent',
  color: '$neutral',
  cursor: 'pointer',
  fontSize: 16,
  fontWeight: 500,
  mr: '$regular',
  pb: '$xx-small',
  transition: 'color 400ms, border-color 400ms',
  '&[data-state="active"]': {
    color: '$044-bff',
    borderBottom: '2px solid $044-bff',
  }
})

const TabsList = styled(Tabs.List, {
  mb: '$regular',
  pt: '$xx-small',
})

const Wallet: NextPage = () => {
  const { user } = useAppEngine()

  console.log(user, 'user')
  return (
    // <h1>You should have your money here 💰</h1>
    <div>
      <Title>Your Wallet</Title>
      <Tabs.Root defaultValue="tokens" orientation="vertical">
        <TabsList aria-label="Wallet Tabs">
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="nft-assets">NFTs assets</TabsTrigger>
        </TabsList>
        <Tabs.Content value="tokens">
          <div>
            <p>Total balance</p>
            <h3>10,000 US$</h3>
          </div>
          <div>
            <header>
              <p>Cryptocurrency</p>
              <p>Balance</p>
              <p>Price</p>
              <p>1h Change</p>
              <p>Send</p>
            </header>
            <main>
              <div>
                <span>Image</span>
                <div>
                  <h4>Tether</h4>
                  <span>USDT</span>
                </div>
                <p>9,500 USDT</p>
                <p>1,00 US$</p>
                <p>-0,01 %</p>
                <button type="button" onClick={() => console.log('💼 start transfer')}>Transfer Now</button>
              </div>
            </main>
          </div>
        </Tabs.Content>
        <Tabs.Content value="nft-assets">
          <div>
            <span>nft image</span>
            <div>
              <span>icon</span>
              <div>
                <p>YugaLabs</p>
                <h4>Bored Ape Yacht Club</h4>
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default Wallet
