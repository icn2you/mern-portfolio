/***********************************************************************
FSWD:  Christopher B. Zenner
Date:  09/01/2020
File:  index.js
Ver.:  0.1.0 20200901

This script contains the Portrait React component of my developer 
portfolio.
***********************************************************************/import React from 'react'
import './style.scss'

const Portrait = () => {
  return (
    /* It is necessary for the img element to be contained within a div
       in order for the image border to render. */
    <div id="portrait">
      <img 
        src={require('../../assets/images/1x/avatar-me-2020.png')} 
        alt="Christopher Zenner" 
        className="img-fluid" 
      />
    </div>
  )
}

export default Portrait
