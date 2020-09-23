/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/27/2020
File:  index.js
Ver.:  0.1.0 20200827

This script contains the NavBar React component of my developer
portfolio.
***********************************************************************/
import React from 'react'
import './style.scss'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact-me">Contact</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#">Blog</a></li> */}
      </ul>
    </nav>
  )
}

export default NavBar
