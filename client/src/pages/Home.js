import React from 'react'
import { HomeHeader, HomeMain, HomeFooter } from '../components'
import Favicon from 'react-favicon'

const Home = () => {
  return (
    <>
      <Favicon url={require('../assets/images/1x/bitmoji-me-2020.png')} />
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </>
  )
}

export default Home
