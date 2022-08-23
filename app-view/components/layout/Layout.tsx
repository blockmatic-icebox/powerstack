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
    gridTemplateColumns: 'min-content 1fr',
  }
})

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      <LayoutGrid>
        <Sidebar />
        <Main>
          {children}
        </Main>
      </LayoutGrid>
    </div>
  )
}
