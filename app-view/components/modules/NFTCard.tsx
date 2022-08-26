import Image from 'next/image'
import { styled } from '~/app-view/styles/stitches.config'
import { ETHIcon } from '../icons'

const Container = styled('div', {
  border: '1px solid #ebebeb',
  borderRadius: '$radius-14',
  p: '$regular $small'
})

const NFTImage = styled('div', {
  borderRadius: '$radius-14',
  position: 'relative',
  height: 285,
  '& img': {
    borderRadius: '$radius-14',
  }
})

const NFTContent = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  columnGap: '$x-small',
  fontSize: '$neutral',
  pt: '$large',
  '& p': {
    fontSize: 14,
    my: 0,
  },
  '& h4': {
    fontSize: 14,
    fontWeight: 600,
    mb: 0,
    mt: '$xx-small',
  }
})

export const NFTCard = () => {
  return (
    <Container>
      <NFTImage>
        <Image alt="NFT Image" src="/logo-icon.png" layout="fill" objectFit="cover"/>
      </NFTImage>
      <NFTContent>
        <ETHIcon/>
        <div>
          <p>YugaLabs</p>
          <h4>Bored Ape Yacht Club</h4>
        </div>
      </NFTContent>
    </Container>
  )
}
