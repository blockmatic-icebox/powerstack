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
  gridGap: '$regular',
  gridTemplateColumns: '300px 1fr',
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
