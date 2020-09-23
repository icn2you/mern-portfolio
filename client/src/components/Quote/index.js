/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/12/2020
File:  index.js
Ver.:  0.1.0 20200912

This script contains the Quote React component of my developer
portfolio.
***********************************************************************/
import React from 'react'
import './style.scss'

const Quote = () => {
  return (
    <div>
      <blockquote cite="Howard Thurman">
        Don't ask yourself what the world needs. Ask yourself what makes you come alive, and go do that, because what the world needs is people who have come alive.
      </blockquote>
    </div>
  )
}

export default Quote
