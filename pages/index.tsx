import { styled } from '../app-view/styles/stitches.config'
import { NextPage } from 'next'

const MainContent = styled('div', {
  minHeight: '75vh',
  position: 'relative',
})

const Home: NextPage = () => {
  return <p>Home Sweet Home</p>
}

export default Home
