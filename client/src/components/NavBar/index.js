/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  08/27/2020
File:  index.js
Ver.:  0.1.0 20200827
       0.2.0 20201126

This script contains the NavBar React component of my developer
portfolio.
***********************************************************************/
import React from 'react'
import './style.scss'

const links = [
  {
    label: 'Home',
    href: '/',
    pages: 'port'
  },
  {
    label: 'Projects',
    href: '/#pinned-projects',
    pages: 'home'
  },
  {
    label: 'Contact',
    href: '/#contact-me',
    pages: 'both'
  },
  {
    label: 'About',
    href: '/#about',
    pages: 'both'
  }/*,
  {
    label: 'Blog',
    href: '/blog',
    pages: 'both'
  } */
]

const NavBar = () => {
  /*
    NOTE: When the site expands beyond two pages, the following logic
          will need to be refactored.
  */
  return (
    <nav>
      <ul>
        { window.location.pathname === '/'
          // Display home page navigation.
          ? links.filter(link =>
            link.pages === 'home' || link.pages === 'both'
          ).map((link, index) =>
            <li key={index}><a href={link.href}>{link.label}</a></li>)
          // Display portfolio page naviation.
          : links.filter(link =>
            link.pages === 'port' || link.pages === 'both'
          ).map((link, index) =>
            <li key={index}><a href={link.href}>{link.label}</a></li>)
        }
      </ul>
    </nav>
  )
}

export default NavBar
