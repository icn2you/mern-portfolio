import React from 'react'
import { Header, Main, Footer } from '../components'
import Favicon from 'react-favicon'

const Projects = () => {
  return (
    <>
      <Favicon url={require('../assets/images/1x/bitmoji-me-2020.png')} />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Projects
