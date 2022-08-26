import { NextPage } from 'next'
import * as Tabs from '@radix-ui/react-tabs';
import { useAppEngine } from '~/app-engine'
import { styled } from '~/app-view/styles/stitches.config';
import Image from 'next/image';
import { NFTCard } from '~/app-view/components/modules/NFTCard';

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

const BalanceBox = styled('div', {
  bg: '#FBFBFB',
  borderRadius: '$radius-14',
  mb: '$regular',
  p: '$regular $small',
  '& p': {
    color: '$primary-700',
    fontSize: 20,
    mb: '$small',
    mt: 0,
  },
  '& h3': {
    color: '$primary-700',
    fontSize: 34,
    fontWeight: 700,
    my: 0,
  }
})

const WalletHeader = styled('header', {
  bg: '#F4F5F7',
  border: '1px solid #F0F0F0',
  borderTopLeftRadius: '$radius-18',
  borderTopRightRadius: '$radius-18',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  p: '$regular',
  '& p': {
    fontSize: 16,
    fontWeight: 500,
    my: 0,
  }
})

const WalletMain = styled('main', {
  border: '1px solid #F0F0F0',
  px: '$regular',
})

const CurrencyBox = styled('div', {
  display: 'flex',
  '& h4': {
    fontSize: 16,
    fontWeight: 600,
    my: 0,
  },
  '& span': {
    color: '$neutral',
    fontSize: 14,
  },
})

const CurrencyImage = styled('div', {
  flexShrink: 0,
})

const WalletRow = styled('div', {
  borderBottom: '1px solid #f0f0f0',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  py: '$regular',
  mb: '$regular',
})

const CurrencyBalance = styled('p', {
  color: '$044-bff',
  fontWeight: 700,
})

const CurrencyChange = styled('p', {
  color: '$error',
  fontWeight: 700,
})

const CurrencyTransfer = styled('button', {
  bg: 'transparent',
  border: 'none',
  color: '$044-bff',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: 16,
  p: 0,
  textAlign: 'left',
})

const CardsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
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
          <BalanceBox>
            <p>Total balance</p>
            <h3>10,000 US$</h3>
          </BalanceBox>
          <div>
            <WalletHeader>
              <p>Cryptocurrency</p>
              <p>Balance</p>
              <p>Price</p>
              <p>1h Change</p>
              <p>Send</p>
            </WalletHeader>
            <WalletMain>
              <WalletRow>
                <CurrencyBox>
                  <CurrencyImage>
                    <Image src="/logo-icon.png" width={42} height={42} alt="Currency Image"/>
                  </CurrencyImage>
                  <div>
                    <h4>Tether</h4>
                    <span>USDT</span>
                  </div>
                </CurrencyBox>
                <CurrencyBalance>9,500 USDT</CurrencyBalance>
                <p>1,00 US$</p>
                <CurrencyChange>-0,01 %</CurrencyChange>
                <CurrencyTransfer type="button" onClick={() => console.log('💼 start transfer')}>Transfer Now</CurrencyTransfer>
              </WalletRow>
            </WalletMain>
          </div>
        </Tabs.Content>
        <Tabs.Content value="nft-assets">
          <CardsGrid>
            <NFTCard />
          </CardsGrid>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default Wallet
