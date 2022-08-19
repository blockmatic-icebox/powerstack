import { HTMLProps, FC } from 'react'
import { styled } from '../../styles/stitches.config'
import NextLink, { LinkProps } from 'next/link'

// Note: removing this small hack causes this error:
// This JSX tag's 'children' prop expects type 'never' which requires multiple children, but only a single child was provided.
const link_styles: any = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  fontWeight: '$semi-bold',
  color: '$text-body',
  py: '$regular',
  transition: 'color 400ms',
  '&:hover, &:active, &:focus': {
    textDecoration: 'none',
    color: '$primary-purple',
  },
}

const StyledLink = styled('a', link_styles)

export const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  ...props
}) => {
  const internal = /^\/(?!\/)/.test(href)

  return internal ? (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  ) : (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  )
}
