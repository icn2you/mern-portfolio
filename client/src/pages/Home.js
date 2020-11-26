import React from 'react'
import { HomeHeader, HomeMain, HomeFooter } from '../components'
import Favicon from 'react-favicon'

const Home = ({ projects }) => {
  return (
    <>
      <Favicon url={require('../assets/images/1x/bitmoji-me-2020.png')} />
      <HomeHeader />
      <HomeMain projects={projects} />
      <HomeFooter />
    </>
  )
}

export default Home
