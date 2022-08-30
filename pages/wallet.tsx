import { NextPage } from 'next'
import * as Tabs from '@radix-ui/react-tabs'

const Wallet: NextPage = () => {
  return (
    // <h1>You should have your money here 💰</h1>
    <div>
      <Tabs.Root defaultValue="tokens" orientation="vertical">
        <Tabs.List aria-label="Wallet Tabs">
          <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
          <Tabs.Trigger value="nft-assets">NFTs assets</Tabs.Trigger>
        </Tabs.List>
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
                <button type="button" onClick={() => console.log('💼 start transfer')}>
                  Transfer Now
                </button>
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
