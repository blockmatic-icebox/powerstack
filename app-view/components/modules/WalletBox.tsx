import Image from 'next/image'
import { useState } from 'react'
import { copyToClipboard, formatAddress } from '~/app-view/library/uiux'
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
  mr: '$x-small',
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
          bg: '$success',
        },
      },
      false: {
        '&:before': {
          bg: '$error',
        },
      },
    },
  },
})

const AddressActions = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  ml: 'auto',
  position: 'relative',
})

const CopyButton = styled('button', {
  cursor: 'pointer',
  bg: 'transparent',
  border: 'none',
  mr: '$x-small',
  p: 0,
})

const ExternalLink = styled(Link, { mb: 0, mt: 3 })

const Tooltip = styled('p', {
  bg: '$neutral-100',
  borderRadius: '$radius-24',
  fontSize: 12,
  ml: '$x-small',
  my: 0,
  py: 2,
  position: 'absolute',
  textAlign: 'center',
  width: 180,
  zIndex: 101,
})

export const WalletBox = ({ address }: WalletBoxProps) => {
  const [show_tooltip, setShowTooltip] = useState<boolean>(false)

  const copyWalletAddress = () => {
    if (!address) return
    copyToClipboard(address)
    setShowTooltip(true)

    const timeout = setTimeout(() => {
      setShowTooltip(false)
      clearTimeout(timeout)
    }, 2000)
  }

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
        <CopyButton aria-label="Copy Address" type="button" onClick={copyWalletAddress}>
          <CopyDocumentIcon />
        </CopyButton>
        {show_tooltip && <Tooltip>Address copied successfully!</Tooltip>}
        {/* ToDo: add the correct link here */}
        <ExternalLink target="_blank" aria-label="Go to address external link" href="#">
          <ArrowUpRight />
        </ExternalLink>
      </AddressActions>
    </Container>
  )
}
