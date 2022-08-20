import React from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { styled } from '~/app-view/styles/stitches.config'

export const LayoutGrid = styled('div', {
  boxSizing: 'border-box',
  justifyContent: 'center',
  minHeight: '100vh',
  '@small': {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
  }
})

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <LayoutGrid>
      <Sidebar />
      <div>
        <Header />
        <Main>
          {children}
        </Main>
      </div>
    </LayoutGrid>
  )
}
