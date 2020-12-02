import React from 'react'
import { SiteHeader, PortfolioMain, SiteFooter } from '../components'
import Favicon from 'react-favicon'

const Portfolio = ({ projects }) => {
  return (
    <>
      <Favicon url={require('../assets/images/1x/bitmoji-me-2020.png')} />
      <SiteHeader />
      <PortfolioMain projects={projects} />
      <SiteFooter />
    </>
  )
}

export default Portfolio
