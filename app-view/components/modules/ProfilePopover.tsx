import { styled } from '~/app-view/styles/stitches.config'
import {
  CaretDownIcon,
  GearSixIcon,
  SignOutIcon,
  SparkleIcon,
} from '~/app-view/components/icons/index'
import { Link } from '../base/Link'
import Image from 'next/image'
import { useAppEngine } from '~/app-engine/index'
import * as Popover from '@radix-ui/react-popover'
import * as Switch from '@radix-ui/react-switch'

const settings_link_styles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  transition: 'font-weight 200ms',
  '&:hover': {
    fontWeight: 'bold',
  },
  '& svg:first-child': {
    mr: '$small',
  },
  '& svg:last-child:not(:first-child)': {
    ml: '$regular',
    transform: 'rotate(270deg)',
  },
}

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
    my: 0,
  },
})

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

const SettingsLink = styled(Link, settings_link_styles)

const SettingsButton = styled('button', {
  ...settings_link_styles,
  bg: 'transparent',
  border: 'none',
  cursor: 'pointer',
  p: 0,
})

const SettingsContainer = styled('div', settings_link_styles)

const SettingsSwitch = styled(Switch.Root, {
  appearance: 'none',
  backgroundColor: '$neutral-400',
  border: 'none',
  borderRadius: '$radius-14',
  ml: 'auto',
  padding: 0,
  width: 50,
  height: 24,
  position: 'relative',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $neutral-300',
  },
})

const SettingsThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 25,
  height: 20,
  backgroundColor: 'white',
  borderRadius: '$radius-14',
  boxShadow: '0 3px 7px rgba(0, 0, 0, 0.12)',
  transform: 'translateX(1px)',
  transition: 'transform 400ms',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(22px)',
  },
})

export const ProfilePopover = () => {
  const { destroySession } = useAppEngine()

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
          <li>
            <SettingsLink href="/profile/settings">
              <GearSixIcon /> Settings and privacity <CaretDownIcon />
            </SettingsLink>
          </li>
          <li>
            <SettingsContainer>
              <SparkleIcon />
              Dark theme
              <SettingsSwitch>
                <SettingsThumb />
              </SettingsSwitch>
            </SettingsContainer>
          </li>
          <li>
            <SettingsButton type="button" onClick={destroySession}>
              <SignOutIcon />
              Logout
            </SettingsButton>
          </li>
        </ul>
      </StyledContent>
    </Popover.Root>
  )
}
