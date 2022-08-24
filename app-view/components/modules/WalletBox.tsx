import Image from 'next/image'
import { formatAddress } from '~/app-view/library/uiux'
import { styled } from '~/app-view/styles/stitches.config'
import { Link } from '../base/Link'
import { ArrowUpRight, CopyDocumentIcon } from '../icons'

type WalletBoxProps = {
  address: string
}

const Container = styled('div', {
  alignItems: 'flex-start',
  borderBottom: '1px solid $neutral-100',
  display: 'flex',
  mb: '$small',
  pb: '$small',
})

const PlaceholderImage = styled('div', {
  flexShrink: 0,
  mr: '$x-small'
})

const Address = styled('p', {
  fontSize: 14,
  fontWeight: 500,
  mb: '$xxx-small',
  mt: 0,
})

const AddressName = styled('p', {
  color: '$neutral-300',
  fontSize: 12,
  my: 0,
  '&:before': {
    display: 'inline-block',
    bg: '$neutral-300',
    borderRadius: '50%',
    content: '""',
    mr: 2,
    size: 8,
  },
  variants: {
    isActive: {
      true: {
        '&:before': {
          bg: '$success'
        }
      },
      false: {
        '&:before': {
          bg: '$error'
        }
      }
    }
  }
})

const AddressActions = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  ml: 'auto'
})

const CopyButton = styled('button', {
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  mr: '$x-small',
  p: 0,
})

const ExternalLink = styled(Link, { mb: 0, mt: 3 })

export const WalletBox = ({ address }: WalletBoxProps) => {
  return (
    <Container>
      <PlaceholderImage>
        <Image
          src="/wallet-placeholder.jpg"
          alt="Wallet Placeholder Image"
          width={21}
          height={21}
        />
      </PlaceholderImage>
      <div>
        <Address>{formatAddress(address)}</Address>
        {/* ToDo: add the correct name here and state here */}
        <AddressName isActive={true}>Metamask Wallet</AddressName>
      </div>
      <AddressActions>
        <CopyButton aria-label="Copy Address" type="button"><CopyDocumentIcon /></CopyButton>
        {/* ToDo: add the correct link here */}
        <ExternalLink target="_blank" aria-label="Go to address external link" href="#"><ArrowUpRight /></ExternalLink>
      </AddressActions>
    </Container>
  )
}
