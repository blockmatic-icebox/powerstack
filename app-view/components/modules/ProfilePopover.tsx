import { styled } from '~/app-view/styles/stitches.config'
import { CaretDownIcon } from '~/app-view/components/icons/index'
import { Link } from '../base/Link'
import Image from 'next/image'
import * as Popover from '@radix-ui/react-popover';

const StyledContent = styled(Popover.Content, {
  background: 'white',
  borderRadius: '$radius-18',
  boxShadow: '0px 10px 30px rgba(151, 167, 181, 0.27)',
  color: 'black',
  fontSize: 14,
  mt: '$x-small',
  padding: '$regular $small',
  '& ul': {
    listStyle: 'none',
    my: 0,
    pl: 0,
  },
  '& li': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    mb: '$small',
  },
  '& li:last-child': {
    mb: 0,
  },
  '& a': {
    my: 0
  }
});

const PopoverButton = styled(Popover.Trigger, {
  alignItems: 'center',
  background: 'white',
  border: '1px solid $neutral-100',
  borderRadius: 22.5,
  cursor: 'pointer',
  display: 'flex',
  ml: '$large',
  maxWidth: '100%',
  px: '$xx-small',
  py: 3,
  width: 168,
})

const PopoverContent = styled('div', {
  pl: '$x-small',
  pr: '$small',
  textAlign: 'left',
  '& h3': {
    color: '$primary-700',
    fontSize: 14,
    my: 0,
  },
  '& h4': {
    color: '$neutral',
    fontSize: 12,
    fontWeight: 400,
    my: 0,
  },
})

export const ProfilePopover = () => {
  return (
    <Popover.Root>
      <PopoverButton>
        <Image src="/logo-icon.png" alt="Profile Image" width="40" height="40" objectFit="cover" />
        <PopoverContent>
          <h3>Name</h3>
          <h4>@username</h4>
        </PopoverContent>
        <CaretDownIcon />
      </PopoverButton>
      <StyledContent>
        <ul>
          <li><Link href="/settings">Settings and privacity</Link></li>
          <li>Dark theme</li>
          <li>Logout</li>
        </ul>
      </StyledContent>
    </Popover.Root>
  )
}
