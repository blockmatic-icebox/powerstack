import { NextPage } from 'next'
import * as Tabs from '@radix-ui/react-tabs'
import { TabOptions } from '~/app-view/components/layout/Tab'
import { styled } from '~/app-view/styles/stitches.config'

const Tab = styled(Tabs.Trigger, {
  pb: '$xx-small',
  fontWeight: 600,
  color: '$neutral',
})

const Card = styled('div', {
  backgroundColor: '$neutral-100',
  p: '$small',
  borderRadius: '$radius-14',
  marginBottom: '$medium',
})

const H3 = styled('h3', {
  mt: '$xxx-small',
  fontWeight: 800,
})

const Wallet: NextPage = () => {
  return (
    <>
      <Tabs.Root defaultValue="tokens" orientation="vertical">
        <TabOptions css={{ marginBottom: '$large', maxWidth: 'fit-content' }}>
          <Tab value="tokens" css={{ marginRight: '$small' }}>
            Tokens
          </Tab>
          <Tab value="nft-assets">NFTs assets</Tab>
        </TabOptions>
        <Tabs.Content value="tokens">
          <Card>
            <p>Total balance</p>
            <H3>10,000 US$</H3>
          </Card>
          {/* adds table  */}
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
    </>
  )
}

export default Wallet
