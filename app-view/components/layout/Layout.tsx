import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { styled } from '~/app-view/styles/stitches.config'

export const LayoutGrid = styled('div', {
  display: 'grid',
  boxSizing: 'border-box',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(1, 1fr)',
  // '@medium': {
  //   gridTemplateColumns: '380px minmax(calc(100% - 380px), calc($breakpoint-large - 380px))',
  // },
  // '@large': {
  //   gridTemplateColumns: '480px minmax(calc(100% - 480px), calc($breakpoint-large - 480px))',
  // },
})

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutGrid>
        <Sidebar>On the side</Sidebar>
        <Main>hey hey hey {children}</Main>
      </LayoutGrid>
      <Footer />
    </>
  )
}
